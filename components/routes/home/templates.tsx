import Image from "next/image";
import React from "react";

const Templates = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-2 text-sm text-blue-600">
                    EXPLORE THE TEMPLATES
                </div>
                <h2 className="mb-4 text-3xl font-bold">
                    Production-ready templates
                    <br />
                    to launch tomorrow
                </h2>
                <p className="mb-12 max-w-2xl text-gray-600">
                    Carefully crafted templates built for experts with the
                    latest technology stack based on React and Next.js. Get
                    templates for anything to build and launch your idea.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                        <div className="relative h-64 bg-gray-100">
                            <Image
                                src="/images/t1.png"
                                alt="Dashboard Template"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-xl font-bold">
                                Dashboard Template
                            </h3>
                            <p className="text-sm text-gray-600">
                                Complete dashboard with analytics to better
                                understand your data. Data visualization and
                                reporting all in one application experience.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg border border-gray-200">
                        <div className="relative h-64 bg-gray-100">
                            <Image
                                src="/images/c2.webp"
                                alt="SaaS Marketing Website"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-xl font-bold">
                                SaaS Marketing Website
                            </h3>
                            <p className="text-sm text-gray-600">
                                Complete marketing website with landing pages
                                designed to convert visitors into users.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                        <div className="relative h-48 bg-gray-100">
                            <Image
                                src="/images/c3.jpg"
                                alt="Report Pages"
                                width={400}
                                height={300}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-bold">
                                Report Pages
                            </h3>
                            <p className="text-sm text-gray-600">
                                Clean report design to summarize data in a
                                beautiful way.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg border border-gray-200">
                        <div className="relative h-48 bg-gray-100">
                            <Image
                                src="/images/c4.jpg"
                                alt="SaaS Template"
                                width={400}
                                height={300}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-bold">
                                SaaS Template
                            </h3>
                            <p className="text-sm text-gray-600">
                                Build your SaaS product with ease using this
                                template. Everything you need to build your SaaS
                                application.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg border border-gray-200">
                        <div className="relative h-48 bg-gray-100">
                            <Image
                                src="/images/c1.jpg"
                                alt="One-Page Website"
                                width={400}
                                height={300}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-bold">
                                One-Page Website
                            </h3>
                            <p className="text-sm text-gray-600">
                                Launch your idea with a beautiful website
                                template. Design in beautiful Gradual
                                transitions, simple but with impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Templates;
