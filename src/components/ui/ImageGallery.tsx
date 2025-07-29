'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectImage } from '@/types';

interface ImageGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: ProjectImage[];
  startIndex?: number;
}

export function ImageGallery({
  isOpen,
  onClose,
  images,
  startIndex = 0,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex, isOpen]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/80 backdrop-blur-sm border-0 w-screen h-screen max-w-none flex items-center justify-center p-0">
        <DialogTitle className="sr-only">Project Image Gallery</DialogTitle>
        <DialogDescription className="sr-only">
          A carousel of images for the project. Use the next and previous buttons to navigate.
        </DialogDescription>

        <div className="relative w-full h-full flex items-center justify-center">
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-6 right-4 z-50 rounded-full bg-black/50 text-white h-10 w-10 hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          {images.length > 1 && (
            <>
               <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-black/30 text-white hover:bg-white/20 hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-10 w-10" />
                <span className="sr-only">Previous</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-black/30 text-white hover:bg-white/20 hover:text-white transition-all duration-300"
              >
                <ChevronRight className="h-10 w-10" />
                <span className="sr-only">Next</span>
              </Button>
            </>
          )}

          <div className="relative w-[90vw] h-[80vh]">
            {images[currentIndex] && (
               <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].hint || `Gallery image ${currentIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className="animate-fade-in"
              />
            )}
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
