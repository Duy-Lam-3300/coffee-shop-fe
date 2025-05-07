"use client"

import productAPI from "@/lib/api/productApi"
import { Product } from "@/types/product";
import { useEffect, useState } from "react"


export default function product() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetching = async () => {
            const data = await productAPI.getAll();
            setProducts(data);
        }
        fetching();
    }, [])
    return (
        <div className="">

            <div className="">product here</div>
            {products.map((item,index) => (<div key={index}>
                {item.name}
            </div>))}
        </div>

    )
}