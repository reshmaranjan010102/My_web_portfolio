"use client";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function GradientButton({ href, children }: Props) {
    return (
        <a
            href={href} target="_blank"
            className="group relative inline-block"
        >
            <div
                className={`relative z-10 flex items-center justify-center bg-gray-200 rounded-full p-1 ${children === "Send Message" ? "px-4 rounded-full" : "rounded-md"} text-sm font-semibold border-0 text-blue-600 group-hover:text-white duration-300 border-blue-600 shadow-sm w-fit`}
            >
                <div className={`absolute w-0 group-hover:w-full duration-500 group-hover:inset-0 group-hover:-z-10 ${children === "Send Message" ? "rounded-full" : "rounded-md"} rounded-full bg-gradient-to-br from-black to-blue-600`}></div>
                {children}
            </div>
        </a>

    );
}
