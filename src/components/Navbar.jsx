import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#faq" },
    { label: "Cart", to: "/cart" },
];

export const Navbar = () => {
    const loc = useLocation();
    const onHome = loc.pathname === "/";

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full ${
                !scrolled && onHome ? "group" : ""
            }`}
        >
            <div className="relative w-full h-18 flex items-center justify-between pl-5 pr-2 py-2 overflow-hidden">

                {/* 🔥 BACKGROUND */}
                <div
                    className={`
                        absolute inset-0 backdrop-blur-md z-0 transition-all duration-300
                        ${
                            scrolled
                                ? "bg-black/75 translate-y-0"
                                : onHome
                                ? "bg-black/75 -translate-y-full group-hover:translate-y-0"
                                : "bg-black/75 translate-y-0"
                        }
                    `}
                ></div>

                {/* LOGO */}
                <span className="relative z-10 font-display text-3xl font-bold pl-2.5 ml-14 text-white/90 tracking-tight hidden sm:block">
                    WEBZY
                </span>

                {/* NAV LINKS */}
                <nav className="relative z-10 hidden md:flex items-center gap-13">
                    {links.map((l) =>
                        l.to ? (
                            <Link
                                key={l.label}
                                to={l.to}
                                className="text-[14px] font-semibold tracking-[0.14em] text-white px-4 py-2 rounded-full hover:bg-white/10 transition"
                            >
                                {l.label}
                            </Link>
                        ) : (
                            <a
                                key={l.label}
                                href={onHome ? l.href : `/${l.href}`}
                                className="text-[14px] font-semibold tracking-[0.14em] text-white px-4 py-2 rounded-full hover:bg-white/10 transition"
                            >
                                {l.label}
                            </a>
                        )
                    )}
                </nav>

                {/* BUTTON */}
                <Link
                    to="/signup"
                    className="
                        h-[30px]
                        px-[11px] py-[1px]
                        text-[14px] leading-[24px] font-semibold text-white
                        text-center z-10 mr-16
                        border border-white
                        border-t-[2.01px] border-b-[2.01px]
                        rounded-[30px]
                        bg-transparent
                    "
                >
                    <span>Experience Now</span>
                </Link>
            </div>
        </motion.header>
    );
};

export default Navbar;