import React from "react";
import { cn } from "@/utils/cn";

export const TopNav = () => {
  return (
    <div>
      <div className="flex justify-center">
        <nav className="flex items-center space-x-4">
          <a
            href="#about"
            className={cn(
              "text-neutral-600 hover:text-violet-500 cursor-pointer"
            )}
          >
            About
          </a>
          <a
            href="#projects"
            className={cn(
              "text-neutral-600 hover:text-violet-500 cursor-pointer"
            )}
          >
            Projects
          </a>
          <a
            href="#certifications"
            className={cn(
              "text-neutral-600 hover:text-violet-500 cursor-pointer"
            )}
          >
            Certifications
          </a>
          <a
            href="#contact"
            className={cn(
              "text-neutral-600 hover:text-violet-500 cursor-pointer"
            )}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
