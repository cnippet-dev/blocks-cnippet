import { Registry } from "@/registry/schema";

const BASE_PATH = "registry/default";

const generateSections = (
    sectionsConfig: { name: string; no?: string }[],
): Registry => {
    return sectionsConfig.map((section, index) => ({
        name: section.name,
        slug: `/sections/${section.name}`,
        type: "registry:section",
        // files: [`${BASE_PATH}/sections/${section.name}/${section.name}-1.tsx`],
        files: [`${BASE_PATH}/sections/hero/hero1.tsx`],
        number: "4",
        thumbnail: `https://res.cloudinary.com/dphulm0s9/image/upload/v1751293059/${section.name}.png`,
    }));
};

export const section: Registry = generateSections([
    {
        name: "pricing",
        no: "4",
    },
]);


