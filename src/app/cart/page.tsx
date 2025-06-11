'use client'
import { useAppDispatch } from "@/hooks/store";
import { RootState } from "@/redux/store";
import { removeFromCart, updateQuantity } from "@/redux/store/slice/cartSlice";
import { CartItem } from "@/types/cart";
import { CircleX, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux"

export default function CartPage() {


    const cartItems = useSelector((state: RootState) => state.cart.items);
    console.log(cartItems);


    function ItemOnCart({ id, name, img, quantity, price, description }: CartItem) {
        const dispatch = useAppDispatch();

        const handleRemoveItem = (id: string) => {
            dispatch(removeFromCart(id));
        }
        const updateQuantityItem = (id: string, numberUpdate: number, quantity: number) => {
            const newQuantity = quantity + numberUpdate;
            if (numberUpdate == -1 && quantity == 1) return;
            dispatch(updateQuantity({ id, quantity: newQuantity }));
        }
        return (
            <>
                <div className="flex gap-2">
                    <div className="min-w-[8rem] h-[8rem] relative ">
                        <Image src={img || "/logoMobile.png"} alt="product" fill className="rounded-md border-2 border-gray-400" />
                    </div>
                    <div className="flex flex-col">

                        <div className="flex justify-between items-start mt-1">
                            <span className="text-xl font-semibold">{name}</span>
                            <CircleX className="cursor-pointer" onClick={() => handleRemoveItem(id)} />
                        </div>
                        <div className="text-sm ">
                            {description}
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="text-xl text-black font-semibold">
                                {price}$
                            </div>
                            <div className=" text-black flex items-center text-base">
                                <div onClick={() => updateQuantityItem(id, -1, quantity)} className="bg-red-500  text-white  text-xl font-semibold w-6 h-6 cursor-pointer flex items-center justify-center">-</div>
                                <div className="w-8 h-6 bg-gray-200  flex items-center justify-center px-2">{quantity}</div>
                                <div onClick={() => updateQuantityItem(id, 1, quantity)} className="bg-green-500 text-white  text-xl font-semibold w-6 h-6 cursor-pointer flex items-center justify-center">+</div></div>
                        </div>
                    </div>

                </div>
                <hr className="text-gray-400 my-4" />
            </>
        )
    }

    return (
        <div className="w-full py-10 select-none">
            <div className="max-w-7xl flex mx-auto justify-between gap-8">
                <div className="w-full overflow-hidden border-black border-2 rounded-lg py-2">
                    <header className="border-b-1 border-gray-300 px-4 py-2">
                        <p>Your cart</p>
                    </header>
                    <div className="px-4 pt-4 mb-2">
                        2
                    </div>
                </div>
                <div className="w-full overflow-hidden border-black border-2 rounded-lg py-2">
                    <header className="border-b-1 border-gray-300 px-4 py-2 flex gap-2 items-center">
                        <ShoppingCart strokeWidth={2.8} />
                        <p className="font-semibold text-xl text-end">Your cart {"(" + cartItems?.length + " items)"}</p>
                    </header>
                    <div className="px-4 pt-4 mb-2">
                        {cartItems.length>0? cartItems?.map((item, index) => (
                            <div className="" key={index}>
                                <ItemOnCart {...item} />
                            </div>
                        )):<div>
                            <p>No items in the cart</p>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}