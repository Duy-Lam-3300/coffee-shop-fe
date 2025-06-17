'use client'
import { useAppDispatch } from "@/hooks/store";
import { RootState } from "@/redux/store";
import { removeFromCart, updateQuantity } from "@/redux/store/slice/cartSlice";
import { CartItem } from "@/types/cart";
import { CircleX, ShoppingCart, MapPin, Phone, Clock3, NotebookPen, Calculator, Store, Receipt } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux"

export default function CartPage() {

    const [agreeTerm, setAgreeTerm] = useState(false);
    const [shipTo, setShipTo] = useState(true);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    console.log(cartItems);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 0;
    const discount = 0;
    const totalAmount = subtotal + shippingFee - discount;

    const locationItem = shipTo ? {
        Icon: MapPin,
        label: "Ho Chi Minh",
        value: "Ho Chi Minh City, Vietnam",
    } : {
        Icon: Store,
        label: "CoffeLa district 4, Ho Chi Minh city",
        value:
            "Store Location: district 4. Ho Chi Minh city\n" +
            "Store Phone Number: 0327576730\n" +
            "Working time: 7:00 - 22:00\n" +
            "Status: working",
    }
    const timmingItem = shipTo ? {
        Icon: Clock3,
        label: "Time will ship to",
        value: "We are currently not delivering at the momment.",

    } : {
        Icon: Receipt,
        label: "Receipt Number: 301231",
        value: "Please present it to the staff to receive your order."
    }

    const shiptoInformation = [
        locationItem
        ,
        {
            Icon: Phone,
            label: "Nguyen Duy Lam",
            value: "Phone number: 0327576730",
        },
        timmingItem,
        {
            Icon: NotebookPen,
            label: "Description for shop",
            value: "Description: ",
        },
        {
            Icon: Calculator,
            label: "VAT invoice information",
            value: "Please refer to the instructions for issuing a VAT invoice (GTGT) using the paper receipt provided with your beverage.\n" +
                "If you do not receive a paper invoice, please contact our Customer Service Hotline at 0327576730 or reach out to our CoffeLa fanpage  between 8:00 AM – 5: 45 PM for assistance.",
        },
    ]
    const paymentInformation = [
        {
            label: 'Provisional Total',
            Value: () => { return (<p>{subtotal} $</p>) }
        },
        {
            label: 'Shipping Fee',
            Value: () => { return (<p>{shippingFee} $</p>) }
        },
        {
            label: 'Discount code',
            Value: () => { return (<p>{discount} $</p>) }
        },
        {
            label: 'Total Amount (Including VAT)',
            Value: () => { return (<p className="font-semibold text-lg">{totalAmount} $</p>) }
        },
    ]
    const paymentOption = [
        {
            label: 'Cash on Delivery (COD)',

        },
    ]


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
                                <div onClick={() => updateQuantityItem(id, -1, quantity)} className="bg-[#323232] text-white  text-xl font-semibold w-6 h-6 cursor-pointer flex items-center justify-center">-</div>
                                <div className="w-8 h-6 bg-gray-200  flex items-center justify-center px-2">{quantity}</div>
                                <div onClick={() => updateQuantityItem(id, 1, quantity)} className="bg-[#323232] text-white  text-xl font-semibold w-6 h-6 cursor-pointer flex items-center justify-center">+</div></div>
                        </div>
                    </div>

                </div>
                <hr className="text-gray-400 my-4" />
            </>
        )
    }

    return (
        <div className="w-full md:py-10 select-none">
            <div className="max-w-7xl md:flex mx-auto justify-between gap-8">
                <div className={`w-full overflow-hidden bg-white border-black md:border-2 transition-all ${shipTo?"not-md:h-[19rem]":"not-md:h-[23rem]"} rounded-xl py-2`}>
                    <header className="  px-4 pt-2 flex">
                        <button className={`w-full cursor-pointer text-lg font-medium pb-2 hover:text-xl hover:font-semibold ${shipTo ? "border-black border-b-2 font-semibold text-xl" : "border-gray-300 border-b-1 text-gray-400"}`} onClick={() => setShipTo(true)}>Ship to</button>
                        <button className={`w-full cursor-pointer text-lg font-medium pb-2 hover:text-xl hover:font-semibold ${!shipTo ? "border-black border-b-2 font-semibold text-xl" : "border-gray-300 border-b-1 text-gray-400"}`} onClick={() => setShipTo(false)}>Take out</button>
                    </header>
                    <div className="px-4 pt-4 mb-2 mt-2">
                        <ul className="space-y-6">
                            {shiptoInformation.map((item, index) => (
                                <li className={`flex gap-4 items-start`} key={index}>
                                    <item.Icon className="w-8 min-w-8 h-8" />
                                    <div className="w-fit">
                                        <h2 className="text-lg font-semibold">{item.label}</h2>
                                        <div>{item.value.split("\n").length > 1 ? item.value.split("\n").map((val, index) => (
                                            <p key={index}>-    {val}</p>
                                        )) : item.value.split("\n").map((val, index) => (
                                            <p key={index}>{val}</p>
                                        ))}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full overflow-hidden border-black md:border-2 border-t-2 md:rounded-lg py-2 px-4 bg-white">
                    <header className="border-b-1 border-gray-300  py-2 flex gap-2 items-center">
                        <ShoppingCart strokeWidth={2.8} />
                        <p className="font-semibold text-xl text-end">Your cart {"(" + cartItems?.length + " items)"}</p>
                    </header>
                    <div className=" pt-4 mb-2 max-h-[25rem] overflow-auto border-b-1 border-gray-300">
                        {cartItems.length > 0 ? cartItems?.map((item, index) => (
                            <div className="" key={index}>
                                <ItemOnCart {...item} />
                            </div>
                        )) : <div>
                            <p>No items in the cart</p>
                        </div>}
                    </div>
                    <div className=" space-y-4 py-4">
                        <div className="space-y-2 ">
                            <header className=" text-lg font-semibold">
                                Payment Information
                            </header>
                            {paymentInformation.map((item, index) => (

                                <div className="flex justify-between" key={index}>
                                    <h2>{item.label}</h2>
                                    <item.Value />
                                </div>
                            ))}
                        </div>
                        <div className=" md:hidden">
                            <ul className="space-y-6">
                                {shiptoInformation.slice(3).map((item, index) => (
                                    <li className={`flex items-start `} key={index}>
                                        {/* <item.Icon className="w-8 min-w-8 h-8" /> */}
                                        <div className="w-fit space-y-2">
                                            <h2 className="text-lg font-semibold">{item.label}</h2>
                                            <div className="space-y-2">{item.value.split("\n").length > 1 ? item.value.split("\n").map((val, index) => (
                                                <p key={index}>-    {val}</p>
                                            )) : item.value.split("\n").map((val, index) => (
                                                <p key={index}>{val}</p>
                                            ))}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-2 ">
                            <header className=" text-lg font-semibold">
                                Payment Methods
                            </header>
                            {paymentOption.map((item, index) => (

                                <div className="space-x-2" key={index}>
                                    <input className="cursor-pointer" type="radio" value={item.label} id={item.label} />
                                    <label htmlFor={item.label} className="cursor-pointer">{item.label}</label>
                                </div>
                            ))}
                        </div>
                        <div className="space-x-2">
                            <input className="cursor-pointer" type="checkbox" id="checkbox" onChange={() => setAgreeTerm((prev) => !prev)} />
                            <label htmlFor="checkbox" className="cursor-pointer">I have read, understood, and agree to all related term, conditions, and policies.</label>
                        </div>
                    </div>
                    <button className={`${agreeTerm ? "bg-[#323232] hover:bg-[#515050] text-white font-semibold cursor-pointer" : "text-[#909192] bg-gray-200 cursor-not-allowed"} w-full  h-[3rem] rounded-md mb-2`}>PROCEED TO PAYMENT</button>

                </div>
            </div>
        </div>
    )
}