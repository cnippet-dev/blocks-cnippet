import Navbar from "@/components/routes/shared/navbar";
import Hero from "@/components/routes/home/hero";
import Templates from "@/components/routes/home/templates";
import Footer from "@/components/routes/shared/footer";
import Feature from "@/components/routes/home/feature";
import Sections from "@/components/routes/shared/layout/all-sections";
import Cta from "@/components/routes/home/cta";
import Faq from "@/components/routes/home/faq";
import Blocks from "@/components/routes/home/blocks";
import Pricing from "@/components/routes/home/pricing";


export default async function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Sections count={6} />
                {/* <Blocks /> */}
                <Templates />
                <Pricing />
                {/* <Feature /> */}
                <Faq />
                <Cta />
            </main>
            <Footer />
        </>
    );
}
