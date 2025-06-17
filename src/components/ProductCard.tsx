
import { Product } from "@/types/product";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";
import { Flame, Heart, ShoppingCart, X } from "lucide-react";


interface ProductCardProps {
    product: Product;
    openChooseProductTable: (e: React.MouseEvent<HTMLButtonElement>, product: Product) => void;
}


export function ProductCard({ product, openChooseProductTable }: ProductCardProps) {
    const totalPrice = (product.price).toFixed(2);


    return (
        <div className="bg-[var(--card-color)] select-none rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer hover:border-2 hover:border-black hover:-translate-y-2" onClick={() => window.alert("click")}>
            <div className="relative md:h-[17rem] h-72 w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain border-2 border-gray-300 rounded-md bg-[var(--image-background)]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
                <div className="absolute z-10 bg-white border-1 border-gray-300 top-3 left-3 pl-4 pr-3 py-1 rounded-2xl text-sm flex items-center"><p>Popular</p> <Flame className="text-red-500 pb-1" fill="pink" /></div>
                <div className="absolute z-10 top-3 right-3 cursor-pointer text-xl" onClick={(e) => { e.stopPropagation(); window.alert("heart") }}> <Heart className={`${false ? "text-red-500" : "text-black"}`} fill={false ? "red" : "white"} /></div>
            </div>

            <div className="pb-2 pt-8 md:pt-4">
                <div className="not-md:flex justify-between relative">
                    <div className="flex justify-between items-end">
                        <h3 className="text-2xl md:text-xl font-semibold text-gray-800">{product.name}</h3>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <span className="not-md:mr-4">~180 calo</span>
                        {!product.status ? (
                            <span className=" text-base md:text-xs bg-red-100 text-red-800 px-2 py-1 rounded  z-10 ">
                                Out of Stock
                            </span>
                        ) : (
                            <span className="text-black font-bold text-2xl md:text-xl ">${totalPrice}</span>
                        )}
                    </div>
                </div>

                <button
                    className={`mt-4 w-full relative py-3 md:py-2 rounded-md text-xl md:text-base font-medium transition-colors cursor-pointer ${product.status
                        ? 'bg-[var(--main-color)] hover:bg-[var(--accent-color)] text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                    onClick={(e) => openChooseProductTable(e, product)}
                >
                    <span>
                        <div className="flex gap-2 items-center justify-center">
                            <ShoppingCart />
                            {product.status ? 'Add to Cart' : 'Unavailable'}
                        </div>
                    </span>
                </button>
            </div>

        </div>
    )
}

interface ProductDetailCardProps {
    product: Product;
    isAnimating: string | null;
    handleAddProductToCart: (e: React.MouseEvent<HTMLButtonElement>, product: Product) => void;
    closeChooseProductTable: () => void;


}

export function ProductDetailCard({ product, isAnimating, handleAddProductToCart, closeChooseProductTable }: ProductDetailCardProps) {
    const sizes = ["xs", "md", "lg"];
    const toppings = [
        {
            name: "Lychee (4 pcs)",
            price: 20,
            currency: "$",
            quantity: 0
        },
        {
            name: "Konjac Jelly",
            price: 15,
            currency: "$",
            quantity: 0
        },
        {
            name: "Pineapple Palm Seed",
            price: 25,
            currency: "$",
            quantity: 0
        },
        {
            name: "Longan (4 pcs)",
            price: 20,
            currency: "$",
            quantity: 0
        },
        {
            name: "Camium Palm Seed",
            price: 25,
            currency: "$",
            quantity: 0
        }
    ];

    return (
        <div className="md:grid md:grid-cols-2 p-8 not-md:h-[100vh] not-md:w-[100vw] bg-white gap-8 border-2 border-gray-300 shadow-2xl md:rounded-lg relative not-md:space-y-4">
            <div onClick={closeChooseProductTable} className="absolute top-2 right-2 cursor-pointer">
                <X className="  text-gray-400 hover:text-black" strokeWidth={3} />
            </div>
            <div className="md:h-[28rem]">
                <div className="relative md:h-[25rem] h-72 w-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain border-2 border-gray-300 rounded-md bg-[var(--image-background)]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                    />
                    <div className="absolute z-10 bg-white border-1 border-gray-300 top-3 left-3 pl-4 pr-3 py-1 rounded-2xl text-sm flex items-center"><p>Popular</p> <Flame className="text-red-500 pb-1" fill="pink" /></div>
                    <div className="absolute z-10 top-3 right-3 cursor-pointer text-xl" onClick={(e) => { e.stopPropagation(); window.alert("heart") }}> <Heart className={`${false ? "text-red-500" : "text-black"}`} fill={false ? "red" : "white"} /></div>
                </div>
                <motion.button
                    className={`mt-4 w-full not-md:absolute not-md:bottom-0 not-md:left-0 relative py-3 md:py-2 rounded-md text-xl md:text-base font-medium transition-colors cursor-pointer ${product.status
                        ? 'bg-[var(--main-color)] hover:bg-[var(--accent-color)] text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                    whileTap={{ scale: 0.85 }}
                    disabled={!product.status}
                    onClick={(e) => handleAddProductToCart(e, product)}
                >
                    <motion.span
                        key={isAnimating == product._id ? "animate" : "static"}
                        animate={isAnimating == product._id ? { scale: [1, 1.4, 1], rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex gap-2 items-center justify-center">
                            <ShoppingCart />
                            <p>
                                {product.status ? `Add to Cart:${" " + "54$"}` : 'Unavailable'}
                            </p>

                        </div>
                    </motion.span>
                    <AnimatePresence>

                        {isAnimating == product._id && (
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: -20 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className="absolute -top-4 md:-right-2 not-md:left-1/2 not-md:-translate-x-[50%] w-fit text-[var(--main-color)] flex gap-1 font-bold text-xl not-md:text-3xl pointer-events-none"
                            >
                                <Coffee className="not-md:w-[2.25rem] not-md:h-[2.25rem] not-md:-translate-y-[0.1rem]" /> +1
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
            <div className="md:max-w-[20rem] md:w-[20rem] w-full not-md:space-y-4">
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="md:max-w-[20rem] text-wrap">Sweet and tasty Sweet and tasty  Sweet and tasty Sweet and tasty </p>
                <div className="flex justify-between items-center mt-2">
                    <div className="text-3xl text-black font-semibold">
                        {product.price}$
                    </div>
                    <div className=" text-black flex items-center text-base">
                        <div className="bg-[#323232] text-white  text-xl font-semibold w-6 h-6 not-md:w-8 not-md:h-8 cursor-pointer flex items-center justify-center">-</div>
                        <div className="w-8 h-6 not-md:w-8 not-md:h-8 not-md:text-xl bg-gray-200  flex items-center justify-center px-2">{1}</div>
                        <div className="bg-[#323232] text-white  text-xl font-semibold w-6 h-6 not-md:w-8 not-md:h-8 cursor-pointer flex items-center justify-center">+</div></div>
                </div>
                <div className="text-lg font-semibold mt-2 not-md:flex not-md:items-center not-md:justify-between">
                    <h2>Sizes</h2>
                    <div className="flex gap-4 md:mt-2">
                        {sizes.map((item, index) => (
                            <div className="border-[1.5px] rounded-sm md:w-[2.25rem] w-[4rem] md:h-[2rem] h-[2.5rem] items-center flex justify-center font-medium text-base cursor-pointer" key={index}>
                                <div className="">
                                    <label className="cursor-pointer">{item}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-lg not-md:text-xl font-semibold">Choose topping</h2>
                    <div className="flex flex-col gap-1 md:max-h-[13.5rem] max-h-[25rem]  overflow-auto not-md:mt-4">
                        {toppings.map((item, index) => (
                            <div key={index}>
                                <div className="grid grid-cols-3  items-center" >
                                    <div className="col-span-2">
                                        <h2 className="text-base not-md:text-lg  font-medium">{item.name}</h2>
                                        <p className="text-base not-md:text-lg  font-medium">{item.price + item.currency}</p>
                                    </div>
                                    <div className=" text-black flex items-center ">
                                        <div className="bg-[#323232] text-white  text-base font-semibold w-5 h-5 not-md:w-6 not-md:h-6 cursor-pointer flex items-center justify-center">-</div>
                                        <div className="w-8 h-5 not-md:w-7 not-md:h-6 not-md:text-lg bg-gray-200  flex items-center text-base justify-center px-2">{1}</div>
                                        <div className="bg-[#323232] text-white  text-base font-semibold w-5 h-5 not-md:w-6 not-md:h-6 cursor-pointer flex items-center justify-center">+</div>
                                    </div>
                                </div>
                                <hr className="text-gray-500 mb-1" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div >
    )
}