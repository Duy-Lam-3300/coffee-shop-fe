"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Image from "next/image";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });



export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const mobileLogo = "/logoMobile.png";

    const NAV_ITEMS = [
        { name: "Product", path: "/product" },
        { name: "Special Offers", path: "/offers" },
        { name: "The Process", path: "/process" },
        { name: "Packing", path: "/packing" },
        { name: "About", path: "/about" },
    ];

    const SECONDARY_ITEMS = [
        { name: "Chat", path: "/chat" },
        { name: "Cart", path: "/cart" },
    ];

    const handleRouting = (location: string) => {
        router.push(location);
        setIsMenuOpen(false);
    }

    return (
        <header className="py-2 px-6 md:p-8 font-semibold text-lg bg-white w-screen fixed  z-50 h-[10vh] shadow-2xl border-b-2 border-[#e6e6e6]">
            <div className=" justify-between max-w-7xl mx-auto items-center flex ">

                <Link href={"/"} className={`hidden md:block text-5xl font-bold ${dancingScript.className} pt-1`}>CoffeLa</Link>


                {/* desktop */}
                <nav className="md:flex hidden  items-center">
                    <ul className=" space-x-6 flex">
                        {NAV_ITEMS.map((item) => (<li key={item.path}>
                            <Link href={item.path} className="navItem text-black">{item.name}</Link>
                        </li>))}
                    </ul>
                </nav>
                <div className="md:flex hidden justify-between items-center space-x-6">
                    <nav >
                        <ul className="flex justify-between space-x-4">
                            <li>Chat</li>
                            <li>Cart</li>
                        </ul>
                    </nav>
                    <button>Login/Signup</button>
                </div>
                <div className="md:hidden h-fit flex justify-between w-full items-center">
                    <Link className="h-14 w-14 block relative" href="/">
                        <Image
                            src={mobileLogo}
                            alt="logo"
                            fill
                            className="object-contain"
                        />
                    </Link>
                    <Link className={`font-bold text-4xl ${dancingScript.className}  mr-6`} href={"/"}>CoffeLa</Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl cursor-pointer">
                        ☰
                    </button>
                </div>
            </div>
            {/* mobile */}
            {isMenuOpen && (
                <div className="fixed md:hidden bg-black/70 h-full z-50 w-full inset-0 text-white backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative w-[100vw] h-[100vh] p-10 ">
                        <button onClick={() => setIsMenuOpen(false)} className="text-2xl absolute right-6 top-6 cursor-pointer text-white/50 hover:text-white" aria-label="Close menu">
                            x
                        </button>
                        <nav className="mt-10">
                            <ul className="space-y-4">
                                {NAV_ITEMS.map((item) => (
                                    <li onClick={() => handleRouting(item.path)} key={item.path} className="border-b-1 border-white/20 text-white/50 hover:border-white hover:text-white py-4 flex justify-between pr-2 cursor-pointer hover:text-xl "><span>{item.name}</span><span>→</span></li>
                                ))}

                                <li onClick={() => handleRouting("")} className="border-b-1 border-whit py-4 flex justify-between pr-2"><p>Cart</p><p>{">"}</p></li>
                                <li onClick={() => handleRouting("")} className="border-b-1 border-whit py-4  pr-2"><p>Login / Signup</p></li>
                            </ul>
                        </nav>
                    </div>
                </div>)}


        </header>
    )
}