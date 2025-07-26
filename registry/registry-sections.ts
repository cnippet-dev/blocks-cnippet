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
            type: "registry:sections",
            auth: authConfig[index] === "T",
            pro: proConfig[index] === "T",
            dependencies: ["framer-motion"],
            files: [
                `${BASE_PATH}sections/${sectionName}/${sectionName}${sectionIndex}.tsx`,
            ],
        };
    });
};

export const sections = [
    ...generateSections(
        "pricing",
        7,
        ["F", "F", "T", "F", "T", "F", "T"],
        ["F", "F", "T", "F", "F", "F", "F"],
    ),
    ...generateSections("hero", 2, ["T", "T"], ["T", "T"]),
    ...generateSections("login", 4, ["F", "F", "F", "F"], ["F", "F", "F", "F"]),
];
