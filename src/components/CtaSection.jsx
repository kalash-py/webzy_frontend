import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const CtaSection = () => {
    return (
        <section
            className="relative z-10 bg-[#030308] border-t border-white/5 overflow-hidden"
        >
            {/* massive glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-tr from-blue-600/20 via-violet-600/25 to-transparent blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-4xl px-6 py-28 md:py-40 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-[11px] uppercase tracking-[0.3em] text-violet-400/80 mb-6"
                >
                    Let's Talk
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="font-display font-medium text-2xl md:text-3xl lg:text-4xl tracking-[1em] text-white"
                >
                    You didn’t come this far just to stop — let’s get started.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-base md:text-lg text-zinc-400 max-w-xl mx-auto"
                >
                    Book a 15- minute call and we can talk about how we can help you and your business to see if we are a good fit. 
                </motion.p>

                <motion.a
                    href="#enquiry"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 glow-btn"
                >
                    <Phone className="h-4 w-4" />
                    <span>Get a Call</span>
                </motion.a>
            </div>
        </section>
    );
};

export default CtaSection;