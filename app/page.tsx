"use client";
import Navbar from "./components/Navbar/Navbar";
import MarqueeComponent from "./components/Marquee/MarqueeComponent";
import PageContent from "./components/PageContent/PageContent";
import Cursor from "./components/Cursor/Cursor";
import Background from "./assets/background.svg";
import { useState } from "react";
import Image from "next/image";
import VideoComponent from "./components/VideoComponent/VideoComponent";

export default function Home() {
  const [isHovered, setIsHovered] = useState(true);
  return (
    <div className="flex flex-col items-center" onMouseOut={()=>setIsHovered(true)} onMouseOver={()=>setIsHovered(false)}>
      <Cursor isHovered={isHovered} />
      <div className="flex flex-col items-center w-full lg:px-10">
        <Image src={Background} alt="background" className="absolute -z-30" />
        <Navbar
          handleMouseOut={() => setIsHovered(false)}
          handleMouseOver={() => setIsHovered(true)}
        />
        <PageContent
          handleMouseOut={() => setIsHovered(false)}
          handleMouseOver={() => setIsHovered(true)}
        />
      </div>
      <MarqueeComponent />
      <VideoComponent
        handleMouseOut={() => setIsHovered(false)}
        handleMouseOver={() => setIsHovered(true)}
      />
    </div>
  );
}
