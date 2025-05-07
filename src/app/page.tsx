import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto w-full h-[65vh] gap-16">
      <div className="w-1/2  left my-auto">
        <h1 className="text-8xl font-extrabold my-4 bg-clip-text text-[transparent] bg-[linear-gradient(90deg,rgba(181,124,0,1)_0%,rgba(145,66,9,1)_66%,rgba(122,64,6,1)_100%)]">COFFELA</h1>
        <div className="">
          <p className="font-bold text-3xl">An online coffe store</p>
          <p className="font-semibold italic text-xl">Your Coffee. Your Way. Anytime. Anywhere.</p>
          <p className="my-4">Whether you’re starting your morning hustle or savoring a quiet evening, Coffela is here to serve moments that matter. Join thousands of happy coffee lovers who’ve made the switch to better, fresher, and more personalized coffee.</p>
        </div>
        <div className="flex gap-20 items-center my-8">
          <button className="bg-[#7A4006] text-white p-2 px-4 rounded-xl font-semibold cursor-pointer">Explore more {">"}</button>
          <Link href="" className="underline underline-offset-4  px-4 py-2 font-semibold cursor-pointer">Login / Signup</Link>
        </div>
        <div className="flex gap-20">
          <div className="justify-center flex flex-col items-center">
            <h2 className="">Our products</h2>
            <p className="font-bold text-3xl -ml-4">+100</p>
          </div>
          <div className="justify-center flex flex-col items-center">
            <h2 className="">Total sales</h2>
            <p className="font-bold text-3xl -ml-4">+20k</p>
          </div>
          <div className="justify-center flex flex-col items-center">
            <h2 className="">Total orders</h2>
            <p className="font-bold text-3xl -ml-4">+20k</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full right">right</div>
    </div>
  );
}
