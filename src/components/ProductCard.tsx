'use client'
import { useAppDispatch } from "@/hooks/store";
import { addToCart } from "@/redux/store/slice/cartSlice";
import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";

interface ProductCardProps {
    product: Product
}

interface CartForm {
    choosenSize: string | null;
}


export default function ProductCard({ product }: ProductCardProps) {
    const [cartForm, setCartForm] = useState<CartForm>({
        choosenSize: product ? product.sizes[0] : null,
    });
    const [isAnimating, setIsAnimating] = useState(false);
    const sizeIndex = product.sizes.indexOf(cartForm.choosenSize || "");
    const extraCharge = sizeIndex >= 0 ? (product.price * (sizeIndex * sizeIndex * 0.4)) : 0;
    const totalPrice = (product.price + extraCharge).toFixed(2);

    const dispatch = useAppDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({ id: product._id, name: product.name, price: product.price, quantity: 1,img:product.image }))
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false)
        }, 600);
    }
    return (
        <div className="bg-[var(--card-color)] rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
            <div className="relative md:h-48 h-72 w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover border-2 border-gray-300 rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
            </div>

            <div className="pb-2 pt-8 md:pt-4">
                <div className="not-md:flex justify-between relative">
                    <h3 className="text-2xl md:text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-amber-700 font-bold text-xl md:text-base">${totalPrice}</span>
                        {!product.status && (
                            <span className="text-base md:text-xs bg-red-100 text-red-800 px-2 py-1 rounded not-md:absolute not-md:w-fit not-md:top-0 not-md:right-0">
                                Out of Stock
                            </span>
                        )}
                    </div>
                </div>
                <div className="not-md:hidden">

                    {product.sizes.length > 0 && (
                        <div className="mb-2">
                            <p className="text-sm text-gray-600 mb-1">Sizes:</p>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map(size => (
                                    <button onClick={() => setCartForm((prev) => ({ ...prev, choosenSize: size }))} key={size} className={`text-xs cursor-pointer  px-2 py-1 rounded ${size == cartForm.choosenSize ? "bg-[var(--main-color)] text-white font-semibold" : "bg-gray-100 hover:bg-[var(--lighter-main-color)] hover:font-bold"}`}>
                                        {size.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.toppings.length > 0 && (
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Toppings:</p>
                            <div className="flex flex-wrap gap-2">
                                {product.toppings.slice(0, 3).map(topping => (
                                    <span key={topping} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                                        {topping}
                                    </span>
                                ))}
                                {product.toppings.length > 3 && (
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        +{product.toppings.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <motion.button
                    className={`mt-4 w-full relative py-3 md:py-2 rounded-md text-xl md:text-base font-medium transition-colors cursor-pointer ${product.status
                        ? 'bg-[var(--main-color)] hover:bg-[var(--accent-color)] text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                    whileTap={{ scale: 0.85 }}
                    disabled={!product.status}
                    onClick={handleAddToCart}
                >
                    <motion.span
                        key={isAnimating ? "animate" : "static"}
                        animate={isAnimating ? { scale: [1, 1.4, 1], rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        {product.status ? 'Add to Cart' : 'Unavailable'}
                    </motion.span>
                    <AnimatePresence>

                        {isAnimating && (
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: -20 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className="absolute -top-4 md:-right-2 not-md:left-1/2 not-md:-translate-x-[50%] w-fit text-[var(--main-color)] flex gap-1 font-bold text-xl not-md:text-3xl pointer-events-none"
                            >
                                <Coffee className="not-md:w-[2.25rem] not-md:h-[2.25rem] not-md:-translate-y-[0.1rem]"/> +1
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </div>
    )
}