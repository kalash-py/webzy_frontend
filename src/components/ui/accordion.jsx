import { useState, useRef, useEffect } from "react";
import { Plus } from 'lucide-react';
import { gsap } from "gsap";

export const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full">
      {children.map((child, i) => {
        const isOpen = activeIndex === i;

        return (
          <AccordionItem
            key={i}
            {...child.props}
            isOpen={isOpen}
            onClick={() =>
              setActiveIndex(isOpen ? null : i)
            }
          />
        );
      })}
    </div>
  );
};

export const AccordionItem = ({ title, children, isOpen, onClick }) => {

 
  const contentRef = useRef(null);
  const iconRef = useRef(null);

 
  useEffect(() => {
    const el = contentRef.current;

    if (isOpen) {
      gsap.killTweensOf(el);

      gsap.set(el, { height: "auto" });
      const height = el.scrollHeight;

      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height,
          opacity: 1,
          duration: 0.7, // slow smooth
          ease: "power3.out"
        }
      );

      // elastic icon
      gsap.to(iconRef.current, {
        rotate: 135,
        duration: 0.1,
      });

    } else {
      gsap.killTweensOf(el);

      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,

      });

      gsap.to(iconRef.current, {
        rotate: 90,
        duration: 0.1
      });
    }
  }, [isOpen]);

  return (
    <div className=" border-white/10 flex flex-col gap-3">
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-6 h-2.5 font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 flex flex-row justify-between items-center rounded-xl"
      >
        {title} 

        <div
          ref={iconRef} 
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-135" : "rotate-90"
          }`}
        >
         <Plus size={18} strokeWidth={3} />
        </div>
      </button>

      {/* Content */}
      <div
        ref={contentRef} 
        style={{ height: 0, overflow: "hidden" }} // ✅ CHANGE (important)
        className="opacity-0"
      >
        <div className="text-m text-mauve-200 px-6 py-4 mb-2">
          {children}
        </div>
      </div>
    </div>
  );
};