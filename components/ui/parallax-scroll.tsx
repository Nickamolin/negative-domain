"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  // const firstPart = images.slice(0, third);
  // const secondPart = images.slice(third, 2 * third);
  // const thirdPart = images.slice(2 * third);
  const firstPart: string[] = []
  const secondPart: string[] = []
  const thirdPart: string[] = []

  for (let i = 0; i < images.length; i++) {
    let column = i % 3
    switch (column) {
      case 0:
        firstPart.push(images[i])
        break;
      case 1:
        secondPart.push(images[i])
        break;
      case 2:
        thirdPart.push(images[i])
        break;
    }
  }

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: '/branding/banner.jpg', speed: -7 }]}
          className="md:aspect-[4/1] aspect-[3/2]"
        />
      </ParallaxProvider>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10 lg:hidden">
          {images.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-2" + idx}>
              <img src={el} className="rounded-lg"></img>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              {/* <Image
                src={el}
                className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              /> */}
              <img src={el} className="rounded-lg"></img>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img src={el} className="rounded-lg"></img>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img src={el} className="rounded-lg"></img>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};