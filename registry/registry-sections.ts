const BASE_PATH = "registry/default/";

const generateSections = (
    sectionName: string,
    totalSections: number,
    authConfig: string[],
    proConfig: string[],
) => {
    return Array.from({ length: totalSections }, (_, index) => {
        const sectionIndex = index + 1;
        return {
            name: `${sectionName}-${sectionIndex}`,
            slug: `/sections/${sectionName}`,
            type: "registry:sections",
            auth: authConfig[index] === "T",
            pro: proConfig[index] === "T",
            dependencies: ["framer-motion"],
            files: [
                `${BASE_PATH}sections/${sectionName}/${sectionName}${sectionIndex}.tsx`,
            ],
            thumbnail: `/images/components/featured-images/${sectionName}${sectionIndex}.PNG`,
        };
    });
};

export const sections = [
    ...generateSections(
        "pricing",
        7,
        ["F", "F", "F", "F", "F", "F", "F"],
        ["F", "F", "F", "F", "F", "F", "F"],
    ),
];
