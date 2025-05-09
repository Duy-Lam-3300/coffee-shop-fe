"use client"
import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";

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
    const sizeIndex = product.sizes.indexOf(cartForm.choosenSize || "");
    const extraCharge = sizeIndex >= 0 ? (product.price * (sizeIndex*sizeIndex * 0.4)) : 0;
    const totalPrice = (product.price + extraCharge).toFixed(2);

    return (
        <div className="bg-[var(--card-color)] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
            <div className="relative h-48 w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>

                <div className="flex justify-between items-center mb-2">
                    <span className="text-amber-700 font-bold">${totalPrice}</span>
                    {!product.status && (
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                            Out of Stock
                        </span>
                    )}
                </div>

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

                <button
                    className={`mt-4 w-full py-2 rounded-md font-medium transition-colors cursor-pointer ${product.status
                        ? 'bg-[var(--main-color)] hover:bg-[var(--accent-color)] text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                    disabled={!product.status}
                >
                    {product.status ? 'Add to Cart' : 'Unavailable'}
                </button>
            </div>
        </div>
    )
}