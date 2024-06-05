"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { certificates } from "@/data";
import Image from "next/image";

export function ThreeDCardDemo() {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return certificates.map((certificate, index) => (
    <div
      key={index}
      onClick={() => handleClick(certificate.link)}
      className="cursor-pointer"
    >
      <CardContainer className="inter-var w-[24rem]">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <CardItem
            translatez="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {certificate.title}
          </CardItem>
          <CardItem
            as="p"
            translatez="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {certificate.desc}
          </CardItem>
          <CardItem translatez="100" className="w-full mt-4">
            <Image
              src={certificate.img}
              height="1000"
              width="1000"
              className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  ));
}
