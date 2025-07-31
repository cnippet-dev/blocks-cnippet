"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
    id: string;
    title: string;
    description: string;
    readTime: string;
    publishedAt: string;
    tags?: string[];
    illustration: React.ReactNode;
}

const blogData: BlogPost[] = [
    {
        id: "1",
        title: "Every drafts and review matters",
        description: "Extract structured data from hundreds of documents at the same time.",
        readTime: "5 min read",
        publishedAt: "2 days ago",
        illustration: (
            <svg width="200" height="160" viewBox="0 0 200 160" className="text-gray-700">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="60" y="100" width="80" height="50" rx="4" />
                    <line x1="60" y1="120" x2="140" y2="120" />
                    <circle cx="100" cy="60" r="15" />
                    <path d="M85 75 Q100 85 115 75" />
                    <line x1="100" y1="75" x2="100" y2="100" />
                    <line x1="85" y1="90" x2="100" y2="100" />
                    <line x1="115" y1="90" x2="100" y2="100" />
                    <circle cx="95" cy="58" r="4" fill="none" />
                    <circle cx="105" cy="58" r="4" fill="none" />
                    <line x1="99" y1="58" x2="101" y2="58" />
                    <rect x="30" y="40" width="20" height="15" rx="2" />
                    <path d="M30 45 L40 52 L50 45" />
                    <path
                        d="M100 110 L102 115 L107 115 L103 118 L105 123 L100 120 L95 123 L97 118 L93 115 L98 115 Z"
                        fill="currentColor"
                    />
                </g>
            </svg>
        ),
    },
    {
        id: "2",
        title: "Echo become a tech-driven legal solutions",
        description: "Extract structured data from hundreds of documents at the same time.",
        readTime: "10 min read",
        publishedAt: "3 days ago",
        tags: ["HR Advisory", "Law Solutions"],
        illustration: (
            <svg width="200" height="160" viewBox="0 0 200 160" className="text-gray-700">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="50" y="120" width="100" height="30" />
                    <line x1="65" y1="120" x2="65" y2="80" />
                    <line x1="80" y1="120" x2="80" y2="80" />
                    <line x1="100" y1="120" x2="100" y2="80" />
                    <line x1="120" y1="120" x2="120" y2="80" />
                    <line x1="135" y1="120" x2="135" y2="80" />
                    <path d="M40 80 L100 50 L160 80 Z" />
                    <line x1="40" y1="80" x2="160" y2="80" />
                    <line x1="45" y1="150" x2="155" y2="150" />
                    <line x1="47" y1="145" x2="153" y2="145" />
                </g>
            </svg>
        ),
    },
    {
        id: "3",
        title: "Echo: The new legal workspace",
        description: "Extract structured data from hundreds of documents at the same time.",
        readTime: "8 min read",
        publishedAt: "4 days ago",
        illustration: (
            <svg width="200" height="160" viewBox="0 0 200 160" className="text-gray-700">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="70" y="90" width="60" height="40" />
                    <path d="M70 90 L100 70 L130 90 L130 130 L100 110 L70 130 Z" />
                    <line x1="100" y1="70" x2="100" y2="110" />
                    <line x1="70" y1="90" x2="100" y2="70" />
                    <line x1="130" y1="90" x2="100" y2="70" />
                    <path d="M50 80 Q45 75 40 80 Q35 85 40 90 Q45 95 50 90 L60 85" />
                    <line x1="50" y1="80" x2="45" y2="75" />
                    <line x1="50" y1="80" x2="45" y2="85" />
                    <line x1="50" y1="80" x2="47" y2="80" />
                    <path d="M150 80 Q155 75 160 80 Q165 85 160 90 Q155 95 150 90 L140 85" />
                    <line x1="150" y1="80" x2="155" y2="75" />
                    <line x1="150" y1="80" x2="155" y2="85" />
                    <line x1="150" y1="80" x2="153" y2="80" />
                    <path
                        d="M90 50 Q85 45 80 50 Q75 55 80 60 L90 70 L100 60 Q105 55 100 50 Q95 45 90 50 Z"
                        fill="#3b82f6"
                    />
                </g>
            </svg>
        ),
    },
];

export default function Component() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-16">
            <div className="mb-8 flex justify-center">
                <Badge variant="outline" className="border-gray-200 bg-white px-4 py-2 text-sm">
                    Articles
                </Badge>
            </div>

            <div className="mb-16 text-center">
                <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
                    Read latest blog
                    <br />
                    and articles
                </h1>
            </div>

            <div className="mb-12 grid gap-8 md:grid-cols-3">
                {blogData.map((post) => (
                    <Card key={post.id} className="border-0 bg-gray-50 p-8">
                        <CardContent className="p-0">
                            <div className="mb-8">
                                <div className="flex h-48 w-full items-center justify-center">
                                    {post.illustration}
                                </div>
                                {post.tags && (
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {post.tags.map((tag, index) => (
                                            <Badge key={index} className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {post.description}
                                </p>
                                <div className="flex items-center justify-between pt-4 text-sm text-gray-500">
                                    <span>{post.readTime}</span>
                                    <span>{post.publishedAt}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center">
                <Button className="rounded-lg bg-gray-900 px-8 py-3 text-white hover:bg-gray-800">
                    View all
                </Button>
            </div>
        </div>
    );
}
