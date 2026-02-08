"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { patentService } from "@/lib/services";

export default function PatentsAdmin() {
  const { user } = useAuth();
  const [patents, setPatents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPatents();
  }, []);

  const fetchPatents = async () => {
    try {
      const data = await patentService.getAll();
      setPatents(data);
    } catch (error) {
      console.error('Error fetching patents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this patent?')) return;
    
    try {
      await patentService.delete(id);
      setPatents(patents.filter(p => p._id !== id));
    } catch (error) {
      console.error('Error deleting patent:', error);
      alert('Failed to delete patent');
    }
  };

  const filteredPatents = patents.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.patentNumber?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Patents</h1>
              <p className="text-gray-600 mt-1">Manage patents and intellectual property</p>
            </div>
            <Link href="/admin/patents/create">
              <Button className="w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Add Patent
              </Button>
            </Link>
          </div>

          {/* Search Bar */}
          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </CardContent>
          </Card>

          {/* Patents List */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading patents...</p>
            </div>
          ) : filteredPatents.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-600">No patents found. Add your first patent!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredPatents.map((patent, index) => (
                <motion.div
                  key={patent._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
                          <FileText className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {patent.title}
                              </h3>
                              {patent.patentNumber && (
                                <p className="text-sm font-mono text-blue-600 mb-2">
                                  {patent.patentNumber}
                                </p>
                              )}
                              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                                {patent.description}
                              </p>
                              <div className="flex flex-wrap gap-2 items-center">
                                {patent.status && (
                                  <Badge variant={patent.status === 'granted' ? 'default' : 'secondary'}>
                                    {patent.status}
                                  </Badge>
                                )}
                                {patent.category && (
                                  <Badge variant="outline">{patent.category}</Badge>
                                )}
                                {patent.inventors?.length > 0 && (
                                  <span className="text-xs text-gray-500">
                                    👥 {patent.inventors.length} inventor(s)
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 flex-shrink-0">
                              {patent.document && (
                                <a href={`http://localhost:5000${patent.document}`} target="_blank">
                                  <Button variant="outline" size="sm">
                                    <FileText className="w-4 h-4" />
                                  </Button>
                                </a>
                              )}
                              <Link href={`/admin/patents/edit/${patent._id}`}>
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </Link>
                              {user?.role === 'admin' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDelete(patent._id)}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </div>

                          {/* Dates */}
                          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                            {patent.filingDate && (
                              <span>Filed: {new Date(patent.filingDate).toLocaleDateString()}</span>
                            )}
                            {patent.grantDate && (
                              <>
                                <span>•</span>
                                <span>Granted: {new Date(patent.grantDate).toLocaleDateString()}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
