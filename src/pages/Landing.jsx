import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CtaSection from "../components/CtaSection";
import EnquiryForm from "../components/EnquiryForm";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import SocialDock from "../components/SocialDock";

export default function Landing() {
    return (
        <div className="relative bg-[#030308] min-h-screen text-white">
            <Navbar />
            <SocialDock />

            {/* Hero sits at bottom; sections stack over it */}
            <div className="relative">
                <div className=" top-0 h-screen">
                    <Hero />
                    <Services />
                    <CtaSection />
                    <EnquiryForm />
                    <FaqSection />
                    <Footer />
                </div>
            </div>
        </div>
    );
}