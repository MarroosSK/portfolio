import { about } from "../../helpers/data";
import SkillSet from "../SkillSet/SkillSet";
import Typewriter from "typewriter-effect";
import "./Hero.css";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, -1]);

  const aboutInfo = about[0] + about[1];

  return (
    <div id="home" className="container">
      <motion.div
        data-aos="fade-up"
        data-aos-duration="1100"
        ref={targetRef}
        style={{ opacity: opacity, height: "100vh" }}
      >
        <motion.div
          style={{ scale: scale }}
          className="flex justify-center items-center gap-2"
        >
          <div
            className="flex justify-center items-center text-center"
            style={{ opacity: opacity, height: "100vh" }}
          >
            <div
              style={{ scale: scale }}
              className="flex flex-col justify-center items-center gap-2"
            >
              <h1 className="text-4xl sm:text-6xl">
                Hi, i am Maroš<span className="textColor">.</span>
              </h1>
              <h6 className="text-1xl sm:text-2xl">
                <Typewriter
                  options={{
                    strings: [aboutInfo],
                    autoStart: true,
                    loop: true,
                    delay: 85,
                    wrapperClassName: "textColor",
                  }}
                />
              </h6>
              <p className="max-w-[600px] text-[14px] sm:text-[18px] py-4">
                Ready to work with React on real-world projects and eager to
                learn new technologies.
              </p>
              <SkillSet />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
