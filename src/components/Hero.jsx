import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import video from "@/assets/videos/216134.mp4";

export const Hero = () => {
    const { scrollY} = useScroll();

    const scale = useTransform(scrollY, [0, 700], [1, 0.85]);
    const opacity = useTransform(scrollY, [0, 500, 700], [1, 0.6, 0]);
    const y = useTransform(scrollY, [0, 700], [0, -80]);

    return (
        <section
            id="about"
            className="relative min-h-screen w-full overflow-hidden "
        >
            {/* <video
                autoPlay
                preload="auto"
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
            <source src={video} type="video/mp4" />
            
             </video> */}

            
            

            <motion.div
                style={{ scale, opacity, y }}
                className="relative z-1 mx-auto max-w-7xl px-6 md:pl-24 md:pr-10 pt-36 md:pt-40 pb-24 grid lg:grid-cols-12 gap-1 items-center min-h-screen "
            >
                <div className="col-span-12 w-full -mt-3 flex flex-col justify-center items-center text-center ">
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.9 }}
                        className="font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tighter text-white"
                    >
                        <span className="block">Shaping The Way </span>
                        <span className="block">Your Brand Lives Online</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.9 }}
                        className="mt-7 max-w-lg text-base md:text-lg leading-relaxed text-white-400"
                    >
                       We create websites built to move your business forward — turning visitors into leads, clicks into customers, and first impressions into lasting trust.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        className="mt-10 flex flex-wrap items-center gap-10"
                    >
                        <a
                            href="#enquiry"
                            className="
                            h-[40px] w-[210px]
                            px-[19px] py-[5px]
                            text-[20px] leading-[30px] font-semibold text-white
                            text-center z-10 mr-16

                            border border-white
                            border-t-[2.01px] border-b-[2.01px] border-l border-r
                            rounded-[30px]

                            shadow-[0_2px_16px_var(--box-shadow-component)]
                            bg-transparent
                            cursor-pointer
                "
                        >
                            <span>Get Your Website</span>
                        </a>
                        
                    </motion.div>

                    {/* STATS */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-16 grid grid-cols-3 max-w-md gap-6"
                    >
                
                    </motion.div>
                </div>
                
            </motion.div>
        
        </section>
    );
};

export default Hero;