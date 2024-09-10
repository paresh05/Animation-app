"use client";
import Image from "next/image";
import GlobalHover from "../../assets/globalHover.svg";
import CursorImage from "../../assets/cursor.svg";
import JuspayHover from "../../assets/juspayHover.svg";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface CursorProps {
  isHovered: boolean;
}

export default function Cursor({ isHovered }: CursorProps) {
  const cursorImageRef = useRef(null);
  const cursorHoverImageRef = useRef(null);
  const cursorHoverTextContainerRef = useRef(null);
  const cursorHoverNumberRef = useRef(null);
  const cursorHoverTextRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth > 1024) {
        setCursorPosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    const cursorImage = cursorImageRef.current;
    const cursorHoverImage = cursorHoverImageRef.current;
    const cursorHoverTextContainer = cursorHoverTextContainerRef.current;
    const cursorHoverNumber = cursorHoverNumberRef.current;
    const cursorHoverText = cursorHoverTextRef.current;
    if (window.innerWidth > 1024) {
      if (cursorImage) {
        gsap.to(cursorImage, {
          opacity: isHovered ? 0 : 1,
          duration: 0.5,
        });
      }
      if (cursorHoverImage) {
        gsap.to(cursorHoverImage, {
          width: isHovered ? "0px" : "212px",
          height: isHovered ? "0px" : "212px",
          duration: 0.5,
        });
      }
      gsap.to(cursorHoverTextContainer, {
        width: isHovered ? "0px" : "108px",
        height: isHovered ? "0px" : "70px",
        duration: 0.5,
      });
      gsap.to(cursorHoverNumber, {
        width: isHovered ? "0px" : "100%",
        height: isHovered ? "0px" : "100%",
        duration: 0.5,
      });
      gsap.to(cursorHoverText, {
        width: isHovered ? "0px" : "100%",
        height: isHovered ? "0px" : "100%",
        duration: 0.5,
      });
    }
  }, [isHovered]);

  return (
    <div
      ref={cursorImageRef}
      className="fixed top-0 left-0 pointer-events-none -z-10 opacity-0"
      style={{
        transform: `translate3d(${cursorPosition.x - 90}px, ${
          cursorPosition.y - 50
        }px, 0)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="flex relative ">
        <div ref={cursorHoverImageRef} className="h-0 w-0">
          <Image
            src={
              cursorPosition.x < 400
                ? CursorImage
                : cursorPosition.x > 1050
                ? JuspayHover
                : GlobalHover
            }
            className="h-full w-full"
            alt="cursor"
            priority
          />
        </div>
        <div
          ref={cursorHoverTextContainerRef}
          className={`absolute right-[-54px] flex w-0 h-0 flex-col justify-center items-center gap-2 shrink-0 py-2 rounded-[22px] border-[0.8px] border-solid border-white bg-[#121316] ${
            cursorPosition.x > 1050 ? "top-3.5 px-2" : "bottom-3.5 px-4"
          }`}
        >
          <span
            ref={cursorHoverNumberRef}
            className="text-[#fff] text-xl not-italic font-semibold leading-[120%] overflow-hidden w-0 h-0"
          >
            {cursorPosition.x < 400
              ? "125Mn+"
              : cursorPosition.x > 1050
              ? "$500Bn+"
              : "99.99%"}
          </span>
          <span
            ref={cursorHoverTextRef}
            className="text-[#A6ADB7] text-[11px] not-italic font-medium leading-[normal] overflow-hidden w-0 h-0"
          >
            {cursorPosition.x < 400
              ? "Annual TPV"
              : cursorPosition.x > 1050
              ? "Daily Txns"
              : "Uptime"}
          </span>
        </div>
      </div>
    </div>
  );
}
