'use client'
import Link from "next/link";
import { useState } from "react";



export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        if (email === "test@example.com" && password === "123456") {
            alert("Login successful!");
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-1/2 py-[5.5rem] px-20 bg-white space-y-8"
        >
            <h2 className="text-7xl font-bold text-center text-gray-800 brand-font mb-10">Sign Up</h2>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-2 mb-4 border-b-2 border-gray-300 focus:outline-none  focus:border-black"
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 py-2 mb-4 border-b-2 border-gray-300 focus:outline-none  focus:border-black"
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-2 py-2 mb-4 border-b-2 border-gray-300 focus:outline-none  focus:border-black"
            />

            <button
                type="submit"
                className="w-full bg-black text-white py-3 font-semibold cursor-pointer rounded-md hover:bg-gray-700 transition duration-200"
            >
                Login
            </button>
            <div className="flex gap-2">
                <label className="text-gray-600">Already have account?</label> <Link href="./login">Login now</Link>
            </div>
        </form>
    );
}