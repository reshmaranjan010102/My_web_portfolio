/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState, useRef } from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import { motion } from "framer-motion";
import "../customStyles/orbits.css";
import Lottie from "lottie-react";
import reactAnimation from "@/public/images/react.json";
import pythonAnimation from "@/public/images/python.json";
import jsAnimation from "@/public/images/js.json";
import githubAnimation from "@/public/images/github.json";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Header() {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      // @ts-ignore - suppress typing error from lottie-react's narrow ref typing
      lottieRef.current.setSpeed(0.2);
    }
  }, []);

  const words = [
    "RESHMA RANJAN",
    "A Problem Solver",
    "A Programmer",
    "A Software Engineer",
    "A Fullstack Developer",
    "A Tech Enthusiast",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="max-w-screen overflow-hidden">
        {/* header */}
        <div className="fixed top-0 z-50 flex shadow-sm w-full px-4 py-1 items-center justify-between backdrop-blur-sm bg-white/30">
          <div className="h-full flex items-center justify-center">
            <img src="/images/logo.png" className="h-6 w-auto" alt="" />
            &nbsp;
            <span className="text-xs md:text-md xl:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-600">
              RESHMA RANJAN
            </span>
          </div>
          <ul className="flex gap-2 justify-between items-center md:mr-4 mr-0">
            <li className="relative group cursor-pointer">
              <a
                href="/files/Reshma Ranjan Resume.pdf"
                download="Reshma_Ranjan_Resume.pdf" className="flex gap-2 text-sm md:text-base text-blue-600 md:px-4 px-2 py-2 md:mx-2 mx-1">
                <FaDownload /> Resume
              </a>
              <a
                href="/files/Reshma Ranjan Resume.pdf"
                download="Reshma_Ranjan_Resume.pdf" className="flex gap-2 text-sm md:text-base absolute -top-16 group-hover:-top-2 transition-all duration-500 ease-in-out font-bold text-white shadow-xl rounded-b-md md:px-4 px-2 py-3 md:mx-2 mx-1 bg-white bg-gradient-to-br from-black to-blue-600">
                <FaDownload /> Resume
              </a>
            </li>
            <li>
              <Button3 href="https://github.com/reshmaranjan010102">
                <FaGithub className="w-3 h-3 md:w-5 md:h-5" />
              </Button3>
            </li>
            <li>
              <Button3 href="https://www.linkedin.com/in/reshma-ranjan-9326691b1/">
                <FaLinkedin className="w-3 h-3 md:w-5 md:h-5" />
              </Button3>
            </li>
            <li>
              <img
                src="/images/reshma.jpg"
                className="rounded-full w-6 h-6 md:w-8 md:h-8 border md:mx-4 mx-0"
              />
            </li>
          </ul>
        </div>
        {/*  */}
        {/* landing section */}
        <section className="relative z-10 pb-10 lg:h-screen w-full pt-[50px] bg-gradient-to-br from-black  to-blue-600 text-white px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center md:px-20 px-4 justify-between w-full h-full">
            <motion.div
              className="lg:w-[60%] "
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              {/* Headline */}
              <h1 className="md:text-lg xl:text-xl md:text-start text-center font-bold leading-tight drop-shadow-lg">
                Hi! I AM
                <br />
                <ul className="h-[30px] md:h-[50px] xl:h-[70px] overflow-hidden relative my-2">
                  {words.map((word, index) => (
                    <li
                      key={index}
                      className={`py-0 w-full absolute text-amber-400 text-xl md:text-4xl xl:text-6xl md:text-start text-center font-bold transition-transform duration-500 ease-in-out drop-shadow-xl drop-shadow-gray-600 ${index === currentIndex
                        ? "opacity-140 translate-y-0"
                        : "opacity-0 -translate-y-14"
                        }`}
                    >
                      {word}
                    </li>
                  ))}
                </ul>
              </h1>
              <div className="md:w-[80%] xl:w-full">

                <h1 className="md:text-lg xl:text-xl md:text-start text-center font-bold leading-tight">
                  Building Full-Stack Solutions with Precision and Purpose
                </h1>

                {/* Sub-headline */}
                <p className="mt-3 max-w-xl md:text-md xl:text-lg md:text-start text-center font-light">
                  🚀 A passionate Full Stack Developer specializing in JavaScript
                  and Python, with a solid foundation in web development and 🧩
                  problem-solving. Always eager to learn, grow, and make
                  meaningful contributions to the tech world! 💡💻✨
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-14 flex items-center justify-center md:justify-start gap-4">
                <Button2 href="#projects">Projects</Button2>
                <Button1
                  href="/files/Reshma Ranjan Resume.pdf"
                  download="Reshma_Ranjan_Resume.pdf"
                >
                  Download Resume
                </Button1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
              className="relative lg:w-[40%] h-[500px] flex items-center justify-center  scale-50 md:scale-75"
            >
              {/* Orbit 1 - Outer orbit with 5 dots */}
              <div className="orbit orbit-1 w-[550px] h-[550px] border border-white/30 rounded-full absolute z-10 rotate-[72deg]">
                <div className="dot w-14 h-14 rounded-full absolute -top-7 left-1/2 -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,1)] z-50">
                  <Lottie
                    animationData={pythonAnimation}
                    loop
                    autoplay
                    lottieRef={lottieRef}
                    className="w-14 h-14 bg-white  rounded-full"
                  />
                  {/* Ring for this planet */}
                  <div className="absolute -inset-4 border-2 border-white rounded-full z-0"></div>
                </div>
              </div>
              <div className="orbit orbit-1 w-[550px] h-[550px] border border-white/30 rounded-full absolute z-10 rotate-[144deg]">
                <div className="dot w-14 h-14 rounded-full absolute -top-7 left-1/2 -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,1)] z-50">
                  <Lottie
                    animationData={githubAnimation}
                    loop
                    autoplay
                    className="w-14 h-14 bg-white border rounded-full"
                  />
                </div>
              </div>
              <div className="orbit orbit-1 w-[550px] h-[550px] border border-white/30 rounded-full absolute z-10 rotate-[216deg]">
                <div className="dot w-14 h-14 rounded-full absolute -top-7 left-1/2 -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,1)] z-50">
                  <Lottie
                    animationData={reactAnimation}
                    loop
                    autoplay
                    className="w-14 h-14 bg-white border rounded-full"
                  />
                  {/* Ring for this planet */}
                  <div className="absolute -inset-3 border border-white rounded-full z-0 rotate-45"></div>
                </div>
              </div>
              <div className="orbit orbit-1 w-[550px] h-[550px] border border-white/30 rounded-full absolute z-10 rotate-[288deg]">
                <div className="dot w-14 h-14 rounded-full absolute -top-7 left-1/2 -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,1)] z-50 overflow-hidden">
                  <Lottie
                    animationData={jsAnimation}
                    loop
                    autoplay
                    lottieRef={lottieRef}
                    className="w-14 h-14 bg-white border rounded-full"
                  />
                </div>
              </div>
              <div className="orbit orbit-1 w-[550px] h-[550px] border border-white/30 rounded-full absolute z-10 rotate-[360deg]">
                <div className="dot w-14 h-14 rounded-full absolute -top-7 left-1/2 -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,1)] z-50">
                  <img
                    src="/images/code.svg"
                    alt="Code"
                    className="w-14 h-14 bg-white border rounded-full"
                  />
                  {/* Ring for this planet */}
                  <div className="absolute -inset-5 border border-white/80 rounded-full z-0 -rotate-12"></div>
                </div>
              </div>

              {/* Orbit 2 - Middle orbit with 3 dots */}
              <div className="orbit orbit-2 w-[380px] h-[380px] border border-white/40 rounded-full absolute z-20 rotate-[240deg]">
                <div className="dot w-14 h-14 rounded-full absolute -top-7 left-1/2 -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,1)] z-50">
                  <img
                    src="/images/mysql.svg"
                    alt="MySQL"
                    className="w-14 h-14 bg-white border rounded-full"
                  />
                </div>
              </div>
              <div className="orbit orbit-2 w-[380px] h-[380px] border border-white/40 rounded-full absolute z-20 rotate-[120deg]">
                <div className="dot w-14 h-14 rounded-full absolute -top-7 left-1/2 -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,1)] z-50">
                  <img
                    src="/images/mongo.jpg"
                    alt="MongoDB"
                    className="w-14 h-14 bg-white border rounded-full"
                  />
                  {/* Ring for this planet */}
                  <div className="absolute -inset-3 border border-white rounded-full z-0 rotate-30"></div>
                </div>
              </div>
              <div className="orbit orbit-2 w-[380px] h-[380px] border border-white/40 rounded-full absolute z-20 rotate-[360deg]">
                <div className="dot w-14 h-14 rounded-full absolute -top-7 left-1/2 -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,1)] z-50">
                  <img
                    src="/images/html.svg"
                    alt="HTML"
                    className="w-14 h-14 bg-white border rounded-full"
                  />
                </div>
              </div>

              {/* Orbit 3 - Inner orbit */}
              <div className="orbit orbit-3 w-[250px] h-[250px] border border-white/50 rounded-full absolute z-30"></div>

              {/* Central Image */}
              <img
                src="/images/me.png"
                alt="Me"
                className="z-40 w-[250px] h-auto"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
