"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

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
        <header className="p-6 md:p-10 font-semibold text-lg">
            <div className=" justify-between max-w-7xl mx-auto items-center flex ">
                <div className="">
                    <Link href="/"><p >Coffee Shop</p></Link>
                </div>
                {/* desktop */}
                <nav className="md:flex hidden ">
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
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
                        ☰
                    </button>
                </div>
            </div>
            {/* mobile */}
            {isMenuOpen && (<div className="fixed md:hidden bg-black/70 h-full z-50 w-full inset-0 text-white backdrop-blur-sm transition-opacity duration-300">
                <div className="relative w-[100vw] h-[100vh] p-10 ">
                    <button onClick={() => setIsMenuOpen(false)} className="text-2xl absolute right-6 top-6" aria-label="Close menu">
                        x
                    </button>
                    <nav className="mt-10">
                        <ul className="space-y-4">
                            {NAV_ITEMS.map((item) => (
                                <li onClick={() => handleRouting(item.path)} key={item.path} className="border-b-1 border-white/20 py-4 flex justify-between pr-2"><span>{item.name}</span><span>→</span></li>
                            ))}

                            <li onClick={() => handleRouting("")} className="border-b-1 border-whit py-4 flex justify-between pr-2"><p>Chat</p><p>{">"}</p></li>
                            <li onClick={() => handleRouting("")} className="border-b-1 border-whit py-4 flex justify-between pr-2"><p>Cart</p><p>{">"}</p></li>
                            <li onClick={() => handleRouting("")} className="border-b-1 border-whit py-4  pr-2"><p>Login / Signup</p></li>
                        </ul>
                    </nav>
                </div>
            </div>)}


        </header>
    )
}