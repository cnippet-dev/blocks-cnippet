import { Registry } from "@/registry/schema";

const BASE_PATH = "registry/default";

const generateSections = (
    sectionsConfig: { name: string; no?: string }[],
): Registry => {
    return sectionsConfig.map((section, index) => ({
        name: section.name,
        slug: `/sections/${section.name}`,
        type: "registry:sections",
        // files: [`${BASE_PATH}/sections/${section.name}/${section.name}-1.tsx`],
        files: [`${BASE_PATH}/sections/banner/banner-1.tsx`],
        number: "4",
        thumbnail: `https://res.cloudinary.com/dphulm0s9/image/upload/v1737696976/${section.name}.png`,
    }));
};

export const section: Registry = generateSections([
    {
        name: "banner",
        no: "4",
    },
    {
        name: "blog",
        no: "2",
    },
    {
        name: "career",
        no: "5",
    },
    {
        name: "contact",
        no: "1",
    },
    {
        name: "cta",
    },
    {
        name: "faq",
    },
    {
        name: "feature",
    },
    {
        name: "footer",
    },
    {
        name: "header",
    },
    {
        name: "hero",
    },
    {
        name: "metrics",
    },
    {
        name: "newsletter",
    },
    {
        name: "pricing",
    },
    {
        name: "team",
    },
    {
        name: "testimonial",
    },
]);
