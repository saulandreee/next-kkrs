"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function EventCarousel({ children }) {
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
    <div className="w-full max-w-sm mx-auto px-2">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {children.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 w-4/5 basis-4/5 md:basis-4/5"
            >
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center space-x-2 items-center mt-2.5">
          <CarouselPrevious
            variant="secondary"
            className="!relative !top-0 !left-0 !right-0 !bottom-0 !translate-0 !translate-x-0 !translate-y-0 mx-2 bg-white shadow"
          />
          {children.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-3 h-3 p-0 rounded-full transition-all ${current === index ? "bg-pourri-700 w-8" : "bg-pourri-600"}`}
              onClick={() => handleBulletClick(index)}
              aria-current={current === index ? "true" : "false"}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
          <CarouselNext
            variant="secondary"
            className="!relative !top-0 !left-0 !right-0 !bottom-0 !translate-0 !translate-x-0 !translate-y-0 mx-2 bg-white shadow"
          />
        </div>
      </Carousel>
    </div>
  );
}
