"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    User,
    Settings,
    Shield,
    CreditCard,
    Camera,
    MapPin,
    Calendar,
    Edit3,
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentUserProfile } from "@/lib/actions/profile.actions";

interface ProfileLayoutProps {
    children: React.ReactNode;
}

export default function ProfilePage({ children }: ProfileLayoutProps) {
    const [isEditing, setIsEditing] = useState(false);
    const pathname = usePathname();
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProfile() {
            const data = await getCurrentUserProfile();
            setProfile(data);
            setTimeout(() => {
                setLoading(false);
            }, 2500);
        }
        fetchProfile();
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center gap-2">
                <div className="loader"></div>
                Loading profile...
            </div>
        );
    }
    if (!profile) {
        return (
            <div className="flex h-full items-center justify-center text-red-500">
                Profile not found.
            </div>
        );
    }

    const navItems = [
        { name: "General", href: "/profile", icon: User },
        { name: "Settings", href: "/profile/settings", icon: Settings },
        { name: "Security", href: "/profile/security", icon: Shield },
        {
            name: "Subscriptions",
            href: "/profile/subscriptions",
            icon: CreditCard,
        },
        { name: "Billing", href: "/profile/billing", icon: CreditCard },
    ];

    return (
        <div className="min-h-screen">
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="mb-8">
                    <div className="relative">
                        <div className="h-48 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 shadow-xl"></div>
                        <div className="absolute -bottom-16 left-8">
                            <div className="relative">
                                <Avatar className="h-32 w-32 border-4 border-white shadow-2xl">
                                    <AvatarImage
                                        src={profile.image ?? undefined}
                                        alt="Profile"
                                    />
                                    <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-600 text-2xl font-bold text-white">
                                        {profile.name
                                            ? profile.name
                                                  .slice(0, 2)
                                                  .toUpperCase()
                                            : "DK"}
                                    </AvatarFallback>
                                </Avatar>
                                <Button
                                    size="sm"
                                    className="absolute -right-2 -bottom-2 h-10 w-10 rounded-full border bg-white p-0 text-slate-600 shadow-lg hover:bg-slate-50"
                                >
                                    <Camera className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4">
                            <Badge
                                variant="secondary"
                                className="border-white/30 bg-white/20 text-white"
                            >
                                Pro Member
                            </Badge>
                        </div>
                    </div>

                    <div className="mt-20 ml-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="mb-2 text-3xl font-bold text-slate-900">
                                    {profile.name}
                                </h1>
                                <p className="mb-4 text-slate-600">
                                    @{profile.username}
                                </p>
                                <div className="flex items-center gap-6 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {/* No location field in user model, fallback to N/A */}
                                        N/A
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {/* No join date in profile, fallback to static or remove */}
                                        {/* Joined March 2023 */}
                                        Joined {new Date().toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <Button
                                onClick={() => setIsEditing(!isEditing)}
                                variant={isEditing ? "outline" : "default"}
                                className="gap-2"
                            >
                                {isEditing ? (
                                    <>
                                        <X className="h-4 w-4" />
                                        Cancel
                                    </>
                                ) : (
                                    <>
                                        <Edit3 className="h-4 w-4" />
                                        Edit Profile
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="grid grid-cols-10 gap-5">
                        <nav className="col-span-2 mb-6 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-700 hover:text-white ${
                                        pathname === item.href
                                            ? "bg-blue-600 text-white"
                                            : ""
                                    }`}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="col-span-6 w-full px-4">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
