"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/firebase"; // Adjust the path as necessary
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import LayoutComponent from "@/components/shared/LayoutComponent";

const SignInComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // router
    const router = useRouter();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (!user.emailVerified) {
                toast.warn("Please verify your email before signing in.");
                await sendEmailVerification(user);
                toast.info("Verification email has been sent again.");
            } else {
                toast.success("You have successfully signed in!");
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            }
        } catch (error: any) {
            setError(error.message);
            toast.error("Failed to sign in: " + error.message);
        }

        setLoading(false);
    };

    return (
        <LayoutComponent>
            <main className="flex-1">
                <section className="bg-muted py-12 px-6">
                    <div className="container mx-auto max-w-md">
                        <h1 className="text-3xl font-bold mb-6">Sign In to Haitian Diaspora Connect</h1>
                        <form className="space-y-4" onSubmit={handleSignIn}>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <Button type="submit" className="w-full">
                                {loading ? "Signing In..." : "Sign In"}
                            </Button>
                            <p className="text-center text-muted-foreground mt-4">
                                Don&apos;t have an account?{" "}
                                <Link href="/join">
                                    <p className="text-primary">Join now</p>
                                </Link>
                            </p>
                        </form>
                    </div>
                </section>
            </main>
        </LayoutComponent>
    );
}

export default SignInComponent;