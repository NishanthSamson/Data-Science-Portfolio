"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";

const Certifications = () => {
  return (
    <section id="certifications" className="pt-15 mb-12">
      <h1 className="heading">
        Competitions and
        <span className="text-purple"> Certifications</span>
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center mt-8 mb-6">
        <ThreeDCardDemo />
      </div>
      <div className="flex justify-center mb-12">
        <a
          href="https://drive.google.com/drive/folders/10KVZGTkBED_7q-xFGaeImnDYpm33F0xq?usp=drive_link"
          className={cn(
            "text-violet-600 hover:text-neutral-500 cursor-pointer"
          )}
        >
          View all certificates
        </a>
      </div>
    </section>
  );
};

export default Certifications;
