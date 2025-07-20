"use client";
import { motion } from "framer-motion";
import { timelineData } from "../data/Journey";
import React from "react";

export default function Timeline() {
    return (
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4 pt-4">
            {timelineData.map((item, idx) => (
                <React.Fragment key={idx}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        viewport={{ amount: 0.3 }}
                        className="flex flex-col items-center gap-1"
                    >
                        {idx === 0 ? (
                            <>
                                <div className="w-[1.5px] bg-[#dce2e500] h-2"></div>
                                <div className="w-[1.5px] bg-[#dce2e500] h-2"></div>
                                <div>🎓</div>
                                <div className="w-[1.5px] bg-[#dce2e5] h-2"></div>
                                <div className="w-[1.5px] bg-[#dce2e5] h-2"></div>
                                <div className="w-[1.5px] bg-[#dce2e5] h-2"></div>
                            </>
                        ) : (
                            <>
                                <div className="w-[1.5px] bg-[#dce2e5] h-2 mt-1"></div>
                                <div className="w-[1.5px] bg-[#dce2e5] h-2"></div>
                                <div className="w-[1.5px] bg-[#dce2e5] h-2"></div>
                                <div>💼</div>
                                {idx !== 3 && (
                                    <>
                                        <div className="w-[1.5px] bg-[#dce2e5] h-2 grow"></div>
                                        <div className="w-[1.5px] bg-[#dce2e5] h-2 grow"></div>
                                        <div className="w-[1.5px] bg-[#dce2e5] h-2 grow"></div>
                                    </>
                                )}
                            </>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        viewport={{ amount: 0.3 }}
                        className={`${idx === 0 ? "pt-6" : "pt-10"} flex flex-1 flex-col`}
                    >
                        <p className="text-[#111518] text-lg font-medium leading-normal">
                            {item.title}
                        </p>
                        <p className="text-[#637c88] text-sm font-normal leading-normal">
                            {item.year}
                        </p>
                    </motion.div>
                </React.Fragment>
            ))}
        </div>
    );
}
