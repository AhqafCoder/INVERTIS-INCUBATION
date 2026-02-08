"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { achievementService } from "@/lib/services";
import Image from "next/image";

export default function AchievementsAdmin() {
  const { user } = useAuth();
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const data = await achievementService.getAll();
      setAchievements(data);
    } catch (error) {
      console.error('Error fetching achievements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this achievement?')) return;
    
    try {
      await achievementService.delete(id);
      setAchievements(achievements.filter(a => a._id !== id));
    } catch (error) {
      console.error('Error deleting achievement:', error);
      alert('Failed to delete achievement');
    }
  };

  const filteredAchievements = achievements.filter(a =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
              <p className="text-gray-600 mt-1">Manage success stories and achievements</p>
            </div>
            <Link href="/admin/achievements/create">
              <Button className="w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Add Achievement
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
                  placeholder="Search achievements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </CardContent>
          </Card>

          {/* Achievements List */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading achievements...</p>
            </div>
          ) : filteredAchievements.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-600">No achievements found. Add your first achievement!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {/* Image or Icon */}
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 flex-shrink-0 flex items-center justify-center">
                          {achievement.image ? (
                            <Image
                              src={`http://localhost:5000${achievement.image}`}
                              alt={achievement.title}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          ) : (
                            <Trophy className="w-12 h-12 text-white" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {achievement.title}
                              </h3>
                              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                                {achievement.description}
                              </p>
                              <div className="flex flex-wrap gap-2 items-center">
                                {achievement.category && (
                                  <Badge variant="secondary">{achievement.category}</Badge>
                                )}
                                {achievement.isFeatured && (
                                  <Badge className="bg-yellow-500">Featured</Badge>
                                )}
                                {achievement.date && (
                                  <span className="text-xs text-gray-500">
                                    {new Date(achievement.date).toLocaleDateString()}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 flex-shrink-0">
                              <Link href={`/admin/achievements/edit/${achievement._id}`}>
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </Link>
                              {user?.role === 'admin' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDelete(achievement._id)}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
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
