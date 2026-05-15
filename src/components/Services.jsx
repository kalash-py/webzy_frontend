import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const IMG_A =
  "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png";

const services = [
  { tag: "01", title: "Education", image: IMG_A },
  { tag: "02", title: "Design", image: IMG_A },
  { tag: "03", title: "Development", image: IMG_A },
  { tag: "04", title: "Branding", image: IMG_A },
  { tag: "05", title: "Marketing", image: IMG_A },
];

export const Services = () => {
  const trackRef = useRef(null);

  const loopServices = [...services, ...services];
  const Services = [...services,];


  useEffect(() => {
    const track = trackRef.current;

    const pause = () => (track.style.animationPlayState = "paused");
    const play = () => (track.style.animationPlayState = "running");

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <section className="bg-[#030308] py-20 overflow-hidden w-full ">

       <div className="mb-10 flex justify-center items-center">
        <h2 className="text-6xl font-bold text-white">Our Work.</h2>
      </div>

      <div 
                        className="
                    h-[58px]
                    px-[11px] py-[7px]
                    text-[20px] leading-[40px] font-semibold text-white
                    text-center z-10 mr-1 ml-1 mb-36 

                    border border-white
                    border-t-[3px] border-b-[3px] border-l border-r
                    rounded-[30px]

                    shadow-[0_2px_16px_var(--box-shadow-component)]
                    bg-transparent
                    cursor-pointer
                "
                        >
                        <div className="flex flex-row justify-between pr-9 pl-9 font-bold">

                          {Services.map((k, i)=> (
                            <div >{k.title}</div>


                           
                          ))}
                        </div>
                        </div>
     

      {/* MARQUEE */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max animate-marquee"
        >
          {loopServices.map((s, i) => (
            <motion.div
              key={i}
              className="group relative w-80 mx-4 rounded-3xl overflow-hidden bg-white/[0.02]"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-white text-xl">{s.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;