"use client";

import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="py-20" id="projects">
        <h1 className="heading">
          My <span className="text-purple">Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 mt-5">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              onClick={() => handleClick(link)}
              className="flex lg:text-xl md:text-xs text-sm text-purple cursor-pointer"
            >
              <div
                key={id}
                className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] transform transition-transform duration-300 hover:scale-105" // Added transform classes for zoom-in effect
              >
                <div>
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#25283e]">
                      <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img
                      src={img}
                      alt={title}
                      className="z-10 w-full h-full absolute bottom-0 rounded-3xl object-cover"
                    />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>
                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {des}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} className="p-2" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center">
                      View Project
                      <FaLocationArrow className="ms-3" color="#cbacf9" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
