import React from "react";
import { Button } from "@/components/ui/button";
import {
    Download,
    GitBranch,
    Cloud,
    LineChart,
    Shield,
    Globe,
    Users,
} from "lucide-react";
const Pricing = () => {
    return (
        <section className="relative w-full dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-10">
                <div className="relative">
                    <div className="absolute -top-2.5 -left-2.5 z-50 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>

                    <div className="relative dark:border-neutral-800">
                        {/* <div className="grid size-[5rem] w-full grid-cols-12 grid-rows-1 divide-x divide-y first:border-l last:border-r dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1 border-r border-b dark:border-neutral-800"></div>
                        </div> */}

                        <div className="grid size-[5rem] h-full w-full grid-cols-12 first:border-l">
                            <div className="col-span-1 border-b dark:border-neutral-800"></div>
                            <div className="col-span-10 border border-t-0 py-8 text-center dark:border-neutral-800">
                                <h1 className="text-5xl leading-tight font-semibold tracking-tight">
                                    Find a plan to power your projects.
                                </h1>
                                <p className="pt-5 text-neutral-500">
                                    From early-stage startups to growing
                                    enterprises, Vercel has you covered.
                                </p>
                            </div>
                            <div className="col-span-1 border-r border-b dark:border-neutral-800"></div>
                        </div>

                        {/* <div className="grid size-[5rem] w-full grid-cols-12 grid-rows-1 divide-x divide-y dark:divide-neutral-800">
                            <div className="col-span-1 border-l"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1 border-r-0 bg-teal-700"></div>
                            <div className="col-span-1 border-r border-b bg-amber-400 dark:border-neutral-800"></div>
                        </div> */}

                        <div className="grid w-full grid-cols-12 divide-x border border-t-0 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-4 flex flex-col px-10 py-8">
                                <div className="mb-5 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">
                                        Hobby
                                    </h2>
                                    <p>Free forever</p>
                                </div>
                                <p className="text-muted-foreground mb-2 text-sm">
                                    The perfect starting place for your web app
                                    or personal project.{" "}
                                    <span className="text-foreground font-semibold">
                                        Free forever
                                    </span>
                                    .
                                </p>

                                <div className="mt-8 flex-grow space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Download className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Access to basics components</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <GitBranch className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Lifetime access</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Cloud className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Unlimited projects</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Users className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Customer support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Free updates</span>
                                    </div>
                                    {/* <div className="flex items-start gap-3">
                                        <Globe className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Web Application Firewall</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        
                                        <span>Community Support</span>
                                    </div> */}
                                </div>

                                <div className="mt-8">
                                    <Button
                                        variant="outline"
                                        className="group w-full justify-between rounded-full"
                                    >
                                        Start Exploring
                                        <span className="transition-transform group-hover:translate-x-0.5">
                                            →
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            <div className="col-span-4 flex flex-col px-10 py-8">
                                <div className="mb-5 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Pro</h2>
                                    <p className="text-xl font-medium">
                                        ₹500
                                        <span className="text-muted-foreground text-xs">
                                            /month
                                        </span>
                                    </p>
                                </div>

                                <p className="text-muted-foreground mb-2 text-sm">
                                    The perfect starting place for your web app
                                    or personal project.{" "}
                                    <span className="text-foreground font-semibold">
                                        Free forever
                                    </span>
                                    .
                                </p>
                                <div className="mt-8 flex-grow space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Download className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Single user license</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <GitBranch className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Access to all components & pages
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Cloud className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Priority customer support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <LineChart className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Advanced project analytics</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Early access to new features
                                        </span>
                                    </div>
                                    {/* <div className="flex items-start gap-3">
                                        <Globe className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Web Application Firewall</span>
                                    </div> */}
                                    <div className="flex items-start gap-3">
                                        <Users className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Community Support</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        variant="outline"
                                        className="group w-full justify-between rounded-full bg-blue-700 text-white hover:bg-blue-600 hover:text-white"
                                    >
                                        Upgrade now
                                        <span className="transition-transform group-hover:translate-x-0.5">
                                            →
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            <div className="col-span-4 flex flex-col px-10 py-8">
                                <div className="mb-5 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Plus</h2>
                                    <p className="text-xl font-medium">
                                        ₹ 2000
                                        <span className="text-muted-foreground text-xs">
                                            /month
                                        </span>
                                    </p>
                                </div>
                                <p className="text-muted-foreground mb-2 text-sm">
                                    The perfect starting place for your web app
                                    or personal project.{" "}
                                    <span className="text-foreground font-semibold">
                                        Free forever
                                    </span>
                                    .
                                </p>
                                <div className="mt-8 flex-grow space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Download className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>5 user licenses</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <GitBranch className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Bring your team to the platform
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Cloud className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Access to everything</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <LineChart className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Traffic & performance insights
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Early access to new features
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Globe className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Priority tech support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Users className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Community Support</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        variant="outline"
                                        className="group w-full justify-between rounded-full bg-violet-600 text-white hover:bg-violet-700 hover:text-white"
                                    >
                                        Upgrade to Plus
                                        <span className="transition-transform group-hover:translate-x-0.5">
                                            →
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* 
                <div className="grid size-[16.5rem] w-full grid-cols-12 first:border-l dark:border-neutral-800">
                    <div className="col-span-12 grid grid-cols-12 divide-x divide-y dark:divide-neutral-800">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="col-span-8 row-span-3 flex flex-col items-center justify-center border-r border-b bg-white text-center dark:border-neutral-800 dark:bg-black">
                        <p className="text-xl leading-relaxed">
                            <span className="font-medium">
                                Made by the creators of Next.js,
                            </span>{" "}
                            <span className="text-gray-500">
                                Vercel is designed
                            </span>
                            <br />
                            <span className="text-gray-500">
                                to build, scale, and secure your
                                Next.js apps.
                            </span>
                        </p>
                    </div>
                    <div className="col-span-2 row-span-3 grid grid-cols-2 grid-rows-3 divide-x divide-y dark:divide-neutral-800">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
