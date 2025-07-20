import React from "react";

type Props = {
    icon: React.ReactNode;
    children: React.ReactNode;
};

export default function SkillCard({ icon, children }: Props) {
    return (
        <>
            <div className="relative w-[100px] h-[100px] rounded-3xl transition-all duration-500 group">
                <div className="h-full rounded-3xl bg-gradient-to-br from-white to-blue-600 transition-all duration-500 group-hover:rotate-x-[25deg] group-hover:rotate-y-[25deg] shadow-2xl shadow-gray-600 ">
                    <div className="absolute bottom-[2px] left-[2px] group-hover:bottom-[8px] group-hover:left-[8px] w-[96px] h-[96px] border border-blue-400 rounded-4xl rounded-tr-[100%] bg-gradient-to-br from-white/50 to-white/30 transition-all duration-500 ease-in-out">
                        <span className="absolute h-[75px] w-[75px] -top-1 -right-1 rounded-full p-1 bg-white/30 group-hover:-top-2 group-hover:-right-2 transition-all duration-300 delay-300 group-hover:shadow-sm group-hover:shadow-gray-600">
                            <span className="absolute h-[65px] w-[65px] top-1 right-1 rounded-full p-1 bg-white/40 group-hover:top-0 group-hover:right-0 transition-all duration-500 delay-500 group-hover:shadow-sm group-hover:shadow-gray-600">
                                <span className="absolute h-[55px] w-[55px] top-1 right-1 rounded-full p-1 bg-white/50 overflow-hidden group-hover:top-0 group-hover:right-0 transition-all duration-700 delay-700 group-hover:shadow-sm group-hover:shadow-gray-600">
                                    {icon}
                                </span>
                            </span>
                        </span>
                        <span className="absolute bottom-0 cursor-default left-0 p-1 text-sm hover:bottom-[4px] hover:left-[4px] transition-all duration-300 delay-300">
                            {children}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
