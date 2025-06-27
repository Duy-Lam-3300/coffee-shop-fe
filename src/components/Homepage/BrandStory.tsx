import { LeafyGreen, Palette, Coffee } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandStory() {
    const coffeeBean = "/bagofcoffeebean.jpg"
    const lightbulb = "/lightbulb.jpg"
    const glassOfCoffee = "/glassOfCoffee.jpg"
    const glassOfCoffee2 = "/glassOfCoffee2.jpg"

    const endHeader = ["Premium coffee beans",
        "Fresh coffee made daily",
        "Proprietary recipe"]
    return (

        <div className="max-w-7xl mx-auto px-8 md:px-0">
            <div className="md:flex items-end justify-between ">
                <div className="space-y-2 ">
                    <div className="italic">Brand Story</div>
                    <h2 className="font-bold text-2xl hidden md:block"> CoffeeLa – A Cup of Calm in a Bussy World</h2>
                    <Link href={"/"} className={` md:hidden block text-5xl font-bold  pt-1`}>CoffeLa</Link>
                    <p className='md:hidden text-lg'>A Cup of Calm in a Bussy World</p>
                </div>
                <div className="hidden md:flex gap-8 text-lg text-gray-700">
                    {endHeader.map((item, index) => (<p key={index}>{item}</p>))}
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-rows-2 grid-rows-[repeat(3,mminmax(0, 1fr) auto)] gap-5 mt-8">
                <div className="md:bg-[var(--main-color)] md:p-8 rounded-4xl text-black md:text-white not-md:col-span-3 not-md:row-start-4">
                    <div className="space-y-4">
                        <div className="flex gap-4 mb-4 items-end"><LeafyGreen className="border-2 p-1 rounded-full" size={40} />
                            <h2 className="text-xl font-semibold">A Gentle Pause in a Busy Life</h2>
                        </div>
                        <p>
                            Amidst the chaos of modern life, Coffeela offers a quiet space where you can slow down, breathe, and find calm — all within a single cup of coffee.
                        </p>
                    </div>
                </div>
                <div className="md:hidden md:bg-[var(--main-color)] md:p-8 rounded-4xl text-black md:text-white not-md:col-span-3 not-md:row-start-2">
                    <div className="space-y-4">
                        <div className="flex gap-4 mb-4 items-end"><Coffee className="border-2 p-1 rounded-full" size={40} />
                            <h2 className="text-xl font-semibold">Every drop is promise</h2>
                        </div>
                        <p>
                            At Coffeela, every cup begins with premium beans, freshly brewed each day using our signature recipe — because you deserve nothing less.
                        </p>
                    </div>
                </div>
                <div className=" rounded-2xl md:rounded-4xl  md:row-span-2 relative overflow-hidden not-md:col-span-3 not-md:h-[27vh]">
                    <Image src={coffeeBean} fill alt="coffe bean" />
                </div>
                <div className="rounded-2xl md:rounded-4xl  overflow-hidden relative not-md:col-span-3 not-md:h-[27vh] not-md:mt-8"><Image src={lightbulb} fill alt="coffe bean" /></div>
                <div className="flex justify-between items-center gap-4 not-md:col-span-3 not-md:h-[27vh] not-md:mt-8">
                    <div className="bg-[var(--main-color)] w-full h-full rounded-2xl md:rounded-4xl  overflow-hidden relative"><Image src={glassOfCoffee} fill alt="coffe bean" /></div>
                    <div className="bg-[var(--main-color)] w-full h-full rounded-2xl md:rounded-4xl  overflow-hidden relative"><Image src={glassOfCoffee2} fill alt="coffe bean" /></div>

                </div>

                <div className="md:bg-[var(--main-color)] md:p-8 rounded-4xl text-black md:text-white not-md:col-span-3 not-md:row-start-6">
                    <div className="space-y-4">
                        <div className="flex gap-4 mb-4 items-end"><Palette className="border-2 p-1 rounded-full" size={40} />
                            <h2 className="text-xl font-semibold">Elegance in Every Detail</h2>
                        </div>

                        <p>
                            With a refined black-and-white aesthetic, Coffeela is designed to invite calm, focus, and presence — every detail shaped with purpose.
                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}