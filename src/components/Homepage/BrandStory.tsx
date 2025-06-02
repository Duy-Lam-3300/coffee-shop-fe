import { LeafyGreen, Palette } from 'lucide-react';
import Image from 'next/image';

export default function BrandStory() {
    const coffeeBean = "/bagofcoffeebean.jpg"
    const lightbulb = "/lightbulb.jpg"
    const glassOfCoffee = "/glassOfCoffee.jpg"
    const glassOfCoffee2 = "/glassOfCoffee2.jpg"

    const endHeader = ["Premium coffee beans",
        "Fresh coffee made daily",
        "Proprietary recipe"]
    return (

        <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between">

                <div className="space-y-2">
                    <div className="italic">Brand Story</div>
                    <h2 className="font-bold text-2xl"> Coffeela – A Cup of Calm in a Chaotic World</h2>
                </div>
                <div className="flex gap-8 text-lg text-gray-700">
                    {endHeader.map((item, index) => (<p key={index}>{item}</p>))}
                </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-5 mt-8">
                <div className="bg-[var(--main-color)] p-8 rounded-4xl text-white">
                    <div className="space-y-4">
                        <div className="flex gap-4 mb-4 items-end"><LeafyGreen className="border-2 p-1 rounded-full" size={40} />
                            <h2 className="text-xl font-semibold">A Gentle Pause in a Busy Life</h2>
                        </div>
                        <p>
                            In the rush of modern life, Coffeela offers a quiet space where you can truly unwind with just one cup of coffee.
                        </p>
                    </div>
                </div>
                <div className=" rounded-4xl row-span-2 relative overflow-hidden"><Image src={coffeeBean} fill alt="coffe bean" /></div>
                <div className="rounded-4xl overflow-hidden relative"><Image src={lightbulb} fill alt="coffe bean" /></div>
                <div className="bg-[var(--main-color)] p-8 rounded-4xl text-white">
                    <div className="space-y-4">
                        <div className="flex gap-4 mb-4 items-end"><Palette className="border-2 p-1 rounded-full" size={40} />
                            <h2 className="text-xl font-semibold">Elegance in Every Detail</h2>
                        </div>

                        <p>
                            With a black-and-white minimalist style, our café invites you to pause, breathe, and enjoy a moment of calm made just for you.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <div className="bg-[var(--main-color)] w-full h-full rounded-4xl overflow-hidden relative"><Image src={glassOfCoffee} fill alt="coffe bean" /></div>
                    <div className="bg-[var(--main-color)] w-full h-full rounded-4xl overflow-hidden relative"><Image src={glassOfCoffee2} fill alt="coffe bean" /></div>

                </div>

            </div>
        </div>

    )
}