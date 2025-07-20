type Props = {
    href: string;
    download?: string;
    children: React.ReactNode;
};

export default function GradientButton({ href, download, children }: Props) {
    return (
        <a href={href}
            download={download}
            target="_blank"
            className="group relative inline-block rounded-full overflow-hidden w-fit scale-70 md:scale-100"
        >
            <div
                className="relative z-10 flex h-12 items-center rounded-full md:px-8 px-4 text-sm font-semibold border-2 text-white group-hover:text-[#0f48c8] duration-300 border-white shadow-inner"
                style={{ boxShadow: "inset 2px 2px 8px rgba(255, 255, 255, 0.3)" }}
            >
                <div className="absolute w-0 group-hover:w-full duration-500 group-hover:inset-0 group-hover:-z-10 rounded-full bg-white" />
                {children}
            </div>
        </a>
    );
}
