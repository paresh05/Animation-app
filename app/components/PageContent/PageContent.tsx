"use client";

import { motion, useCycle } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CHARACTERS, GLOBAL, GLOBAL_COVERAGE, JUSPAY, OUTCOMES, PAGE_TITLE, SECONDARY_MOBILE_TEXT, SECONDARY_TEXT, SIMPLIFY } from "@/app/utils/constants";

export default function PageContent() {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const secondarySubTitleRef = useRef(null);
  const odometerTitleRef = useRef(null);
  const outcomesTitleRef = useRef(null);

  const generateString = (length: number) => {
    let result = "";
    const charactersLength = CHARACTERS.length;
    for (let i = 0; i < length; i++) {
      result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [cycleSpin, setCycleSpin] = useCycle("initial", "spin");
  const [globalLetters, setGlobalLetters] = useState<string[]>([]);
  const [outcomesLetters, setOutcomesLetters] = useState<string[]>([]);

  const variants = {
    spin: {
      y: "calc(-100% + 68px)",
    },
    initial: {
      y: "calc(0% + 0px)",
    },
  };

  const handleOdometerLettersArray = (text: string) => {
    const odometerWord = text;
    const letterArray = odometerWord.split("");
    const odometerArray: string[] = [];

    letterArray.forEach((letter, index) => {
      const letters =
        letter === " " ? " " : generateString((index + 1) * 3) + letter;
      odometerArray.push(letters);
    });
    return odometerArray;
  };

  useEffect(() => {
    setGlobalLetters(handleOdometerLettersArray(GLOBAL));
    setOutcomesLetters(handleOdometerLettersArray(OUTCOMES));
  }, []);

  useGSAP(() => {
    const title = titleRef.current;
    const subTitle = subTitleRef.current;
    const secondarySubTitle = secondarySubTitleRef.current;
    gsap.fromTo(
      title,
      { y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      subTitle,
      { y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        ease: "power4.out",
        onComplete: handleOdometerAnimation,
      }
    );
    gsap.fromTo(
      secondarySubTitle,
      { y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        ease: "power4.out",
      }
    );
  });

  const handleOdometerAnimation = () => {
    const odometerTitle = odometerTitleRef.current;
    const outcomesTitle = outcomesTitleRef.current;
    gsap.fromTo(
      odometerTitle,
      { y: 100 },
      { y: 0, opacity: 1, duration: 3, ease: "power4.out" }
    );
    gsap.fromTo(
      outcomesTitle,
      { y: 100 },
      { y: 0, opacity: 1, duration: 3, ease: "power4.out" }
    );
    setCycleSpin();
  };

  const createOdometer = (text: string) => {
    const odometerArray = text === GLOBAL ? globalLetters : outcomesLetters;
    return odometerArray.map((letter, index) => {
      return (
        <motion.div
          key={index}
          variants={variants}
          onLoad={() => setCycleSpin()}
          initial="initial"
          animate={cycleSpin}
          className=" cursor-pointer text-gradient text-center text-[40px] lg:text-[90px] pb-7 lg:pb-0 lg:mt-6 not-italic font-[600] lg:font-[700] leading-[80%] tracking-[-1.2px] lg:tracking-[-1.4px] inline-block writing-mode-vertical-rl text-orientation-upright align-top text-6xl"
          transition={{
            duration: 3,
          }}
        >
          {letter}
        </motion.div>
      );
    });
  };

  return (
    <>
      <h1
        ref={titleRef}
        className="text-[#F5F5F5] pt-20 lg:pt-0 text-center text-[40px] lg:text-[94px] pb-2 font-medium not-italic lg:font-[500] leading-[120%] tracking-[-1.2px] lg:tracking-[-1.4px] opacity-0"
      >
        {PAGE_TITLE}
      </h1>
      <div className="flex flex-col items-center lg:flex-row lg:gap-4">
        <div
          ref={odometerTitleRef}
          className="text-white overflow-hidden h-11 lg:h-[90px] opacity-0"
        >
          {createOdometer(GLOBAL)}
        </div>
        <div
          ref={outcomesTitleRef}
          className="text-white overflow-hidden h-11 lg:h-[90px] opacity-0"
        >
          {createOdometer(OUTCOMES)}
        </div>
      </div>
      <div className="hidden max-w-[642px] justify-center items-center lg:px-14 lg:pt-[115px] text-center cursor-pointer lg:flex z-40">
        <h2
          ref={subTitleRef}
          className="text-[#BCBCBF] text-[19.027px] not-italic font-normal leading-[150%] opacity-0"
        >
          <span className="font-semibold text-[#FFF] ">{JUSPAY}</span>
          {SECONDARY_TEXT}
        </h2>
      </div>
      <div className="flex items-center justify-center max-w-[250px] pt-8 lg:hidden">
        <h2
          ref={secondarySubTitleRef}
          className="text-[#BCBCBF] text-sm not-italic font-normal leading-[150%] text-center opacity-0"
        >
          {SIMPLIFY}
          <span className="font-semibold text-[#FFF] pl-1">
            {GLOBAL_COVERAGE}
          </span>
          {SECONDARY_MOBILE_TEXT}
        </h2>
      </div>
    </>
  );
}
