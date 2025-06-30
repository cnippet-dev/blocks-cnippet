import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { randomBytes } from "crypto";
import prisma from "@/lib/prisma";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function generateResetToken(userId: string): Promise<string> {
    const token = randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 3600000); // 1 hour from now

    await prisma.resetToken.create({
        data: {
            token,
            userId,
            expires,
        },
    });

    return token;
}

export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }
};
