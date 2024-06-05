"use client";
import { cn } from "@/utils/cn";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  containerClassName,
  imageUrl,
}: {
  containerClassName?: string;
  imageUrl: string;
}) => {
  return (
    <div className="h-full w-full relative">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};
