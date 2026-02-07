"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { videosData, VideoData } from "@/data/videos-data";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { VideoCard } from "@/components/video-card";
import { VideoModal } from "@/components/video-modal";

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  const openVideoModal = (video: VideoData) => {
    setSelectedVideo(video);
    // Pause all preview videos
    const galleryVideos = document.querySelectorAll<HTMLVideoElement>('.preview-video');
    galleryVideos.forEach(v => v.pause());
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    // Resume preview videos
    const galleryVideos = document.querySelectorAll<HTMLVideoElement>('.preview-video');
    galleryVideos.forEach(v => v.play());
  };

  return (
    <>
      <HeroHighlight containerClassName="min-h-screen w-full !h-auto">
        <div className="min-h-screen bg-white relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 pb-12"
          >
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Videos <Highlight className="text-white">Gallery</Highlight>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of inspiring videos featuring industry experts, successful entrepreneurs, 
                and innovative sessions
              </p>
            </div>
          </motion.div>

          {/* Video Grid */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-20">
            <div className="max-w-5xl mx-auto space-y-6">
          {videosData.map((video, index) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              index={index} 
              onClick={openVideoModal} 
            />
          ))}
            </div>
          </div>
        </div>
      </HeroHighlight>

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={closeVideoModal} />
    </>
  );
}
