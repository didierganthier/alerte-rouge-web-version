"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { profile } from "console";
import getAvatarUrl from "@/helpers/getAvatarUrl";
import LayoutComponent from "@/components/shared/LayoutComponent";

const  JoinComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // router
  const router = useRouter();

  // if user exists redirect to home
  auth.onAuthStateChanged((user: any) => {
    if (user) {
      router.push("/");
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: user.email,
        about: 'Hey there! I am using Haitian Diaspora Connect.',
        tags: [],
        followers: [],
        following: [],
        profilePicture: user.photoURL || getAvatarUrl(user.email!!),
        verified: false,
      });

      // Set display name
      await updateProfile(user, {
        displayName: name,
        photoURL: user.photoURL || getAvatarUrl(user.email!!),
      });

      console.log("User added to Firestore");

      // Send verification email
      await sendEmailVerification(user);
      console.log("Verification email sent");
      toast.success("Account created successfully. Please check your email to verify your account.");
      setTimeout(() => {
        router.push("/login");
      });
    } catch (error: any) {
      setError(error.message);
      toast.error("Failed to sign up: " + error.message);
      console.error("Failed to sign up: ", error);
    }

    setLoading(false);
  };

  return (
    <LayoutComponent>
      <main className="flex-1">
        <section className="bg-muted py-12 px-6">
          <div className="container mx-auto max-w-md">
            <h1 className="text-3xl font-bold mb-6">Join Alerte Rouge</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter a password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button type="submit" className="w-full">
                {loading ? "Granting Access..." : "Join"}
              </Button>
              <p className="text-center text-muted-foreground mt-4">
                Already have an account?{" "}
                <Link href="/sign-in">
                  <p className="text-primary">Sign in</p>
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </LayoutComponent>
  );
}

export default JoinComponent;