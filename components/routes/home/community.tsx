import Link from "next/link";
import React, { forwardRef } from "react";
import {
  RiArrowRightLine,
  RiDiscordFill,
  RiGithubFill,
} from "@remixicon/react";

const Community = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <section ref={ref} className="w-full relative border-t-0 border-b bg-white">
      <div className="border-b border-neutral-200 sticky top-0 bg-white z-10">
        <div className="flex gap-6 items-center justify-start max-w-[1536px] mx-auto px-30">
          <div className="size-4 rounded-full bg-blue-700"></div>
          <p className="text-lg tracking-wider py-2 uppercase font-semibold">
            Our Ecosystem
          </p>
        </div>
      </div>
      <div className="max-w-[1536px] mx-auto px-30 border-neutral-200">
        <div className="border border-t-0 border-b-0">
          <div className="grid grid-cols-6 divide-x">
            <div className="px-4 py-20 col-span-4">
              <h2 className="text-2xl leading-tight md:text-5xl font-medium tracking-tight">
                Explore Our Complete
                <br />
                <span className="text-blue-700">Development Ecosystem</span>
              </h2>
              <p className="mt-2 text-gray-500 text-lg max-w-xl">
                From individual components to complete websites, our ecosystem provides
                everything you need to build modern, scalable web applications.
              </p>
            </div>
            <div className="col-span-2">
              <div>
                <Link
                  href="https://ui.cnippet.site"
                  className="group relative py-2 flex w-full h-full items-center justify-center overflow-hidden bg-blue-700 dark:bg-black"
                >
                  <div className="absolute inset-0 w-full -translate-x-[100%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                  <span className="relative z-10 text-lg text-white duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black flex items-center gap-2 justify-between w-full px-4">
                    <RiGithubFill />
                    UI Components
                    <RiArrowRightLine
                      className="ml-auto text-white"
                      size={20}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 h-12 border-t divide-x">
            <div className="col-span-1"></div>
            <div className="col-span-1"></div>
            <div className="col-span-1"></div>

            <div className="col-span-1"></div>
            <div className="col-span-2 h-full w-full border-0">
              <Link
                href="https://block.cnippet.site"
                className="group relative flex w-full h-full items-center justify-center overflow-hidden bg-blue-200 dark:bg-black"
              >
                <div className="absolute inset-0 w-full -translate-x-[100%] bg-blue-700 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                <span className="relative z-10 text-lg text-blue-800 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black flex items-center gap-2 justify-between w-full px-4">
                  <RiDiscordFill />
                  Website Templates
                  <RiArrowRightLine
                    className="text-blue-800 ml-auto group-hover:text-white"
                    size={20}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Community;
