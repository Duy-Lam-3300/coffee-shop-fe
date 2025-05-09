import Image from "next/image"
import Link from "next/link"

export default function AboveTheFold() {
    const information = {
        appName: "COFFELA",
        supportDefinition: "An online coffe store",
        mainHeadline: "Your Coffee. Your Way. Anytime. Anywhere.",
        supportHeadline: "Whether you’re starting your morning hustle or savoring a quiet evening, Coffela is here to serve moments that matter. Join thousands of happy coffee lovers who’ve made the switch to better, fresher, and more personalized coffee.",
        salesSummaries: [
            { label: "Our products", value: "+100" },
            { label: "Total sales", value: "+20k" },
            { label: "Total orders", value: "+20k" },
        ]
    }
    return (
        <div className="bg-[var(--background-CoffeLa-Large-Image)]">
            <div className="flex justify-between items-center mx-auto max-w-7xl h-[65vh] gap-16 relative">
                <div className="w-1/2  left my-auto z-10">
                    <h1 className={`text-8xl font-extrabold my-4 bg-clip-text text-[transparent] 
                    bg-[linear-gradient(90deg,rgba(181,124,0,1)_0%,rgba(145,66,9,1)_66%,rgba(122,64,6,1)_100%)]`}>{information.appName}</h1>
                    {/* <h1 className={`text-8xl font-extrabold my-4 bg-clip-text text-[transparent] 
                    bg-black`}>{information.appName}</h1> */}
                    <div className="">
                        <p className="font-bold text-3xl">{information.supportDefinition}</p>
                        <p className="font-semibold italic text-xl">{information.mainHeadline}</p>
                        <p className="my-4">{information.supportHeadline}</p>
                    </div>
                    <div className="flex gap-20 items-center my-8">
                        <button className="bg-[linear-gradient(90deg,rgba(181,124,0,1)_0%,rgba(145,66,9,1)_96%,rgba(122,64,6,1)_100%)] 
                        bg-[length:200%_100%] bg-left hover:bg-right 
                        transition-all ease-in-out
                        text-white p-2 px-4 rounded-xl font-semibold cursor-pointer">
                            Explore more {">"}</button>
                        <Link href="" className="underline underline-offset-4  px-4 py-2 font-semibold cursor-pointer">Login / Signup</Link>
                    </div>
                    <div className="flex gap-20">
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