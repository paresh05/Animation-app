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
    BurgerKing,
    Flipkart,
    Google,
    Indigo,
    McDonalds,
    Microsoft,
    Oneplus,
    Starbucks,
    Walmart,
    Xiaomi,
  ];

  return (
    <Marquee speed={150} gradient gradientColor="rgb(18, 19, 22)" gradientWidth={100} className="mt-20 lg:mt-12">
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
  );
}
