import { ImageProps } from "next/image";

export type NavbarProps = {
    site: {
        name: string;
        logo: ImageProps;
    };
    links: {
        title?: string;
        href?: string;
        label?: string;

        sub?: {
            title?: string;
            href?: string;
            label?: string;
        }[];
    }[];
};

export type ComponentProps = {
    heading?: string;
    header?: string;
    description?: string;

    components?: {
        title: string;
        description: string;
        thumbnail: ImageProps;
        link: string;
    }[];
};
