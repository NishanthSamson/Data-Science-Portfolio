"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./Gradientbg";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confitti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineSend } from "react-icons/ai";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  cards = [
    "Programming Languages: Python, Java, C, C++",
    "Frameworks and Libraries: PyTorch, OpenCV, Flask, scikit-learn, AngularJS, ReactJS, Bootstrap",
    "Tools and Technologies: Git, SQL, AWS Cloud, Excel",
  ],
  intro = [
    "Hi, this is Nishanth Samson. As a student, I believe now is an amazing time to major in computer science, as we are witnessing a transformative digital era driven by Artificial Intelligence. This shift brings exciting new opportunities along with the critical responsibility of developing better and safer AI systems. My vision is to be an integral part of this revolution and to dedicate my efforts to creating innovative AI solutions for a better tomorrow.",
  ],
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  cards?: string | React.ReactNode;
  intro?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("nishanthsamson@gmail.com");
    setCopied(true);
  };
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col justify-start px-5 pt-3 pb-5 lg:px-10 lg:pt-5 lg:pb-10"
          )}
        >
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10  mb-3`}
          >
            {title}
          </div>
          <div className="font-sans font-extralight md:max-w-60 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {Array.isArray(description)
              ? description.map((line, index) => <div key={index}>{line}</div>)
              : description}
          </div>

          <div className="w-full md:w-[80vw] mt-5">
            {id === 1 && (
              <div className="font-sans font-extralight md:max-w-80 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {Array.isArray(intro)
                  ? intro.map((line, index) => <div key={index}>{line}</div>)
                  : intro}
              </div>
            )}
          </div>

          <div className="w-full md:w-[80vw] mt-5">
            {id === 5 && (
              <div className="font-sans font-extralight md:max-w-90 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {Array.isArray(cards)
                  ? cards.map((line, index) => {
                      const [heading, ...desc] = line.split(":");
                      return (
                        <div key={index}>
                          <strong>{heading}:</strong>
                          {desc.join(":")}
                        </div>
                      );
                    })
                  : cards}
              </div>
            )}
          </div>

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherclasses="!bg-[#161A31]"
              />
            </div>
          )}

          {id === 1 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              ></div>

              <a href="#projects">
                <MagicButton
                  title={"View Projects"}
                  icon={<AiOutlineSend />}
                  position="right"
                  otherclasses="!bg-[#161A31]"
                />
              </a>
            </div>
          )}

          {id === 7 && (
            <a href="https://drive.google.com/file/d/1jDZJOMy1vx7els2I6q1tYzTl82y5axr8/view?usp=drive_link">
              <div className="font-sans font-extralight md:max-w-60 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 -mt-10">
                Click here to download my resume
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
