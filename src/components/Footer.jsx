export const Footer = () => {
    return (
        <footer className="relative z-10 bg-[#030308] border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid md:grid-cols-12 gap-12">

                    {/* LEFT */}
                    <div className="md:col-span-5">
                       

                            <span className="font-display font-bold font-stretch-90% text-3xl text-white">
                                WEBZY
                            </span>
                       

                        
                    </div>

                    

                    {/* CONTACT */}
                    <div className="md:col-span-4  flex flex-row justify-between">
                        
                        

                        <ul className="text-sm text-zinc-400 font-mono-alt ">
                            <li>ENTER@TEXT.HERE</li>
                            <li>+00 ENTER TEXT HERE</li>
                            <li>ENTER TEXT HERE</li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-600">
                        © 2026 Webzy. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-xs text-zinc-600">
                        <span className="hover:text-white transition cursor-pointer">
                            Privacy
                        </span>
                        <span className="hover:text-white transition cursor-pointer">
                            Terms
                        </span>
                        <span className="hover:text-white transition cursor-pointer">
                            Cookies
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

