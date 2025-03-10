import { getUserSession } from "@/lib/actions/auth.actions";
import Link from "next/link";
import SignOutButton from "@/components/signout-button";

export default async function Home() {
    const { session } = await getUserSession();

    return (
        <>
            {session ? (
                <div>
                    {session?.user?.name}
                    <SignOutButton />
                </div>
            ) : (
                <Link href="/signin">Login</Link>
            )}
        </>
    );
}
