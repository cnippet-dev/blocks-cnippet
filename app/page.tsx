"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/routes/home/hero"));
const Features = dynamic(() => import("@/components/routes/home/features"));
const Faq = dynamic(() => import("@/components/routes/home/faq"));
const Footer = dynamic(() => import("@/components/shared/footer"));
// const Feedback = dynamic(() => import("@/components/routes/home/feedback"));
const Cta = dynamic(() => import("@/components/routes/home/cta"));
const Nav1 = dynamic(() => import("@/components/shared/navbar/nav-1"));
const Community = dynamic(() => import("@/components/routes/home/community"));
const Sections = dynamic(() => import("@/components/shared/all-sections"));

export default function Home() {
    return (
        <>
            <Nav1 />
            <main className="font-sans">
                <Hero />
                <Features />
                <Sections count={6} />
                {/* <Feedback /> */}
                <Community />
                <Faq />
                <Cta />
            </main>
            <Footer />
        </>
    );
}
