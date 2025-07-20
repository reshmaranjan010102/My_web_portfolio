"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { FaPython, FaReact, FaGitAlt, FaAws } from "react-icons/fa6";
import { SiDjango, SiBootstrap, SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiJavascript, SiC } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function AboutMe() {

  const skills = [
    { name: "HTML", icon: (<FaHtml5 className="w-12 h-12 p-1 text-orange-600" />) },
    { name: "CSS", icon: (<FaCss3Alt className="w-12 h-12 p-1 text-blue-600" />) },
    { name: "JavaScript", icon: (<SiJavascript className="w-12 h-12 p-1 text-yellow-400" />) },
    { name: "Python", icon: (<FaPython className="w-12 h-12 p-1 text-blue-500" />) },
    // { name: "C", icon: (<SiC className="w-12 h-12 p-1 text-blue-700" />) },
    { name: "Django", icon: (<SiDjango className="w-12 h-12 p-1 text-green-800" />) },
    { name: "React", icon: (<FaReact className="w-12 h-12 p-1 text-cyan-400" />) },
    { name: "Bootstrap", icon: (<SiBootstrap className="w-12 h-12 p-1 text-purple-600" />) },
    // { name: "Tailwind CSS", icon: (<SiTailwindcss className="w-12 h-12 p-1 text-sky-400" />) },
    { name: "Git & GitHub", icon: (<FaGitAlt className="w-12 h-12 p-1 text-red-500" />) },
    { name: "AWS", icon: (<FaAws className="w-12 h-12 p-1 text-orange-400" />) },
    { name: "Firebase", icon: (<SiFirebase className="w-12 h-12 p-1 text-yellow-500" />) },
    { name: "MongoDB", icon: (<SiMongodb className="w-12 h-12 p-1 text-green-600" />) },
    { name: "MySQL", icon: (<SiMysql className="w-12 h-12 p-1 text-blue-500" />) },
  ];


  return (
    <>
      <div className="after-header py-4">
        <div className="w-full bg-gradient-to-br from-black to-blue-600 p-4 pt-6">
          <div className="border-3 border-dashed p-4 md:px-20 xl:px-40 border-white rounded-md relative flex flex-col items-center">
            <div className="relative -top-[34px] flex flex-col items-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
                className="text-white tracking-light text-[28px] font-bold leading-tight backdrop-blur-sm px-2"
              >
                EXPERTISE
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
                className="text-white max-w-md text-xs md:text-md xl:text-lg font-light"
              >
                Take a look at the skills that define my work.
              </motion.p>
              <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12 mt-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <SkillCard icon={skill.icon}>
                      {skill.name}
                    </SkillCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
