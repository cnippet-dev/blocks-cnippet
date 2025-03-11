import { Info } from "lucide-react";
import React from "react";

const features = [
    {
        title: "Built with Tailwind CSS",
        description:
            "Fully styled components using modern utility-first CSS framework for rapid UI development",
        icon: <Info />,
    },
    {
        title: "100+ UI/UX blocks",
        description:
            "Over 100 UI blocks and components designed for seamless integration into your projects",
        icon: <Info />,
    },
    {
        title: "Data Blocks",
        description:
            "A full set of data visualization blocks for creating beautiful, insightful dashboards",
        icon: <Info />,
    },
    {
        title: "Light and dark mode",
        description:
            "All of our blocks come with both light and dark mode variants for perfect visual experience",
        icon: <Info />,
    },
];
const Feature = () => {
    return (
        <section className="mx-auto bg-white py-32">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-2 text-lg text-blue-600">
                    BUILT WITH MODERN TOOLS
                </div>
                <h2 className="mb-8 text-4xl font-semibold">
                    Blocks entirely built with React components
                    <br />
                    and Tailwind CSS
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-start text-left ring ring-gray-100 bg-white shadow-md p-6 rounded-xl"
                        >
                            <div className="flex items-center gap-2">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-2 text-lg font-medium">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
