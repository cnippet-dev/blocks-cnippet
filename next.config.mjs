import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import { withContentCollections } from "@content-collections/next";

/** @type {import('rehype-pretty-code').Options} */
const options = {
    theme: "night-owl",
};

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [[rehypePrettyCode, options]],
    },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
};

export default withContentCollections(withMDX(nextConfig));
