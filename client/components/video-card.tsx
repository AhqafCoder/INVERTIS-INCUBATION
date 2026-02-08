"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VideoData } from "@/data/videos-data";

interface VideoCardProps {
  video: VideoData;
  index: number;
  onClick: (video: VideoData) => void;
}

export function VideoCard({ video, index, onClick }: VideoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => onClick(video)}
      className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
    >
      <div className="flex flex-col md:flex-row gap-5 p-5">
        {/* Video Preview - 9:16 aspect ratio */}
        <div className="relative w-full md:w-52 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100" style={{ aspectRatio: '9/16' }}>
          <video
            className="preview-video w-full h-full object-cover"
            src={video.videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-5 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Play className="w-10 h-10 text-blue-600 fill-blue-600" />
            </div>
          </div>
          {/* Date Badge */}
          {video.date && (
            <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
              {video.date}
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h2>
          <p className="text-gray-600 line-clamp-3 md:line-clamp-4 text-sm leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
