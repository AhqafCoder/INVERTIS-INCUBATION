"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryData } from "@/data/gallery-data";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; index: number; totalImages: number } | null>(null);

  const openLightbox = (src: string, title: string, index: number, totalImages: number) => {
    setSelectedImage({ src, title, index, totalImages });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    // Find the current event and image
    let currentEventIndex = 0;
    let currentImageIndex = 0;
    let foundCurrent = false;

    for (let i = 0; i < galleryData.length; i++) {
      for (let j = 0; j < galleryData[i].images.length; j++) {
        if (galleryData[i].images[j] === selectedImage.src) {
          currentEventIndex = i;
          currentImageIndex = j;
          foundCurrent = true;
          break;
        }
      }
      if (foundCurrent) break;
    }

    if (direction === "next") {
      if (currentImageIndex < galleryData[currentEventIndex].images.length - 1) {
        const nextSrc = galleryData[currentEventIndex].images[currentImageIndex + 1];
        setSelectedImage({
          src: nextSrc,
          title: galleryData[currentEventIndex].title,
          index: currentImageIndex + 2,
          totalImages: galleryData[currentEventIndex].images.length
        });
      } else if (currentEventIndex < galleryData.length - 1) {
        const nextSrc = galleryData[currentEventIndex + 1].images[0];
        setSelectedImage({
          src: nextSrc,
          title: galleryData[currentEventIndex + 1].title,
          index: 1,
          totalImages: galleryData[currentEventIndex + 1].images.length
        });
      }
    } else {
      if (currentImageIndex > 0) {
        const prevSrc = galleryData[currentEventIndex].images[currentImageIndex - 1];
        setSelectedImage({
          src: prevSrc,
          title: galleryData[currentEventIndex].title,
          index: currentImageIndex,
          totalImages: galleryData[currentEventIndex].images.length
        });
      } else if (currentEventIndex > 0) {
        const prevEventImages = galleryData[currentEventIndex - 1].images;
        const prevSrc = prevEventImages[prevEventImages.length - 1];
        setSelectedImage({
          src: prevSrc,
          title: galleryData[currentEventIndex - 1].title,
          index: prevEventImages.length,
          totalImages: prevEventImages.length
        });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
                Event <Highlight className="text-white">Gallery</Highlight>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the memorable moments from our events, workshops, and programs at Invertis Innovation & Incubation Centre
              </p>
            </div>
          </motion.div>

          {/* Gallery Sections */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-20">
            {galleryData.map((event, eventIndex) => (
              <motion.div
                key={eventIndex}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="mb-16"
              >
                {/* Event Header */}
                <motion.div variants={itemVariants} className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </motion.div>

                {/* Image Grid */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
                >
                  {event.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      variants={itemVariants}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group bg-gray-100"
                      onClick={() => openLightbox(image, event.title, imageIndex + 1, event.images.length)}
                    >
                      <Image
                        src={`/${image}`}
                        alt={`${event.title} - Image ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Divider */}
                {eventIndex < galleryData.length - 1 && (
                  <div className="mt-12 border-b border-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </HeroHighlight>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={`/${selectedImage.src}`}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-lg font-semibold">{selectedImage.title}</p>
                <p className="text-sm text-gray-300">
                  Image {selectedImage.index} of {selectedImage.totalImages}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
