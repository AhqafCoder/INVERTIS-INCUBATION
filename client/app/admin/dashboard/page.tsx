"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Calendar, 
  Image, 
  Award, 
  FileText, 
  Video, 
  TrendingUp,
  Users,
  Activity
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  incubationService,
  eventService,
  galleryService,
  achievementService,
  patentService,
  videoService
} from "@/lib/services";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    programs: 0,
    events: 0,
    gallery: 0,
    achievements: 0,
    patents: 0,
    videos: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [programs, events, gallery, achievements, patents, videos] = await Promise.all([
        incubationService.getAll(),
        eventService.getAll(),
        galleryService.getAll(),
        achievementService.getAll(),
        patentService.getAll(),
        videoService.getAll()
      ]);

      setStats({
        programs: programs.length,
        events: events.length,
        gallery: gallery.length,
        achievements: achievements.length,
        patents: patents.length,
        videos: videos.length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statsData = [
    { 
      name: 'Incubation Programs', 
      value: stats.programs, 
      icon: BookOpen, 
      color: 'bg-blue-500',
      href: '/admin/incubation'
    },
    { 
      name: 'Events', 
      value: stats.events, 
      icon: Calendar, 
      color: 'bg-green-500',
      href: '/admin/events'
    },
    { 
      name: 'Gallery Images', 
      value: stats.gallery, 
      icon: Image, 
      color: 'bg-purple-500',
      href: '/admin/gallery'
    },
    { 
      name: 'Achievements', 
      value: stats.achievements, 
      icon: Award, 
      color: 'bg-yellow-500',
      href: '/admin/achievements'
    },
    { 
      name: 'Patents', 
      value: stats.patents, 
      icon: FileText, 
      color: 'bg-red-500',
      href: '/admin/patents'
    },
    { 
      name: 'Videos', 
      value: stats.videos, 
      icon: Video, 
      color: 'bg-indigo-500',
      href: '/admin/videos'
    },
  ];

  const quickActions = [
    {
      title: 'Add Incubation Program',
      description: 'Create a new program',
      icon: BookOpen,
      color: 'border-blue-200 hover:border-blue-500 hover:bg-blue-50',
      iconColor: 'text-blue-600',
      href: '/admin/incubation/create'
    },
    {
      title: 'Add Event',
      description: 'Create a new event',
      icon: Calendar,
      color: 'border-green-200 hover:border-green-500 hover:bg-green-50',
      iconColor: 'text-green-600',
      href: '/admin/events/create'
    },
    {
      title: 'Upload to Gallery',
      description: 'Add new images',
      icon: Image,
      color: 'border-purple-200 hover:border-purple-500 hover:bg-purple-50',
      iconColor: 'text-purple-600',
      href: '/admin/gallery/create'
    }
  ];

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user?.name}! Here's an overview of your content.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">System Online</span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={stat.href}>
                  <Card className="hover:shadow-lg transition-all cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-gray-600">
                        {stat.name}
                      </CardTitle>
                      <div className={`${stat.color} p-2 rounded-lg`}>
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-gray-900">
                        {loading ? '...' : stat.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Total items</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link href={action.href}>
                      <div className={`p-4 border-2 rounded-lg transition-all text-left ${action.color}`}>
                        <action.icon className={`w-6 h-6 ${action.iconColor} mb-2`} />
                        <h3 className="font-semibold text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Database seeded successfully
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Sample data loaded</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-green-100 p-2 rounded">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Admin account active
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Ready to manage content</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-900">API Server</span>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-900">Database</span>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Connected</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm font-medium text-gray-900">Storage</span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
