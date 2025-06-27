"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, CircleX, House, Coffee, Bell } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/hooks/store";
import { removeFromCart } from "@/redux/store/slice/cartSlice";
import { motion } from "framer-motion";

import { CartItem } from "@/types/cart";




export default function NativeHeader() {
    const router = useRouter();
    const pathname = usePathname();
    const mobileLogo = "/logoMobile.png";

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NAV_ITEMS = [
        { name: "Product", path: "/product" },
        { name: "Special Offers", path: "/offers" },
        { name: "The Process", path: "/process" },
        { name: "Packing", path: "/packing" },
        { name: "About", path: "/about" },
    ];

    const NAV_ITEMS_ICON = [
        { name: "Product", path: "/product", Icon: Coffee },
        { name: "Home", path: "/", Icon: House },
        { name: "News", path: "/news", Icon: Bell },
    ]

    const GUEST_NAV_LINKS = [
        { name: "Login", path: "/user/login" },
        { name: "Sign up", path: "/user/signup" },
    ]

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartItemsLength = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleRouting = (location: string) => {
        router.push(location);
        setIsMenuOpen(false);
    }

    function ItemOnCart({ id, name, img, quantity, price }: CartItem) {
        const dispatch = useAppDispatch();

        const handleRemoveItem = (id: string) => {
            dispatch(removeFromCart(id));
        }
        return (
            <>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] grid-rows-2  gap-2">
                    <div className="w-16 h-16 relative row-span-2">
                        <Image src={img || "/logoMobile.png"} alt="product" fill className="rounded-md border-2 border-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                        <span className="text-xl">{name}</span>
                        <CircleX className="cursor-pointer" onClick={() => handleRemoveItem(id)} />
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-base text-gray-500">
                            {quantity} * {price}$
                        </span>
                        <span className="text-lg text-black">{quantity * price}$</span>
                    </div>
                </div>
                <hr className="text-gray-400 my-4" />
            </>
        )
    }


    return (
        <header className="not-md:border-t-4 not-md:border-black select-none py-2 px-6 md:pt-4 font-semibold text-lg bg-[#eef0f3] md:bg-white w-screen fixed not-md:bottom-0   z-50 h-[10vh] shadow-lg border-y-2 border-[#e6e6e6]">
            <div className=" justify-between max-w-7xl mx-auto items-center flex relative h-full">

                <Link href={"/"} className={`hidden md:block pt-1 brand-font`}>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`text-5xl font-bold `}>

                        CoffeLa
                    </motion.span>

                </Link>


                {/* desktop */}
                <nav className="md:flex hidden  items-center">
                    <ul className=" space-x-6 flex items-center">
                        {NAV_ITEMS.map((item, index) => (
                            // <li className="hover:scale-110 mx-6  hover:border-b-2 h-[2rem]" key={item.path}>
                            <motion.li
                                key={index}
                                className={`mx-6  h-fit  ${item.path === pathname ? "text-white bg-[#323232] rounded-2xl border-2 border-white px-4 py-2" : "text-black hover:border-b-2 hover:scale-110 "}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >

                                <Link href={item.path} className=" ">{item.name}</Link>
                            </motion.li>
                            // </li>
                        ))}
                    </ul>
                </nav>

                <div className="md:flex hidden justify-between items-center relative w-[12rem] ">
                    <div className="hover:scale-110 relative group"><ShoppingCart className="w-7 h-7" />
                        <div className="absolute -top-2 -right-2 text-xs bg-red-500 flex items-center  justify-center text-white rounded-full w-5 h-5"><p>{cartItemsLength}</p></div>

                        <div className={`group-hover:block hidden absolute bg-white shadow-2xl border-3 border-gray-200 shadow-gray-400 ${cartItems.length > 0 ? "p-8" : "p-4"}  bottom-0 -right-3 translate-y-full  h-fit w-[20rem]`}>
                            <ul className="max-h-[18rem] overflow-auto my-4">
                                {cartItems.length > 0 ?
                                    cartItems.map((item, index) => (

                                        <li key={index} className="">
                                            <ItemOnCart {...item} />
                                        </li>

                                    )

                                    ) : (<p className="font-medium text-base">No items in the cart.</p>)}
                            </ul>
                            {cartItems.length > 0 && (
                                <div className="space-y-2">
                                    <div className="cursor-pointer text-center w-full bg-[#323232] font-medium text-white py-1"><Link href={"/cart"}>View detail</Link></div>
                                    <div className="cursor-pointer text-center w-full bg-[#323232] font-medium text-white py-1">Pay</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max gap-2">
                        {GUEST_NAV_LINKS.map((item, index) => (
                            <Link key={index} href={item.path} className="cursor-pointer hover:underline hover:scale-110 transition">
                                {item.name}
                            </Link>
                        ))}
                        <div className="shrink w-[1rem] text-center col-start-2">
                            <span>/</span>
                        </div>
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

                    {/* {NAV_ITEMS_ICON.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className={` flex items-center justify-center ${item.path === pathname && "-translate-y-6  border-cricle z-10 rounded-full"}`}>
                                <div className={`relative  bg-[#eef0f3]  z-10 rounded-full flex items-center justify-center ${item.path === pathname && "w-[6rem] h-[6rem] z-10 rounded-full"}`}>
                                    <item.Icon className="w-[2.25rem] h-[2.25rem]" />
                                </div>
                            </motion.div>
                        </Link>
                    ))} */}


                    {NAV_ITEMS_ICON.map((item, index) => {
                        const active = item.path === pathname;
                        return (
                            <Link href={item.path} key={index}>
                                <div className="flex flex-col items-center">
                                    <item.Icon className="w-[2.25rem] h-[2.25rem]" />

                                    {active && (
                                        <motion.div
                                            initial={{ width: 0, x: "100%" }}
                                            animate={{ width: "100%", x: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="h-[3px] bg-black rounded-full mt-2"
                                        />
                                    )}
                                </div>
                            </Link>
                        )
                    })}



                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl cursor-pointer relative">
                        ☰
                        {!isMenuOpen && (
                            <div className="absolute -top-2 -right-4 text-xs bg-red-500 flex items-center  justify-center text-white rounded-full w-5 h-5"><p>{cartItemsLength}</p></div>
                        )}

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
                                <Link href={"/"} className={` text-5xl font-bold text-white  pt-1`}>CoffeLa</Link>
                                <p className="text-sm text-gray-200 font-medium ">Elegance in every sip</p>
                            </div>
                            <ul className="space-y-8 mt-12">
                                {NAV_ITEMS.map((item) => (
                                    <li onClick={() => handleRouting(item.path)} key={item.path} className="border-b-1  border-white text-white py-4 flex justify-between pr-2 cursor-pointer text-xl "><span>{item.name}</span><span>→</span></li>
                                ))}

                                <li >
                                    <div className="hover:scale-110 cursor-pointer  w-fit relative">

                                        <ShoppingCart className="w-7 h-7" onClick={() => handleRouting("/cart")} />
                                        <div className="absolute -top-2 -right-2 text-xs bg-red-500 flex items-center  justify-center text-white rounded-full w-5 h-5"><p>{cartItemsLength}</p></div>

                                    </div>
                                </li>
                                <li onClick={() => handleRouting("")} className="py-4 mt-4 flex justify-between pr-2">
                                    <div className="grid grid-flow-col auto-cols-max gap-2">
                                        {GUEST_NAV_LINKS.map((item, index) => (
                                            <Link key={index} href={item.path} className="cursor-pointer hover:underline hover:scale-110 transition">
                                                {item.name}
                                            </Link>
                                        ))}
                                        <div className="shrink w-[1rem] text-center col-start-2">
                                            <span>/</span>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>)}


        </header>
    )
}