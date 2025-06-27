// app/user/[...slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import LoginForm from "../../../components/user/LoginForm";
import Image from "next/image";
import SignupForm from "@/components/user/SignupForm";
import { motion } from "framer-motion";


export default function UserPage() {

    const params = useParams();
    const slug = params.slug;
    const current = Array.isArray(slug) ? slug[0] : slug;
    const isLogin = current?.toLowerCase() == "login" ? true : false;

    const slideVariant = {
        initial: { x: isLogin ? 0 : "100%" },
        animate: { x: isLogin ? "100%" : "0%", transition: { duration: 0.6, ease: "easeInOut" } },
    };
    const lightbulb = "/loginposter.png";


    return (
        <div className="flex items-center justify-center h-[90vh] bg-gray-100 relative select-none">
            <div className="bg-white border-gray-300 max-w-7xl shadow-md h-[75%] flex relative w-full overflow-hidden">
                <motion.div
                    key={!isLogin ? "login" : "signup"}
                    variants={slideVariant}
                    initial="initial"
                    animate="animate"
                    className="absolute w-1/2 h-full z-10">
                    <div className="w-full h-full relative shadow-2xl">
                        <Image src={lightbulb} fill alt="" />
                    </div>
                </motion.div>
                <LoginForm />
                <SignupForm />
            </div>

        </div>
    );
}
