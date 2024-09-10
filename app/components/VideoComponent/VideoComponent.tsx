"use client";
import { ComponentProps } from "@/app/utils/constants";

export default function VideoComponent({
  handleMouseOut,
  handleMouseOver,
}: ComponentProps) {
  return (
    <div
      className="w-full h-full max-h-[150vw] bg-[#17181B]"
      onMouseOver={(e) => {
        e.stopPropagation();
        handleMouseOver();
      }}
      onMouseOut={(e) => {
        e.stopPropagation();
        handleMouseOut();
      }}
    >
      <video
        className="w-full h-screen lg:object-cover"
        src="https://juspay.io/global/sea/build-for/build-for-the-world-sea.mp4"
        title="Video player"
        autoPlay
        muted
        loop
      />
    </div>
  );
}
