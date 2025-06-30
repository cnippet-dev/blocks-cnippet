import React from "react";

import { AtSignIcon, CommandIcon, EclipseIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/motion/accordion";

const items = [
  {
    id: "1",
    title: "What does block.cnippet.site offer?",
    icon: AtSignIcon,
    content:
      "block.cnippet.site provides a wide range of ready-made website sections (like hero, features, team), full pages (landing, about, contact), and complete website templates. All blocks are SEO-friendly and easy to customize.",
  },
  {
    id: "2",
    title: "How do I use sections and templates from block.cnippet.site?",
    icon: CommandIcon,
    content:
      "Simply browse, copy, and integrate any section, page, or template into your project. All blocks are production-ready and optimized for fast deployment.",
  },
  {
    id: "3",
    icon: EclipseIcon,
    title: "Are the templates SEO-friendly?",
    content:
      "Yes! Every section, page, and template on block.cnippet.site is designed with SEO best practices in mind, ensuring your website ranks well and loads fast.",
  },
  {
    id: "4",
    icon: EclipseIcon,
    title: "Can I customize the blocks?",
    content:
      "Absolutely. All sections, pages, and templates are fully customizable. Adjust styles, content, and layout to fit your brand and project needs.",
  },
  {
    id: "5",
    icon: EclipseIcon,
    title: "What types of websites can I build?",
    content:
      "You can build landing pages, portfolios, SaaS sites, business websites, and more. Our templates cover a wide range of use cases and industries.",
  },
  {
    id: "6",
    icon: EclipseIcon,
    title: "Is there support for developers?",
    content:
      "Yes! Join our community for support, tips, and updates. We also provide documentation and examples to help you get started quickly.",
  },
];

const Faq = () => {
  return (
    <>
      <section className="w-full relative max-w-[1536px] mx-auto px-30 border-t-0 border-b bg-white">
        <div className="relative">
          {/* <div className="absolute -top-2.5 -left-2.5 z-50 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-y divide-neutral-500">
            <div className=" border-r" />
            <div className="border-r-0" />
            <div className="border-b-0 border-r" />
            <div className=" " />
          </div> */}
          <div className="absolute size-3 bg-neutral-500 -top-1.5 -left-1.5"></div>
        </div>

        <div className="">
          <div className="grid h-full w-full divide-x-0 divide-y border border-t-0 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-neutral-900 dark:border-neutral-900">
            <div className="col-span-1 w-full bg-white px-4 py-8 text-left md:px-10 md:py-16 dark:bg-black">
              <div className="sticky top-20">
                <h2 className="text-4xl leading-tight font-medium md:text-5xl tracking-tight">
                  Frequently asked questions.
                </h2>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid size-[8rem] w-full max-w-full grid-cols-2 divide-x border-b dark:divide-neutral-900 dark:border-neutral-900">
                <div />
                <div />
              </div>
              <div>
                <Accordion
                  iconVariant="plus-minus"
                  className="flex w-full max-w-full flex-col divide-y divide-zinc-200 dark:divide-neutral-900"
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={item.id}
                      className="px-4 py-4 md:px-8"
                    >
                      <AccordionTrigger className="w-full cursor-pointer text-left text-zinc-950 dark:text-zinc-50">
                        <div className="flex items-center justify-between gap-2">
                          <div>{item.title}</div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mt-1 font-normal text-neutral-600 dark:text-neutral-400">
                          {item.content}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="grid size-[8rem] w-full max-w-full grid-cols-2 divide-x border-t dark:divide-neutral-900 dark:border-neutral-900">
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-black">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="relative w-full"></div>
        </div>
      </section>
    </>
  );
};

export default Faq;
