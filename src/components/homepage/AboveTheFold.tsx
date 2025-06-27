import Image from "next/image"
import Link from "next/link"

export default function AboveTheFold() {
    const information = {
        appName: "CoffeLa",
        supportDefinition: "Elegance in every sip",
        mainHeadline: "Your Coffee. Your Way. Anytime. Anywhere.",
        supportHeadline: "Whether you’re starting your morning hustle or savoring a quiet evening, Coffela is here to serve moments that matter. Join thousands of happy coffee lovers who’ve made the switch to better, fresher, and more personalized coffee.",
        salesSummaries: [
            { label: "Our products", value: "+100" },
            { label: "Total sales", value: "+20k" },
            { label: "Total orders", value: "+20k" },
        ]
    }
    return (
        <div className="bg-[#e6e6e6] md:pt-[5rem]">
            <div className="flex justify-between items-center mx-auto max-w-7xl h-[40vh] md:h-[70vh] gap-16 relative">
                <div className="w-1/2  left my-auto z-10 md:-translate-y-[2.5rem] -translate-y-[0.5rem] ml-8 md:ml-0">
                    <h1 className={`md:text-8xl text-6xl font-extrabold my-4 bg-clip-text brand-font`}>{information.appName}</h1>
                    {/* <h1 className={`text-8xl font-extrabold my-4 bg-clip-text text-[transparent] 
                    bg-black`}>{information.appName}</h1> */}
                    <div className="">
                        <p className="font-bold text-lg md:text-3xl">{information.supportDefinition}</p>
                        <p className="font-semibold italic text-sm md:text-xl">{information.mainHeadline}</p>
                        <p className="my-4 hidden md:block">{information.supportHeadline}</p>
                    </div>
                    <div className="hidden md:flex gap-20 items-center my-8 text-xl">
                        <button className="text-black border-2 border-black transition-transform origin-left  ease-in-out delay-300 group-hover:border-white
                        p-2 px-4 rounded-xl font-semibold cursor-pointer  overflow-hidden group relative">
                            <span className="z-10 group-hover:text-white duration-300 relative transition-colors ">
                                Explore more {">"}
                            </span>
                            <span className="bg-black z-0  absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out" />
                        </button>
                        <Link href="" className="underline underline-offset-4  px-4 py-2 font-semibold cursor-pointer">Login / Signup</Link>
                    </div>
                    {/* <button className="relative overflow-hidden border-2 border-black text-black font-semibold cursor-pointer rounded-xl px-4 py-2 group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            Hover Me
                        </span>
                        <span className="absolute inset-0 bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0"></span>
                    </button> */}
                    <div className="hidden md:flex gap-20 ">
                        {information.salesSummaries.map((item, index) => (
                            <div className="justify-center flex flex-col items-center" key={index}>
                                <h2 className="">{item.label}</h2>
                                <p className="font-bold text-3xl -ml-4">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/2 h-full right"><Image src="/BackgroundImage.png" alt="CoffeLa Large Image" fill /></div>
            </div>
        </div>

    )
}