"use client";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function AboutMe() {
    return (
        <>
            <div className="after-header w-full">
                <div className="xl:px-40 md:px-20 px-4 xl:py-20 md:py-14 py-10">
                    <div className="flex md:flex-row flex-col xl:gap-10 md:gap-6 gap-3 justify-center items-center">
                        <div>
                            <motion.img
                                src="/images/reshma2.jpg"
                                className="xl:w-56 xl:h-56 md:w-44 md:h-44 w-32 h-32 rounded-full"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                            />
                        </div>
                        <div className="layout-content-container flex flex-col flex-1">
                            <motion.h2
                                className="tracking-light xl:text-[32px] md:text-[24px] text-[18px] font-bold text-center md:text-start leading-tight text-blue-600 mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                            >
                                👩‍💻About Me
                            </motion.h2>
                            <motion.p
                                className="text-[#111518] xl:text-base md:text-sm text-xs font-normal text-center md:text-start leading-normal pb-3 pt-1 px-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                            >
                                I&apos;m{" "}
                                <span className="font-semibold text-blue-600">
                                    Reshma Ranjan
                                </span>{" "}
                                - a passionate web developer with a strong foundation in
                                computer science and a proven track record of building and
                                maintaining robust web applications. My journey began with a
                                B.Tech in Computer Science from{" "}
                                <span className="font-semibold text-blue-600">
                                    <a href="https://www.rrsdcebgs.ac.in/" target="_blank">
                                        Rashtrakavi Ramdhari Singh Dinkar College of Engineering
                                    </a>
                                </span>{" "}
                                , Begusarai, where I honed my technical skills and developed a
                                keen interest in software development. I&apos;ve had the opportunity
                                to apply my knowledge in real-world scenarios through
                                internships and professional roles, gaining valuable experience
                                in web infrastructure, cloud deployments, and full-stack
                                development. I&apos;m always eager to learn new technologies and
                                contribute to innovative projects.
                            </motion.p>
                        </div>
                    </div>
                    <div className="pt-20 flex md:flex-row flex-col-reverse xl:gap-10 md:gap-6 gap-3 justify-center items-center">
                        <motion.h2
                            className="tracking-light xl:text-[32px] md:text-[24px] text-[18px] font-bold leading-tight text-blue-600 mb-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                        >
                            My Journey
                            <Timeline />
                        </motion.h2>
                        <div>
                            <motion.img
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                                src="/images/b1.png"
                                className="w-auto xl:h-[500px] md:h-[400px] h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
