import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";


export const SocialDock = () => {
    return (
        <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
            
            {/* INSTAGRAM */}
            <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/thefourdevs/"
                target="_blank"
                rel="noreferrer"
                className="relative h-11 w-11 rounded-full grid place-items-center bg-white/5 border border-white/10 backdrop-blur-xl hover:border-violet-400/60 transition"
                aria-label="Instagram"
            >
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-xl opacity-60" />
                <FaInstagram className="h-5 w-5 text-white"/>
            </motion.a>

            {/* X (Twitter) */}
            <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="relative h-11 w-11 rounded-full grid place-items-center bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-400/60 transition"
                aria-label="X"
            >
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-xl opacity-60" />

                <svg
                    viewBox="0 0 24 24"
                    className="relative h-4 w-4 fill-white"
                    aria-hidden="true"
                >
                    <path d="M18.244 2H21.5l-7.56 8.64L22.75 22h-6.98l-5.46-6.54L4 22H.74l8.08-9.24L.5 2h7.16l4.93 5.96L18.244 2Zm-1.223 18h1.88L7.06 4H5.06l11.96 16Z" />
                </svg>
            </motion.a>
        </div>
    );
};

export default SocialDock;