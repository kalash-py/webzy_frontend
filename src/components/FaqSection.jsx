import { Accordion, AccordionItem } from "./ui/accordion";

const questions = [
  "What services do you provide?",
  "How long does it take to build a website?",
  "Will my website be mobile-friendly?",
  "Can I request custom features?",
  "How can I get started?"
];

const answers = [
  "We offer end-to-end website design and development services, including custom web applications. We also provide UI/UX design, responsive frontend development, backend integration, and modern animations.You can book a call or make an inquiry via mail to learn more about us",
  "The timeline depends on the project requirements and complexity. A basic landing page typically takes 2–5 days, a standard business website takes 1–2 weeks, and more advanced solutions such as e-commerce platforms or custom web applications may take 2–6 weeks or more.",
  "Yes. Every website we build is fully responsive and optimized for all screen sizes, ensuring a seamless experience across mobile phones, tablets, and desktop devices.",
  "Absolutely. We develop fully customized solutions based on your requirements, including advanced animations, authentication systems, dashboards, payment gateways, API integrations, and other tailored functionalities.",
  "Book a call with us and let us know about your requirements. We will then discuss the project scope, design direction, features and budget before moving forward with development."
];

const specialWords = [
    "Book a call",
    "book a call"
]


const faqs = questions.map((q, i) => ({
  q,
  a: answers[i]
}));

export const FaqSection = () => {
    return (
        <section
            id="faq"
            className="relative z-10 bg-[#030308]"
        >
            <div className="mx-auto flex flex-col justify-between items-center max-w-5xl px-6 py-28 md:py-36 lg:grid-cols-12 gap-12 ">

                {/* LEFT */}
                <div className="lg:col-span-4 flex justify-center -m-3">

                    <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tighter text-white">
                        FAQ
                    </h2>

                </div>

                {/* RIGHT */}
                <div className="lg:col-span-8 w-3/4">
                    <Accordion>
                        {faqs.map((f, i) => (
                            <AccordionItem key={i} title={f.q}>
                                {f.a}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    );
};

export default FaqSection;