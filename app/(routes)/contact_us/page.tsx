import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/shared/navbar/nav-1"));
const Footer = dynamic(() => import("@/components/shared/footer"));
const ContactForm = dynamic(() => import("@/components/shared/form/contact"));

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto w-full max-w-full border-t-0 border-b px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
                    <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                        <div className="grid grid-cols-6 divide-x dark:divide-neutral-800">
                            <div className="col-span-3 px-8 py-32">
                                <div className="font-buch mb-6">
                                    <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl">
                                        Contact Us
                                    </h1>
                                </div>

                                <p className="max-w-2xl text-sm leading-normal text-neutral-400 md:mt-2 md:text-lg">
                                    We are here to help you with your next
                                    project.
                                </p>
                            </div>
                            <div className="col-span-3">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;
