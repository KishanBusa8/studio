'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
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
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(startIndex);
    setIsZoomed(false);
  }, [startIndex, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case ' ':
          e.preventDefault();
          setIsZoomed(!isZoomed);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, isZoomed, onClose]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsZoomed(false);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsZoomed(false);
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="bg-background/95 backdrop-blur-md border-0 w-screen h-screen max-w-none flex items-center justify-center p-0 dark:bg-black/90">
        <DialogTitle className="sr-only">Project Image Gallery</DialogTitle>
        <DialogDescription className="sr-only">
          A carousel of images for the project. Use the next and previous buttons to navigate.
        </DialogDescription>

        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Close Button */}
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-6 right-6 z-50 rounded-full bg-background/80 text-foreground h-12 w-12 hover:bg-background hover:text-primary transition-all duration-300 transform hover:scale-110 border border-border/50 backdrop-blur-sm"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button> */}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-6 left-6 z-50">
              <Badge variant="secondary" className="bg-background/80 text-foreground border-border/50 backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </Badge>
            </div>
          )}

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-background/80 text-foreground hover:bg-background hover:text-primary transition-all duration-300 border border-border/50 backdrop-blur-sm transform hover:scale-110"
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-background/80 text-foreground hover:bg-background hover:text-primary transition-all duration-300 border border-border/50 backdrop-blur-sm transform hover:scale-110"
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next</span>
              </Button>
            </>
          )}

          {/* Image Container */}
          <div className="relative w-[90vw] h-[80vh] flex items-center justify-center">
            {images[currentIndex] && (
              <div 
                className={`relative w-full h-full transition-all duration-300 cursor-pointer ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onClick={handleImageClick}
              >
                <Image
                  src={images[currentIndex].url}
                  alt={images[currentIndex].hint || `Gallery image ${currentIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="animate-fade-in rounded-lg"
                  priority
                />
                
                {/* Image Hint Overlay */}
                {images[currentIndex].hint && (
                  <div className="absolute bottom-4 left-4 bg-background/90 text-foreground px-3 py-2 rounded-lg border border-border/50 backdrop-blur-sm">
                    <p className="text-sm font-medium">{images[currentIndex].hint}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsZoomed(!isZoomed)}
              className="rounded-full bg-background/80 text-foreground hover:bg-background hover:text-primary transition-all duration-300 border border-border/50 backdrop-blur-sm"
            >
              {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
            </Button>
            
            {isZoomed && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsZoomed(false)}
                className="rounded-full bg-background/80 text-foreground hover:bg-background hover:text-primary transition-all duration-300 border border-border/50 backdrop-blur-sm"
              >
                <RotateCw className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="absolute bottom-6 right-6 z-50">
            <div className="text-xs text-muted-foreground bg-background/80 px-3 py-2 rounded-lg border border-border/50 backdrop-blur-sm">
              <p>← → Navigate • Space Zoom • Esc Close</p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50">
              <div className="flex gap-2 max-w-[80vw] overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsZoomed(false);
                    }}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                      index === currentIndex 
                        ? 'border-primary scale-110' 
                        : 'border-border/50 hover:border-primary/50'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
