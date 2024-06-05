"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto lg:h-[35rem] relative rounded-3xl p-4"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className={`${
            hovered
              ? "bg-black w-full h-full bg-opacity-30 hover:opacity-0"
              : "bg-transparent"
          } rounded-lg p-4`}
        >
          <div
            className={`text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%]
          translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center`}
          >
            {icon}
          </div>
          <h2
            className={`dark:text-white text-3xl opacity-0 ${
              hovered ? "group-hover/canvas-card:opacity-100" : ""
            } relative z-10 text-black mt-4 font-bold ${
              hovered ? "group-hover/canvas-card:text-white" : ""
            } group-hover/canvas-card:-translate-y-2 transition duration-200 text-center`}
          >
            {title}
          </h2>
          <h2
            className={`text-sm dark:text-white opacity-0 ${
              hovered ? "group-hover/canvas-card:opacity-100" : ""
            } relative z-10 text-black mt-4 font-bold ${
              hovered ? "group-hover/canvas-card:text-white" : ""
            } group-hover/canvas-card:-translate-y-2 transition duration-200 text-center`}
            style={{ color: "#e4ecff" }}
          >
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-16 w-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-2xl font-bold px-5 py-2 text-purple backdrop-blur-3xl">
          <img
            src={order}
            alt="icon"
            width={30}
            height={30}
            className="h-10 w-10"
          />
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export function Hobbies() {
  return (
    <section className="w-full py-29">
      <h1 className="heading">
        More
        <span className="text-purple"> About Me</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Photography"
          icon={<AceternityIcon order="/cam.svg" />}
          description="Photography is one of my greatest hobbies. I love travelling and capturing special moments through my lens. Here's a photograph of the Chinnakanel waterfall which I took during a trip to Munnar. (Hover to View)"
        >
          <CanvasRevealEffect
            containerClassName="bg-[#4CAF50]"
            imageUrl="/munnar.jpeg"
          />
        </Card>
        <Card
          title="Digital Art"
          icon={<AceternityIcon order="/art.svg" />}
          description="I like to create digital art and sketches. I was as a graphic designer for the Gir House student community of the IITM BS degree program during the year '21 - '22. (Hover to view my sketches)"
        >
          <CanvasRevealEffect
            containerClassName="bg-[#F4A460]"
            imageUrl="/design.png"
          />
        </Card>
        <Card
          title="Cubing"
          icon={<AceternityIcon order="/cube.svg" />}
          description="Cubing is one of my hobbies. I can solve a variety of puzzles including the 2x2, 3x3, 4x4 and mirror Rubik's cubes"
        >
          <CanvasRevealEffect
            containerClassName="bg-[#FF4500]"
            imageUrl="/rubiks.jpeg"
          />
        </Card>
        <Card
          title="Music"
          icon={<AceternityIcon order="/music.svg" />}
          description="I enjoy playing classical tunes on the piano!"
        >
          <CanvasRevealEffect
            containerClassName="bg-[#4682B4]"
            imageUrl="/piano.jpg"
          />
        </Card>
      </div>
    </section>
  );
}
