import { getUserSession } from "@/lib/actions/auth.actions";
import Link from "next/link";

export default async function Home() {
    const { session } = await getUserSession();

    return (
        <>
            {session ? (
                <div>
                    {session?.user?.name}
                </div>
            ) : (
                <Link href="/signin">Login</Link>
            )}
        </>
    );
}
