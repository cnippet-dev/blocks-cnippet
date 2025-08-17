"use client";

import React from "react";
import { signOut } from "next-auth/react";
import {
    RiBankCardFill,
    RiHeart2Fill,
    RiLogoutBoxRFill,
    RiSettings2Fill,
    RiSparkling2Fill,
    RiUserFill,
    RiUserSettingsFill,
} from "@remixicon/react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useSessionCache } from "@/hooks/use-session-cache";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog-cn";
import { Button } from "@/components/ui/button";
// Dynamically import AuthDialog. It will be in a separate JS chunk.
const AuthDialog = dynamic(() => import("../auth/dialog"), {
    loading: () => <div className="size-9 rounded-full bg-gray-200" />, // Optional: a simple loader
});

const NavUser = () => {
    const { status, data: session, isAuthenticated, isLoading } = useSessionCache();

    return (
        <>
            {isLoading ? (
                <div className="-mt-[22px] mr-3 ml-2 w-fit">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="">
                                    <div className="mt-0 flex w-full cursor-pointer items-center justify-center gap-2">
                                        {session?.user?.image ? (
                                            <Avatar className="size-9 rounded-full">
                                                <AvatarImage
                                                    src={session.user.image}
                                                    alt="user profile"
                                                    width={1080}
                                                    height={680}
                                                />
                                            </Avatar>
                                        ) : (
                                            <UserIcon className="mx-auto size-8" />
                                        )}

                                        {/* <div
                                            className={`grid flex-1 text-left text-sm leading-tight`}
                                        >
                                            <span className="truncate font-semibold dark:text-white">
                                                {session.user?.name}
                                            </span>
                                        </div> */}
                                        {/* <ChevronsUpDown
                                            className={`ml-auto size-4 text-white`}
                                        /> */}
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {session?.user?.name}
                                        </p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {session?.user?.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile">
                                            <RiUserFill className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile/billing">
                                            <RiBankCardFill className="mr-2 h-4 w-4" />
                                            <span>Billing</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile/settings">
                                            <RiSettings2Fill className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile/favourites">
                                            <RiHeart2Fill className="mr-2 h-4 w-4" />
                                            <span>Favourites</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile/subscriptions">
                                            <RiSparkling2Fill className="mr-2 h-4 w-4" />
                                            <span>Pro Subscription</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400"
                                    onClick={() => signOut()}
                                >
                                    <RiLogoutBoxRFill className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <RiUserFill className="mr-2 h-4 w-4" />
                                    Sign In
                                </Button>
                            </DialogTrigger>
                            <AuthDialog />
                        </Dialog>
                    )}
                </>
            )}
        </>
    );
};

export default NavUser;

function UserIcon(props: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                    fill="#000000"
                ></path>{" "}
                <path
                    d="M12.0001 6C10.3433 6 9.00012 7.34315 9.00012 9C9.00012 10.6569 10.3433 12 12.0001 12C13.657 12 15.0001 10.6569 15.0001 9C15.0001 7.34315 13.657 6 12.0001 6Z"
                    fill="#ffffff"
                ></path>{" "}
                <path
                    d="M17.8948 16.5528C18.0356 16.8343 18.0356 17.1657 17.8948 17.4473C17.9033 17.4297 17.8941 17.4487 17.8941 17.4487L17.8933 17.4502L17.8918 17.4532L17.8883 17.46L17.8801 17.4756C17.874 17.4871 17.8667 17.5004 17.8582 17.5155C17.841 17.5458 17.8187 17.5832 17.7907 17.6267C17.7348 17.7138 17.6559 17.8254 17.5498 17.9527C17.337 18.208 17.0164 18.5245 16.555 18.8321C15.623 19.4534 14.1752 20 12.0002 20C8.31507 20 6.76562 18.4304 6.26665 17.7115C5.96476 17.2765 5.99819 16.7683 6.18079 16.4031C6.91718 14.9303 8.42247 14 10.0691 14H13.7643C15.5135 14 17.1125 14.9883 17.8948 16.5528Z"
                    fill="#ffffff"
                ></path>{" "}
            </g>
        </svg>
    );
}
