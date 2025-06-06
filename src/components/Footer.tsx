"use client"
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { CircleX, Facebook, FileUser, Linkedin, Github, PhoneForwarded } from "lucide-react"
import { useState } from "react";
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });


export default function Footer() {
    const mobieLogo = "/logoMobileWhite.png";
    const socialData = [
        {
            value: "#",
            label: "NguyenDuyLam-CV.pdf",
            Icon: FileUser
        },
        {
            value: "#",
            label: "Facebook",
            Icon: Facebook
        },
        {
            value: "#",
            label: "Linkedin",
            Icon: Linkedin
        },
        {
            value: "#",
            label: "Github",
            Icon: Github
        },
    ]
    const phoneNumber = {
        value: "#",
        label: "0327576730",
        Icon: PhoneForwarded
    }

    const customerServices = [
        {
            value: "#",
            label: "MENU",

        },
        {
            value: "#",
            label: "CAREER",

        },
        {
            value: "#",
            label: "CART",

        },
    ]
    const brandData = [
        {
            value: "#",
            label: "ABOUT",

        },
        {
            value: "#",
            label: "BLOGS",

        },
        {
            value: "#",
            label: "NEWS",

        },
        {
            value: "#",
            label: "LEARN",

        },
    ]
    const privacyData = [
        {
            value: "#",
            label: "CONTACT",

        },

        {
            value: "#",
            label: "PRIVACY",

        },
        {
            value: "#",
            label: "TERMS",

        },
    ]

    const [email, setEmail] = useState("");
    return (
        <div className="bg-[var(--main-color)] w-full py-12 text-white">
            <div className="max-w-7xl  mx-auto space-y-8">
                <div className="grid grid-row-4  md:grid-cols-7 gap-4 md:gap-16 md:h-[21vh] justify-center ">
                    {/*Col 01*/}
                    <div className="flex flex-col gap-4 col-span-2 row-start-1 col-start-1 items-center md:items-start my-8 mb-8 md:my-0 md:mb-0">
                        <div className="flex gap-4 items-center mb-4">
                            <Link className="h-16 w-16 block relative" href="/">
                                <Image
                                    src={mobieLogo}
                                    alt="logo"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                            <a href="#" className={`${dancingScript.className} text-5xl`} >CoffeLa</a>
                        </div>
                        <div className="flex gap-8 items-center">
                            <div className="sm:flex gap-4 md:hidden"><phoneNumber.Icon className="cursor-pointer hover:scale-125 " /> </div>
                            {socialData.map((item, index) => (
                                <a className="flex gap-4" key={index} href={item.value} rel="author"><item.Icon className="cursor-pointer hover:scale-125 " name={item.label} /></a>
                            ))}
                        </div>
                        <div className="md:flex gap-4 hidden"><phoneNumber.Icon className="cursor-pointer hover:scale-125 " /> <p>{phoneNumber.label}</p></div>
                    </div>
                    {/*Col 02*/}
                    <div className="flex flex-col  mx-auto md:col-span-1  md:text-start gap-4 w-full text-nowrap items-center md:px-0">
                        {customerServices.map((item, index) => (<a className="py-4 md:py-2 px-2 w-fit hover:scale-110 hover:underline underline-offset-4 items-center justify-center font-semibold" href={item.value} key={index}>{item.label}</a>))}
                    </div>
                    {/*Col 03*/}
                    <div className="flex flex-col  mx-auto row-span-2 md:col-span-1  md:text-start gap-4 w-full text-nowrap items-center md:px-0">
                        {brandData.map((item, index) => (<a className="py-4 md:py-2 px-2 w-fit hover:scale-110 hover:underline underline-offset-4 items-center justify-center font-semibold" href={item.value} key={index}>{item.label}</a>))}
                    </div>
                    {/*Col 04*/}
                    <div className="flex flex-col  mx-auto md:col-span-1  md:text-start gap-4 w-full text-nowrap items-center md:px-0">
                        {privacyData.map((item, index) => (<a className="py-4 md:py-2 px-2 w-fit hover:scale-110 hover:underline underline-offset-4 items-center justify-center font-semibold" href={item.value} key={index}>{item.label}</a>))}
                    </div>
                    {/*Col 05*/}

                    <div className="flex flex-col gap-4 col-span-2 md:mt-1 text-center md:text-start md:p-0 mt-8 mb-4 md:mb-0 w-full px-4">
                        <div className="font-semibold text-lg">SUBSCRIBE TO STAY INFORMED.</div>
                        <div className="mb-4 text-justify md:text-start">Sign up for our email newsletter to be the first to know about exclusive offers, CoffeLa news, events, and exciting new products.</div>
                        <div className="w-full flex">
                            <div className="w-full relative focus-within:text-black text-gray-700">
                                <input type="email" placeholder="Email" value={email || ""} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white  pl-4 py-2 pr-14 " />
                                {email !== "" && <div className="h-full flex items-center absolute top-0 right-2">
                                    <CircleX className="cursor-pointer" onClick={() => setEmail("")} />
                                </div>}

                            </div>
                            <button className="w-20 bg-red-500 cursor-pointer hover:bg-red-400">Send</button>
                        </div>
                    </div>
                </div>
                <hr className="text-white opacity-65" />
                <div className="text-sm text-[#ffffff] ml-4 md:ml-0">
                    <pre className="w-fit">
                        {`CoffeLa | CEO Nguyen Duy Lam
Phone: 032-757-6730 | Email: Duylam3300@gmail.com
Business Registration Number: 000-00-000000
Personal Information Protection Officer: Nguyen Duy Lam
© CoffeLa Co., Ltd. 2025, All rights reserved.`}
                    </pre>
                </div>
            </div>

        </div>
        // <div className="bg-[var(--main-color)] w-full py-10 text-white">
        //     <div className="max-w-7xl  mx-auto space-y-8">
        //         <div className="flex flex-col md:flex-row justify-between items-start gap-16 ">
        //             <div className="flex flex-col gap-4">
        //                 <div className="flex gap-4 items-center mb-4">
        //                     <Link className="h-16 w-16 block relative" href="/">
        //                         <Image
        //                             src={mobieLogo}
        //                             alt="logo"
        //                             fill
        //                             className="object-contain"
        //                         />
        //                     </Link>
        //                     <div className={`${dancingScript.className} text-5xl`} >CoffeLa</div>
        //                 </div>
        //                 <div className="flex gap-8 items-center">
        //                     <div className="sm:flex gap-4 md:hidden"><phoneNumber.Icon className="cursor-pointer hover:scale-125 " /> </div>
        //                     {socialData.map((item, index) => (
        //                         <a className="flex gap-4" key={index} href={item.value} rel="author"><item.Icon className="cursor-pointer hover:scale-125 " name={item.label} /></a>
        //                     ))}
        //                 </div>
        //                 <div className="md:flex gap-4 hidden"><phoneNumber.Icon className="cursor-pointer hover:scale-125 " /> <p>{phoneNumber.label}</p></div>


        //             </div>
        //             <div className="flex flex-col gap-4 w-fit text-wrap text-sm text-gray-200">
        //                 <p>CoffeLa | CEO Nguyen Duy Lam |
        //                     Phone: 032-757-6730 | Email: Duylam3300@gmail.com |
        //                     TP Bank 032-757-6730 CoffeLa Co., Ltd. |
        //                     Business Registration Number: 000-00-000000 |
        //                     Mail-order Business Report No.: 2025-VN Duy-Lam-0923 |
        //                     Food Manufacturing and Processing Business Registration No.: 2023-0000000 |
        //                     Personal Information Protection Officer: Nguyen Duy Lam |
        //                     © CoffeLa Co., Ltd. 2025</p>
        //             </div>
        //             <div className="flex flex-col gap-4 w-fit text-nowrap">
        //                 {brandData.map((item, index) => (<a className="font-semibold" href={item.value} key={index}>{item.label}</a>))}
        //             </div>
        //             <div className="flex flex-col gap-4 w-fit text-nowrap">
        //                 {privacyData.map((item, index) => (<a className="font-semibold" href={item.value} key={index}>{item.label}</a>))}

        //             </div>

        //             <div className="flex flex-col gap-4">
        //                 <div className="">Subscribe to stay informed.</div>
        //                 <div className="">Sign up for our email newsletter to be the first to know about exclusive offers, CoffeLa news, events, and exciting new products.</div>
        //                 <div className="w-[25rem] flex">
        //                     <div className="w-full relative focus-within:text-black text-gray-700">
        //                         <input type="email" placeholder="Email" value={email || ""} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white  pl-4 py-2 pr-14 " />
        //                         {email !== "" && <div className="h-full flex items-center absolute top-0 right-2">
        //                             <CircleX className="cursor-pointer" onClick={() => setEmail("")} />
        //                         </div>}

        //                     </div>
        //                     <button className="w-20 bg-red-500 cursor-pointer hover:bg-red-400">Send</button>
        //                 </div>
        //                 <div className="">

        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}