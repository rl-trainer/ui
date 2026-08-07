"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!email && !phone) {
            setError("Please enter an email or phone number.");
            return;
        }
        setError(null); // clear any old error if validation now passes

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, email, phone }),
            });

            type SignupResponse = | { id: string; username: string } | { error: string };
            const data: SignupResponse = await response.json();

            if (!response.ok) {
                setError("error" in data ? data.error : "Signup failed.");
                return;
            }
            router.push("/login");
        }
        catch {
            setError("Something went wrong, please try again.");
        }
    }

    const inputClasses =
        "w-full rounded-md border border-foreground/20 bg-background px-3 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent";

    return (
        <div className="flex flex-1 items-center justify-center bg-background px-6 py-16 text-foreground">
            <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-sm flex-col gap-4"
            >
                <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>

                <label className="flex flex-col gap-1 text-sm">
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className={inputClasses}
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm">
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className={inputClasses}
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm">
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className={inputClasses}
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm">
                    Phone
                    <input
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        className={inputClasses}
                    />
                </label>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button
                    type="submit"
                    className="mt-2 rounded-full bg-accent px-6 py-2 font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
