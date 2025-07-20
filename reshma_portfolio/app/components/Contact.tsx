"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button4 from "./Button4";
import "../customStyles/alert.css";

export default function Contact() {
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSend = () => {
        fetch(`http://127.0.0.1:8000/send-user-message/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: formData }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to get AI response");
                }
                return res.json();
            })
            .then((data) => {
                setStatus(data.status);
                setMessage(data.message);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                setTimeout(() => {
                    setStatus("");
                    setMessage("");
                }, 10000);
            })
            .catch((error) => {
                setStatus("error");
                setMessage("Error in sending message");
                setTimeout(() => {
                    setStatus("");
                    setMessage("");
                }, 5000);
            });
    };

    return (
        <>
            <div className="xl:px-40 md:px-20 px-4 py-20 bg-white">
                <div className="flex md:flex-row flex-col xl:gap-10 md:gap-6 gap-3 items-center justify-center">
                    <motion.div
                        className="w-fit md:w-[44%] relative shadow-lg"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <img
                            src="/images/lady.png"
                            className="xl:h-[400px] md:h-[300px] h-[200px] w-auto absolute xl:-left-16 xl:-top-16 md:-left-6 md:-top-6 -left-6 top-7 z-20"
                            alt=""
                        />
                        <div className="bg-blue-200 rounded -rotate-2 shadow-md p-2 relative z-10">
                            <div className="bg-blue-200 rounded-md shadow-md p-2 h-full rotate-1 border-2 border-blue-400 border-dashed flex flex-col items-start justify-start">
                                <div className="xl:ms-32 md:ms-30 ms-16 mr-4">
                                    <p className="text-blue-600 tracking-light xl:text-[28px] md:text-[20px] text-[16px] font-bold leading-tight">
                                        Contact Me
                                    </p>
                                    <motion.div
                                        className="flex gap-4 my-4"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ amount: 0.3 }}
                                    >
                                        <span>
                                            <img
                                                src="/images/phone.svg"
                                                className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4"
                                                alt=""
                                            />
                                        </span>
                                        <span
                                            className="text-xs md:text-md xl:text-base text-black
                                    "
                                        >
                                            +91 6299719397
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        className="flex gap-4 my-4"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ amount: 0.3 }}
                                    >
                                        <span>
                                            <img
                                                src="/images/email.svg"
                                                className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4"
                                                alt=""
                                            />
                                        </span>
                                        <a
                                            className="text-black hover:text-blue-600 text-xs md:text-md xl:text-base break-all"
                                            href="mailto:reshmaranjan02@gmail.com"
                                        >
                                            reshmaranjan02@gmail.com
                                        </a>
                                    </motion.div>
                                    <motion.div
                                        className="flex gap-4 my-4"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ amount: 0.3 }}
                                    >
                                        <span>
                                            <img
                                                src="/images/address.svg"
                                                className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4"
                                                alt=""
                                            />
                                        </span>
                                        <span className="text-xs md:text-md xl:text-base break-all text-black">
                                            Uttarpradesh-201309, India
                                        </span>
                                    </motion.div>

                                    <p className="text-blue-600 tracking-light xl:text-[28px] md:text-[20px] text-[16px] font-bold leading-tight mt-3">
                                        Follow Me
                                    </p>
                                    <motion.div
                                        className="flex gap-4 my-4"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ amount: 0.3 }}
                                    >
                                        <a
                                            href="https://www.facebook.com/reshma.ranjan.581"
                                            target="blank"
                                            className="transition duration-200 transform hover:scale-120 hover:shadow-md"
                                        >
                                            <img
                                                src="/images/facebook.svg"
                                                className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/reshma-ranjan-9326691b1 "
                                            target="blank"
                                            className="transition duration-200 transform hover:scale-120 hover:shadow-md"
                                        >
                                            <img
                                                src="/images/linkedin.svg"
                                                className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href="https://github.com/reshmaranjan010102"
                                            target="blank"
                                            className="transition duration-200 transform hover:scale-120 hover:shadow-md"
                                        >
                                            <img
                                                src="/images/github2.svg"
                                                className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4 "
                                                alt=""
                                            />
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="w-fit md:w-[50%] relative md:ps-20 ps-0 md:pt-0 pt-10">
                        <div className="flex min-w-72 flex-col gap-3">
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                                className="text-[#121517] tracking-light xl:text-[32px] md:text-[20px] text-[16px] font-bold leading-tight flex justify-center gap-2"
                            >
                                <span className="relative border-t-2 border-dashed md:top-5 top-2 w-8"></span>
                                Get in Touch{" "}
                                <span className="relative border-t-2 border-dashed md:top-5 top-2 w-8"></span>
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                                className="text-[#677a83] text-sm font-normal leading-normal"
                            >
                                I&apos;m always open to discussing new projects, creative ideas,
                                or just a friendly chat. Feel free to reach out through the form
                                below or connect with me on social media.
                            </motion.p>

                            <motion.input
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                required
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121517] focus:outline-0 focus:ring-0 border border-[#dde2e4] bg-white focus:border-[#dde2e4] h-14 placeholder:text-[#677a83] p-[8px] text-base font-normal leading-normal"
                            />
                            <motion.input
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                                value={formData.email}
                                type="email"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                required
                                placeholder="Enter your email"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121517] focus:outline-0 focus:ring-0 border border-[#dde2e4] bg-white focus:border-[#dde2e4] h-14 placeholder:text-[#677a83] p-[8px] text-base font-normal leading-normal"
                            />
                            <motion.input
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                                required
                                placeholder="Enter your phone number (optional)"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121517] focus:outline-0 focus:ring-0 border border-[#dde2e4] bg-white focus:border-[#dde2e4] h-14 placeholder:text-[#677a83] p-[8px] text-base font-normal leading-normal"
                            />
                            <motion.textarea
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                                placeholder="Your message"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                required
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121517] focus:outline-0 focus:ring-0 border border-[#dde2e4] bg-white focus:border-[#dde2e4] min-h-36 placeholder:text-[#677a83] p-[8px] text-base font-normal leading-normal"
                            ></motion.textarea>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                                className="flex items-center justify-center"
                            >
                                <span onClick={handleSend}>
                                    <Button4>Send</Button4>
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            {status !== "" && (
                <>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ amount: 0.3 }}
                        className="fixed z-50 top-12 flex justify-end w-full"
                    >
                        <div className={`popup ${status}-popup`}>
                            <div className={`popup-icon ${status}-icon`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={`${status}-svg`}
                                >
                                    {status === "success" ? (
                                        <path
                                            fillRule="evenodd"
                                            d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                                            clip-rule="evenodd"
                                        ></path>
                                    ) : (
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                            clip-rule="evenodd"
                                        ></path>
                                    )}
                                </svg>
                            </div>
                            <div className={`${status}-message`}>{message}</div>
                            <div className="popup-icon close-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                    className="close-svg"
                                >
                                    <path
                                        d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                                        className="close-path"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </>
    );
}
