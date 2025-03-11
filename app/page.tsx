import { getUserSession } from "@/lib/actions/auth.actions";
import Link from "next/link";
import SignOutButton from "@/components/signout-button";
import Navbar from "@/components/routes/shared/navbar";
import Hero from "@/components/routes/home/hero";
import Components from "@/components/routes/home/components";
import Templates from "@/components/routes/home/templates";
import Footer from "@/components/routes/shared/footer";
import Feature from "@/components/routes/home/feature";
import Sections from "@/components/routes/shared/layout/all-sections";

export default async function Home() {
    const { session } = await getUserSession();

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Feature/>
                <Sections count={4} />
                <Templates />

            </main>
            <Footer />
        </>
    );
}
