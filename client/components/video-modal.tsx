"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { VideoData } from "@/data/videos-data";

interface VideoModalProps {
  video: VideoData | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (video) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-black rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors duration-200 hover:rotate-90 transform"
              aria-label="Close video modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container */}
            <div className="aspect-video bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                autoPlay
                src={video.videoSrc}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-5 bg-gradient-to-r from-gray-900 to-black text-white max-h-[30vh] overflow-y-auto video-modal-content">
              <h3 className="text-xl font-bold text-white mb-2">
                {video.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {video.description}
              </p>
              {video.date && (
                <div className="mt-3 inline-block bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                  {video.date}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
