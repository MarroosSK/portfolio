import { Col, Row } from "react-bootstrap";
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
    <motion.div ref={targetRef} style={{ opacity: opacity, height: "100vh" }}>
      <motion.div
        style={{ scale: scale }}
        className="d-flex justify-content-center align-items-center gap-2"
      >
        <Row
          className="d-flex justify-content-center align-items-center text-center"
          style={{ opacity: opacity, height: "100vh" }}
        >
          <Col
            style={{ scale: scale }}
            className="d-flex flex-column justify-content-center align-items-center gap-2"
          >
            <h1>
              Hi, i am Maroš<span className="textColor">.</span>
            </h1>
            <h6>
              <Typewriter
                options={{
                  strings: [aboutInfo],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  wrapperClassName: "textColor",
                }}
              />
            </h6>
            <p style={{ alignSelf: "start", fontSize: "12px" }}>
              Ready to work with React on real world projects with eager to
              learn new technologies.
            </p>
            <SkillSet />
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
