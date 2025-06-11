'use client'

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Dancing_Script } from "next/font/google";
import {  MapPin, Search } from "lucide-react";
// import { useState } from "react";


export default function Header() {
    // const [searching, setSearching] = useState("");
    // const mobileLogo = "/logoMobile.png";

    return (
        <header className="select-none py-2 px-8 max-w-7xl font-semibold text-lg bg-[#eef0f3] md:bg-white w-screen flex items-center fixed  md:hidden  z-50 h-[10vh] shadow-lg border-y-2 border-[#e6e6e6]">
            <div className="flex justify-between items-center gap-6">

                <div className="border-2 w-full rounded-md overflow-hidden focus-within:border-black border-gray-500 bg-gray-200 justify-between flex items-center">
                    <input className="outline-none text-base pl-4 py-1" placeholder="Find your drink..." />
                    <button className="h-[2rem] w-[3rem] bg-gray-300  cursor-pointer"><Search className="h-[1.5rem] w-[1.5rem] mx-auto" /></button>
                </div>
                <div className="text-black flex items-center mx-0">
                    <MapPin className="w-[2rem] h-[2rem]" />
                    <div className="">
                        <p className="text-base">Your home</p>
                        <p className="text-xs text-gray-700 whitespace-nowrap truncate overflow-hidden w-[5.8rem]">Ho Chi Minhssssssss</p>
                    </div>
                </div>
            </div>
        </header>
    )
}