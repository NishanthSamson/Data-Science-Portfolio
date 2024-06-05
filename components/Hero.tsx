import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia, navItems } from "@/data";
import { TopNav } from "@/components/ui/TopNav";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-60">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TopNav />
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Hi, I'm Nishanth Samson"
            />
            <h2 className="uppercase tracking-widest text-md text-center text-blue-100 mb-5">
              Dual Degree Student @ VIT | IITM
            </h2>
            <div className="flex items-center md:gap-3 mt-3 gap-6">
              {socialMedia.map((profile) => (
                <div
                  key={profile.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 hover:bg-violet-500 transition-all duration-300 rounded-lg border border-black-300"
                >
                  <a href={profile.link} className="">
                    <img
                      src={profile.img}
                      alt={profile.alt}
                      height={20}
                      width={20}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
