// lib/actions/otp.actions.ts
"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function generateOTP(): Promise<string> {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

export async function storeOTP(email: string, otp: string): Promise<void> {
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes
    await prisma.oTP.upsert({
        where: { email },
        update: { code: otp, expiresAt, createdAt: new Date() },
        create: { email, code: otp, expiresAt },
    });
}

export async function verifyOTP(email: string, otp: string): Promise<boolean> {
    const otpRecord = await prisma.oTP.findUnique({ where: { email } });

    if (!otpRecord) {
        return false;
    }

    if (otpRecord.code === otp && otpRecord.expiresAt > new Date()) {
        return true;
    }

    return false;
}

export async function deleteOTP(email: string): Promise<void> {
    await prisma.oTP.delete({ where: { email } });
}
