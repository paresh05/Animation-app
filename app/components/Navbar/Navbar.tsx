"use client";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import ContactUs from "../../assets/contactUs.svg";
import Globe from "../../assets/globe.svg";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";
import SouthAsia from "../../assets/regions/sea.svg";
import Latam from "../../assets/regions/latam.svg";
import NorthAmerica from "../../assets/regions/northAmerica.svg";
import Europe from "../../assets/regions/europe.svg";
import India from "../../assets/regions/india.svg";
import "./navbar.css";

export default function Navbar() {
  const logoRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleLogoTextAnimation = () => {
    const letters = document.querySelectorAll(".letter");

    const order = ["S", "P", "U", "A", "J", "Y"];

    const tl = gsap.timeline();

    order.forEach((letter, index) => {
      const letterElements = Array.from(letters).find(
        (el) => el.textContent === letter
      );

      const delay = index * 0.1;

      if (letterElements) {
        tl.fromTo(
          letterElements,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1 },
          `${delay}`
        );
      }
    });
  };

  useGSAP(() => {
    const logo = logoRef.current;
    const links = document.querySelectorAll("a");

    gsap.fromTo(
      links,
      { y: 25 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
    );

    gsap.fromTo(
      logo,
      { x: 50 },
      {
        x: 0,
        rotation: "-=360",
        duration: 1,
        opacity: 1,
        onComplete: handleLogoTextAnimation,
      }
    );
  });
  return (
    <div className="w-full px-5 py-3 lg:py-7 lg:pr-11 lg:pl-8">
      <div className="rounded-full border-[#211F1F] border-2 p-2 lg:p-5 flex justify-between">
        <div className="cursor-pointer flex items-center gap-1 md:gap-2 p-2 lg:p-0">
          <Image
            className="opacity-0 w-6 md:w-8 lg:w-10"
            ref={logoRef}
            src={Logo}
            alt="Juspay logo"
            priority
          />
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
            <span className="letter">J</span>
            <span className="letter">U</span>
            <span className="letter">S</span>
            <span className="letter">P</span>
            <span className="letter">A</span>
            <span className="letter">Y</span>
          </p>
        </div>
        <div className="flex items-center gap-3 md:gap-5 lg:gap-4">
          <a
            className="hidden px-3 lg:block text-lg opacity-0 text-white hover:text-[#0B65E3] font-medium hover:font-semibold"
            href="/about-us"
          >
            About us
          </a>
          <a
            className="hidden px-3 lg:block text-lg opacity-0 text-white hover:text-[#0B65E3] font-medium hover:font-semibold"
            href="/docs"
          >
            Docs
          </a>
          <a
            className="hidden px-3 lg:block opacity-0 text-lg text-white hover:text-[#0B65E3] font-medium hover:font-semibold"
            href="/integrations"
          >
            Integrations
          </a>
          <a
            onMouseOver={() => setShowOptions(true)}
            onMouseOut={() => {
              setShowOptions(false);
            }}
            className="opacity-0 lg:px-3 cursor-pointer"
          >
            <Image
              alt="Contact us"
              className="w-10 h-10 lg:w-12 lg:h-12"
              src={Globe}
            />
          </a>
          <a
            className="hidden px-3 lg:flex gap-1 items-center text-lg font-semibold opacity-0 text-[#0099FF] hover:text-[#0561E2]"
            href="/contact-us"
          >
            Contact us
            <Image alt="Contact us" className="h-3 ml-1" src={ContactUs} />
          </a>
          <a
            onClick={() => {
              setMenu(!menu);
            }}
            className="lg:hidden p-2 opacity-0"
          >
            <Image
              alt="menu"
              src={menu ? Close : Menu}
              width={24}
              className="h-4"
            />
          </a>
        </div>
      </div>
      {showOptions && (
        <div
          onMouseOver={() => setShowOptions(true)}
          onMouseOut={() => {
            setShowOptions(false);
          }}
          className="absolute z-50 flex flex-col mt-4 lg:mt-1 right-20 lg:right-60 gap-2 text-white rounded-lg bg-[#2D2D2D]"
        >
          <div className="py-3 px-6 text-[#888888] text-sm uppercase">
            Region
          </div>
          <div className="w-full border-t border-[#3C3636]" />
          <div className="px-6 pt-4 pb-6 flex-col gap-6 flex">
            <div className=" flex gap-3 items-center">
              <Image
                alt="SEA"
                className="min-w-8 min-h-8 w-8 h-8 mt-1"
                src={SouthAsia}
              />
              <a className="cursor-pointer whitespace-nowrap text-lg hover:text-[#0561E2]">
                Southeast Asia(SEA)
              </a>
            </div>
            <div className=" flex gap-3 items-center">
              <Image
                alt="LATAM"
                className="min-w-8 min-h-8 w-8 h-8 mt-1"
                src={Latam}
              />
              <a className="cursor-pointer whitespace-nowrap text-lg hover:text-[#0561E2]">
                Latin America(LATAM)
              </a>
            </div>
            <div className=" flex gap-3 items-center">
              <Image
                alt="North America"
                className="min-w-8 min-h-8 w-8 h-8 mt-1"
                src={NorthAmerica}
              />
              <a className="cursor-pointer whitespace-nowrap text-lg hover:text-[#0561E2]">
                North America
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Image
                alt="Europe"
                className="min-w-8 min-h-8 w-8 h-8 mt-1"
                src={Europe}
              />
              <a className="cursor-pointer whitespace-nowrap text-lg hover:text-[#0561E2]">
                Europe
              </a>
            </div>
            <div className=" flex gap-3 items-center">
              <Image
                alt="India"
                className="min-w-8 min-h-8 w-8 h-8 mt-1"
                src={India}
              />
              <a className="cursor-pointer whitespace-nowrap text-lg hover:text-[#0561E2]">
                India
              </a>
            </div>
          </div>
        </div>
      )}
      {menu && (
        <div
          className="w-full md:block md:w-auto mt-4 absolute top-[60px] left-0 z-50 p-2 pt-4"
          id="navbar-default"
        >
          <div className="rounded-2xl border-[0.5px] border-solid border-[#D0E4FD] bg-white">
            <div className="pb-6">
              <div>
                <div>
                  <div className="pt-6 px-3">
                    <a
                      href="/about"
                      className="text-[14px] text-[#394762] font-[600]"
                    >
                      About us
                    </a>
                  </div>
                  <div className="pt-6 px-3">
                    <a
                      href="/docs"
                      className="text-[14px] text-[#394762] font-[600]"
                    >
                      Docs
                    </a>
                  </div>
                  <div className="pt-6 px-3">
                    <a
                      href="/integrations"
                      className="text-[14px] text-[#394762] font-[600]"
                    >
                      Integrations
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
