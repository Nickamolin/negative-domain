"use client"

import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxScroll } from "../components/ui/parallax-scroll";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <ParallaxScrollDemo></ParallaxScrollDemo>
    </main>
  );
}

const images = [
  "/art/habitualConfinement.png",
  "/art/nightlife.jpg",
  "/art/iceCold.PNG",
  "/art/z.JPG",
  "/art/n.JPG",
  "/art/hellfire.PNG",
  "/art/watcher.PNG",
  "/art/newLight.PNG",
  "/art/lost.jpg"
];

function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} className="min-h-screen pb-50"/>;
}