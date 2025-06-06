"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingCart, CircleX } from "lucide-react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { useAppDispatch } from "@/hooks/store";

import { removeFromCart } from "@/redux/store/slice/cartSlice";

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
    const dispatch = useAppDispatch();

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartItemsLength = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleRouting = (location: string) => {
        router.push(location);
        setIsMenuOpen(false);
    }

    const handleRemoveItem = (id: string) => {
        console.log("Removing item with id:", id); // Debug
        dispatch(removeFromCart(id));

    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup khi component unmount
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isMenuOpen]);

    return (
        <header className="select-none py-2 px-6 md:pt-4 font-semibold text-lg bg-white w-screen fixed  z-50 h-[10vh] shadow-2xl border-b-2 border-[#e6e6e6]">
            <div className=" justify-between max-w-7xl mx-auto items-center flex relative h-full">

                <Link href={"/"} className={`hidden md:block text-5xl font-bold ${dancingScript.className} pt-1`}>CoffeLa</Link>


                {/* desktop */}
                <nav className="md:flex hidden  items-center">
                    <ul className=" space-x-6 flex">
                        {NAV_ITEMS.map((item) => (<li className="hover:scale-110 mx-6  hover:border-b-2 h-[2rem]" key={item.path}>
                            <Link href={item.path} className="navItem text-black ">{item.name}</Link>
                        </li>))}
                    </ul>
                </nav>
                <div className="md:flex hidden justify-between items-center relative w-[12rem] group">
                    <nav >
                        <ul className="flex justify-between space-x-4">
                            <li className="hover:scale-110 cursor-pointer relative"><ShoppingCart className="w-7 h-7" />
                                <div className="absolute -top-2 -right-2 text-xs bg-red-500 flex items-center  justify-center text-white rounded-full w-5 h-5"><p>{cartItemsLength}</p></div>
                            </li>

                        </ul>
                    </nav>
                    <div className="flex gap-2"><a className="cursor-pointer hover:underline hover:scale-110">Login</a><span className="cursor-default"> / </span><a className="cursor-pointer hover:underline hover:scale-110">Signup</a></div>

                    <div className="group-hover:block hidden absolute bg-white shadow-2xl border-3 border-gray-200 shadow-gray-400 p-8  bottom-0 right-0 translate-y-full  h-fit w-[20rem]">
                        <ul >
                            {cartItems.map((item, index) => (

                                <li key={index} className="">
                                    <div className="grid grid-cols-[auto_minmax(0,1fr)] grid-rows-2  gap-2">
                                        <div className="w-16 h-16 relative row-span-2">
                                            <Image src={item?.img || "/logoMobile.png"} alt="product" fill className="rounded-md border-2 border-gray-400" />
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="text-xl">{item.name}</span>
                                            <CircleX className="cursor-pointer" onClick={() => handleRemoveItem(item.id)} />
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-base text-gray-500">
                                                {item.quantity} * {item.price}$
                                            </span>
                                            <span className="text-lg text-red-500">{item.quantity * item.price}$</span>
                                        </div>
                                    </div>
                                    <hr className="text-gray-400 my-4" />
                                </li>

                            ))}
                        </ul>
                    </div>


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

                    <div className="hover:scale-110 cursor-pointer absolute right-16"><ShoppingCart className="w-7 h-7" />
                        <div className="absolute -top-2 -right-2 text-xs bg-red-500 flex items-center  justify-center text-white rounded-full w-5 h-5"><p>{cartItemsLength}</p></div>
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl cursor-pointer ">
                        ☰
                    </button>
                </div>


            </div>
            {/* mobile */}
            {isMenuOpen && (
                <div className="fixed md:hidden  bg-black/70 h-full z-50 w-full inset-0 text-white backdrop-blur-sm transition-opacity duration-300 not-md">
                    <div className="relative w-[100vw] h-[100vh] p-10 ">
                        <button onClick={() => setIsMenuOpen(false)} className="text-2xl absolute right-11 top-6 cursor-pointer text-white/50 hover:text-white" aria-label="Close menu">
                            x
                        </button>

                        <nav className="mt-10">
                            <div className="flex items-end gap-6">
                                <Link href={"/"} className={` text-5xl font-bold text-white ${dancingScript.className} pt-1`}>CoffeLa</Link>
                                <p className="text-sm text-gray-200 font-medium ">Elegance in every sip</p>
                            </div>
                            <ul className="space-y-8 mt-12">
                                {NAV_ITEMS.map((item) => (
                                    <li onClick={() => handleRouting(item.path)} key={item.path} className="border-b-1  border-white text-white py-4 flex justify-between pr-2 cursor-pointer text-xl "><span>{item.name}</span><span>→</span></li>
                                ))}

                                <li onClick={() => handleRouting("")} className="py-4 mt-4 flex justify-between pr-2">

                                    <div className="flex gap-8"><a className="cursor-pointer hover:underline hover:scale-110">Login</a><span> / </span><a className="cursor-pointer hover:underline hover:scale-110">Signup</a></div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>)}


        </header>
    )
}