import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/shared/navbar"));
const Footer = dynamic(() => import("@/components/shared/footer"));
const ContactForm = dynamic(() => import("@/components/shared/form/contact"));

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <main className="relative">
                <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
                    <div
                        className="absolute top-0 left-1/2 z-0 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
                        data-framer-name="Vertical lines"
                    >
                        <div
                            className="absolute top-0 right-0 bottom-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                            data-border="true"
                            data-framer-name="Right line"
                        ></div>
                        <div
                            className="absolute bottom-0 left-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                            data-border="true"
                            data-framer-name="Left line"
                        ></div>
                    </div>
                </div>

                <section className="mx-auto w-full max-w-7xl">
                    <div className="">
                        <div className="grid grid-cols-6 divide-x divide-dashed dark:divide-neutral-800">
                            <div className="col-span-3 px-8 py-32">
                                <div className="font-buch mb-6">
                                    <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                                        Contact Us
                                    </h1>
                                </div>

                                <p className="max-w-2xl text-base leading-normal text-neutral-700">
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
