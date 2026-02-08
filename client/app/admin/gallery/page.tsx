"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { galleryService } from "@/lib/services";
import Image from "next/image";

export default function GalleryAdmin() {
  const { user } = useAuth();
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const data = await galleryService.getAll();
      setImages(data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;
    
    try {
      await galleryService.delete(id);
      setImages(images.filter(img => img._id !== id));
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image');
    }
  };

  const filteredImages = images.filter(img =>
    img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
              <p className="text-gray-600 mt-1">Manage your gallery images</p>
            </div>
            <Link href="/admin/gallery/create">
              <Button className="w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Upload Image
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
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </CardContent>
          </Card>

          {/* Images Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading images...</p>
            </div>
          ) : filteredImages.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-600">No images found. Upload your first image!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    {/* Image */}
                    <div className="relative w-full aspect-video bg-gray-100">
                      <Image
                        src={`http://localhost:5000${img.image}`}
                        alt={img.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 truncate">{img.title}</h3>
                      {img.description && (
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{img.description}</p>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {img.category && <Badge variant="secondary">{img.category}</Badge>}
                        {img.tags?.slice(0, 2).map((tag: string) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Link href={`/admin/gallery/edit/${img._id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </Link>
                        {user?.role === 'admin' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(img._id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
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
