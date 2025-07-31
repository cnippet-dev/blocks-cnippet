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
        number: section.no,
        thumbnail: `https://res.cloudinary.com/dcxm3ccir/image/upload/v1753941711/${section.name}.png`,
    }));
};

export const section: Registry = generateSections([
    {
        name: "pricing",
        no: "4",
    },
    {
        name: "hero",
        no: "2",
    },
    {
        name: "login",
        no: "2",
    },
    {
        name: "footer",
        no: "3",
    },
]);
