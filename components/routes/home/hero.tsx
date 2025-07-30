import { forwardRef } from "react";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

const Hero = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => {
        return (
            <div>
                <section className="font-kumb mx-auto w-full max-w-full border-t-0 border-b px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
                    <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                        <div className="grid grid-cols-6 divide-x dark:divide-neutral-800">
                            <div className="col-span-6 space-y-5 px-4 py-20 md:col-span-4">
                                <p className="text-sm tracking-wide text-gray-700 uppercase">
                                    Advanced UI components and templates
                                </p>
                                <h1 className="mt-2 text-6xl tracking-tighter text-pretty sm:text-8xl">
                                    Build your next{" "}
                                    <span className="text-violet-600">
                                        idea
                                    </span>
                                    <br />
                                    even{" "}
                                    <span className="text-blue-600">
                                        faster
                                    </span>
                                    .
                                </h1>
                            </div>
                            <div className="col-span-2 flex items-end px-4 pb-20">
                                <p className="max-w-2xl text-gray-700 md:text-lg">
                                    Beautifully designed, expertly crafted
                                    components and templates, built by the
                                    makers of Tailwind CSS. The perfect starting
                                    point for your next project.
                                </p>
                            </div>
                        </div>

                        <div className="grid h-12 grid-cols-1 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 hidden md:block"></div>
                            <div
                                ref={ref}
                                className="col-span-1 flex h-full w-full"
                            >
                                <Link
                                    href="#explore"
                                    className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-black"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[110%] bg-blue-700 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-blue-600" />
                                    <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white">
                                        Browse UI blocks
                                        <RiArrowRightLine
                                            className="text-white"
                                            size={20}
                                        />
                                    </span>
                                </Link>
                            </div>
                            <Link
                                href="#explore"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-white"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[110%] bg-gray-200 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-blue-600" />
                                <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-black duration-300 dark:text-white">
                                    Browse templates
                                    <RiArrowRightLine
                                        className="text-black"
                                        size={20}
                                    />
                                </span>
                            </Link>
                        </div>

                        <div className="grid h-32 grid-cols-4 divide-x border-t md:h-40 md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>
                            <div className="col-span-1"></div>

                            <div className="col-span-1"></div>
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 hidden md:block"></div>
                        </div>

                        <div className="grid grid-cols-2 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="group col-span-2 flex items-start justify-start gap-2 px-4 py-10">
                                <svg
                                    className="w-20 shrink-0 text-black *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 120 72"
                                >
                                    <path
                                        className="fill-white"
                                        d="M56.095 6 8.464 33.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 68c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0"
                                    ></path>
                                    <g stroke="currentColor" opacity="0.1">
                                        <path
                                            fill="currentColor"
                                            d="M60.425 52.5c-.478-.276-.478-.724 0-1L87.272 36c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 53.5c-.478.276-1.253.276-1.732 0zM54.363 49c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            d="m63.89 43.5 12.124-7"
                                        ></path>
                                        <path
                                            fill="currentColor"
                                            d="M46.57 44.5c-.48-.276-.48-.724 0-1L73.415 28c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 45.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            d="m43.105 42.5 10.392-6"
                                        ></path>
                                        <path
                                            fill="currentColor"
                                            d="M37.043 39c-.478-.276-.478-.724 0-1L63.89 22.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 40c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            d="m33.579 37 10.392-6"
                                        ></path>
                                    </g>
                                    <path
                                        stroke="currentColor"
                                        strokeOpacity="0.4"
                                        d="M112.09 35.5c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0L8.464 33.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 65c-1.913 1.105-5.015 1.105-6.928 0L8.464 37.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 68c-1.913 1.105-5.015 1.105-6.928 0L8.464 40.5c-.957-.552-1.435-1.276-1.435-2v-3"
                                    ></path>
                                    <path
                                        stroke="currentColor"
                                        strokeOpacity="0.4"
                                        d="M17.99 40c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0L108.057 35c.478.276.478.724 0 1L60.426 63.5c-.479.276-1.254.276-1.732 0z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        stroke="currentColor"
                                        d="M11.062 36c-.478-.276-.478-.724 0-1L58.694 7.5c.478-.276 1.253-.276 1.732 0L63.024 9c.478.276.478.724 0 1L15.392 37.5c-.478.276-1.253.276-1.732 0z"
                                        opacity="0.1"
                                    ></path>
                                    <g data-lift="true">
                                        <path
                                            className="fill-current"
                                            fillOpacity="0.3"
                                            stroke="currentColor"
                                            d="M60.425 47.5c-.478-.276-.478-.724 0-1L87.272 31c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 48.5c-.478.276-1.253.276-1.732 0zM54.363 44c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
                                        ></path>
                                        <circle
                                            cx="2"
                                            cy="2"
                                            r="2"
                                            className="fill-white"
                                            stroke="currentColor"
                                            transform="matrix(.86603 -.5 .86603 .5 56.095 41)"
                                        ></circle>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m63.89 38.5 12.124-7"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M46.57 39.5c-.48-.276-.48-.724 0-1L73.415 23c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 40.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m43.105 37.5 10.392-6"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M37.043 34c-.478-.276-.478-.724 0-1L63.89 17.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 35c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m33.579 32 10.392-6"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M11.062 31c-.478-.276-.478-.724 0-1L58.694 2.5c.478-.276 1.253-.276 1.732 0L63.024 4c.478.276.478.724 0 1L15.392 32.5c-.478.276-1.253.276-1.732 0z"
                                        ></path>
                                    </g>
                                </svg>

                                <div>
                                    <h3 className="text-lg font-medium tracking-tight">
                                        UI COMPONENTS
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Over 500+ professionally designed, fully
                                        responsive, expertly crafted components.
                                    </p>
                                </div>
                            </div>
                            <div className="group dark:bg-background col-span-2 flex items-start justify-start gap-2 bg-indigo-50/80 px-4 py-10">
                                <svg
                                    className="w-20 shrink-0 text-indigo-700 *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 120 72"
                                >
                                    <path
                                        className="fill-white"
                                        d="M56.095 7 8.464 34.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 69c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0"
                                    ></path>
                                    <path
                                        stroke="currentColor"
                                        strokeOpacity="0.4"
                                        d="M112.09 36.5c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0L8.464 34.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 66c-1.913 1.105-5.015 1.105-6.928 0L8.464 38.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 69c-1.913 1.105-5.015 1.105-6.928 0L8.464 41.5c-.957-.552-1.435-1.276-1.435-2v-3"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        stroke="currentColor"
                                        d="M11.062 37c-.478-.276-.478-.724 0-1L58.694 8.5c.478-.276 1.253-.276 1.732 0l2.598 1.5c.478.276.478.724 0 1L15.392 38.5c-.478.276-1.253.276-1.732 0z"
                                        opacity="0.1"
                                    ></path>
                                    <g
                                        fill="currentColor"
                                        stroke="currentColor"
                                        opacity="0.1"
                                    >
                                        <path d="M19.723 42c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 25c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"></path>
                                        <path d="M34.445 31.5c-.479-.276-.479-.724 0-1L49.167 22c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 45c-.478.276-1.253.276-1.732 0z"></path>
                                    </g>
                                    <path
                                        fill="currentColor"
                                        stroke="currentColor"
                                        d="M45.703 57c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 64.5c-.478.276-1.254.276-1.732 0z"
                                        opacity="0.1"
                                    ></path>
                                    <g data-lift="true">
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M11.062 32c-.478-.276-.478-.724 0-1L58.694 3.5c.478-.276 1.253-.276 1.732 0L63.024 5c.478.276.478.724 0 1L15.392 33.5c-.478.276-1.253.276-1.732 0z"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M19.723 37c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 20c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeOpacity="0.3"
                                            d="M37.909 44.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1l-9.526 5.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M34.445 26.5c-.479-.276-.479-.724 0-1L49.167 17c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 40c-.478.276-1.253.276-1.732 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeOpacity="0.3"
                                            d="M56.096 36c-.479-.276-.479-.724 0-1l9.526-5.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L59.56 37c-.479.276-1.254.276-1.732 0zM70.818 25.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.733 0l1.732 1c.478.276.478.724 0 1l-9.527 5.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            className="fill-white"
                                            stroke="currentColor"
                                            d="M45.703 52c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 59.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeOpacity="0.3"
                                            d="M93.335 34.5c-.478-.276-.478-.724 0-1l6.062-3.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1l-6.062 3.5c-.478.276-1.254.276-1.732 0zM77.746 43.5c-.478-.276-.478-.724 0-1L89.004 36c.478-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1L81.21 44.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                    </g>
                                </svg>

                                <div>
                                    <h3 className="text-lg font-medium tracking-tight">
                                        UI BLOCKS
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Over 500+ professionally designed, fully
                                        responsive, expertly crafted components.
                                    </p>
                                </div>
                            </div>
                            <div className="group col-span-2 flex items-start justify-start gap-2 px-4 py-10">
                                <svg
                                    className="w-20 shrink-0 text-black *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 120 72"
                                >
                                    <g data-lift="true">
                                        <path
                                            shapeRendering="geometricPrecision"
                                            fill="white"
                                            d="M56.066 6 8.435 33.5C7.478 34.053 7 34.776 7 35.5v3c0 .724.478 1.448 1.435 2L56.066 68c1.913 1.105 5.015 1.105 6.929 0l47.631-27.5c.957-.552 1.435-1.276 1.435-2v-3c0-.724-.479-1.447-1.435-2L62.995 6c-1.914-1.104-5.015-1.104-6.929 0"
                                        ></path>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            d="M112.09 35.496c-.001-.723-.479-1.447-1.435-2l-47.632-27.5c-1.913-1.104-5.015-1.104-6.928 0l-47.631 27.5c-.957.553-1.435 1.277-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2v-3"
                                        ></path>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeOpacity="0.3"
                                            d="M11.062 35.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.253-.276 1.732 0l30.31 17.5c.479.277.479.724 0 1l-47.63 27.5c-.479.276-1.255.276-1.733 0zM45.703 55.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1l-47.631 27.5c-.478.276-1.254.276-1.732 0z"
                                        ></path>
                                        <circle
                                            shapeRendering="geometricPrecision"
                                            cx="1.5"
                                            cy="1.5"
                                            r="1.5"
                                            fill="currentColor"
                                            transform="matrix(.86603 -.5 .86603 .5 16.258 35.496)"
                                        ></circle>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m22.32 33.496 3.464-2M56.961 13.496l3.465-2M49.168 17.996l4.33-2.5M42.24 21.996l3.463-2"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeOpacity="0.3"
                                            d="m41.373 38.496 23.383-13.5"
                                        ></path>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            d="m53.498 55.496 6.928-4M69.086 46.496l6.928-4M84.674 37.496l6.929-4"
                                        ></path>
                                        <path
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeOpacity="0.3"
                                            d="m56.096 56.996 9.526-5.5M71.684 47.996l9.526-5.5M87.273 38.996l9.526-5.5M58.693 58.496l8.66-5M74.282 49.496l8.66-5M89.87 40.496l8.66-5M46.57 38.496l18.186-10.5"
                                        ></path>
                                        <rect
                                            shapeRendering="geometricPrecision"
                                            width="28"
                                            height="2"
                                            fill="currentColor"
                                            rx="0.5"
                                            transform="matrix(.86603 -.5 .86603 .5 33.579 34.496)"
                                        ></rect>
                                        <rect
                                            shapeRendering="geometricPrecision"
                                            width="32"
                                            height="2"
                                            fill="currentColor"
                                            rx="0.5"
                                            transform="matrix(.86603 -.5 .86603 .5 35.311 37.496)"
                                        ></rect>
                                        <rect
                                            shapeRendering="geometricPrecision"
                                            width="10"
                                            height="3"
                                            fill="currentColor"
                                            rx="1.5"
                                            transform="matrix(.86603 -.5 .86603 .5 48.301 39.996)"
                                        ></rect>
                                        <rect
                                            shapeRendering="geometricPrecision"
                                            width="10"
                                            height="3"
                                            fill="currentColor"
                                            fillOpacity="0.3"
                                            rx="1.5"
                                            transform="matrix(.86603 -.5 .86603 .5 58.693 33.996)"
                                        ></rect>
                                    </g>
                                </svg>

                                <div>
                                    <h3 className="text-lg font-medium tracking-tight">
                                        TEMPLATES
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Over 500+ professionally designed, fully
                                        responsive, expertly crafted components.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    },
);

Hero.displayName = "Hero";

export default Hero;
