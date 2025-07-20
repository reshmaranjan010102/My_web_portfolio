"use client";
type Props = {
    children: React.ReactNode;
};

export default function GradientButton({ children }: Props) {
    return (
        <button
            className="relative w-28 cursor-pointer py-2 px-4 text-sm text-center font-barlow inline-flex justify-center uppercase text-blue-600 rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
        >
            <span className="relative z-20">{children}</span>

            <span
                className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
            ></span>

            <span
                className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-blue-600 absolute h-[20%] rounded-tl-lg border-l-3 border-t-3 top-0 left-0"
            ></span>
            <span
                className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-blue-600 absolute group-hover:h-[90%] h-[50%] rounded-tr-lg border-r-3 border-t-3 top-0 right-0"
            ></span>
            <span
                className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-blue-600 absolute h-[50%] group-hover:h-[90%] rounded-bl-lg border-l-3 border-b-3 left-0 bottom-0"
            ></span>
            <span
                className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-blue-600 absolute h-[20%] rounded-br-lg border-r-3 border-b-3 right-0 bottom-0"
            ></span>
        </button>

    );
}
