"use client";
import Image from "next/image";
import Agoda from "../../assets/agoda.svg";
import Amazon from "../../assets/amazon.svg";
import BurgerKing from "../../assets/burgerKing.svg";
import Flipkart from "../../assets/flipkart.svg";
import Google from "../../assets/google.svg";
import Indigo from "../../assets/indigo.svg";
import McDonalds from "../../assets/mcdonalds.svg";
import Microsoft from "../../assets/microsoft.svg";
import Oneplus from "../../assets/oneplus.svg";
import Starbucks from "../../assets/starbucks.svg";
import Walmart from "../../assets/walmart.svg";
import Xiaomi from "../../assets/xiaomi.svg";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marqueeImages = [
    Agoda,
    Amazon,
    Flipkart,
    Google,
    Indigo,
    McDonalds,
    BurgerKing,
    Microsoft,
    Oneplus,
    Starbucks,
    Walmart,
    Xiaomi,
  ];

  return (
    <div className="mt-20 pt-12 lg:mt-12 lg:pb-12 w-full lg:px-10 bg-[#17181B] -z-20">
      <Marquee
        speed={150}
        gradient
        gradientColor="#17181B"
        gradientWidth={100}
      >
        {marqueeImages.map((images, index) => {
          return (
            <Image
              key={index}
              src={images}
              className="h-8 md:h-10 max-w-[unset] lg:h-16 mr-6 lg:mr-16"
              alt="Juspay logo"
              priority
            />
          );
        })}
      </Marquee>
    </div>
  );
}
