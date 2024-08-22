"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ArticleCarousel({ children }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const items = [
    { title: "Slide 1", content: "Content for slide 1" },
    { title: "Slide 2", content: "Content for slide 2" },
    { title: "Slide 3", content: "Content for slide 3" },
    { title: "Slide 4", content: "Content for slide 4" },
    { title: "Slide 5", content: "Content for slide 5" },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Call onSelect immediately to set the initial state
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleBulletClick = useCallback(
    (index) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="w-full max-w-xs mx-auto">
      <Carousel
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {children.map((item, index) => (
            <CarouselItem key={index}>{item}</CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-2 h-2 p-0 rounded-full ${current === index ? "bg-primary" : "bg-secondary"}`}
              onClick={() => handleBulletClick(index)}
              aria-current={current === index ? "true" : "false"}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
