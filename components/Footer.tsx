import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[70px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact <span className="text-purple">Me</span>{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Send me an email and let&apos;s get connected!
        </p>
        <a href="mailto:nishanthsamson@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col lg:px-40">
        <p className="md:text-base text-small md:font-normal font-thin">
          Copyright ©️ 2024 Nishanth Samson
        </p>
        <p className="md:text-base text-small md:font-normal font-thin ml-auto">
          India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
