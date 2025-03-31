import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import dp from "../../assets/dp.png";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      {/* Overview Section with Image */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Overview Content */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
          {config.sections.about.content}
        </motion.div>

        {/* Right Side - Profile Picture */}
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src={dp}
            alt="Shubham Kumar"
            className="w-64 h-64 object-cover shadow-lg"
          />

          {/* Animated Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1nH5Y7HXSCPn5a_XfW2-UEd10hvTbXHAg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(145, 94, 255, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-[#915EFF] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition duration-300"
          >
            Resume
          </motion.a>
        </div>


      </div>

      {/* Services Section */}
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
