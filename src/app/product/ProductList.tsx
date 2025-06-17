"use client"

import { ProductCard, ProductDetailCard } from "@/components/ProductCard";
// import productAPI from "@/lib/api/productApi"
import { Product } from "@/types/product";
import { useMemo, useRef, useState } from "react"


import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useCartServices } from "@/hooks/services/useCartServices";

// import { Dancing_Script } from "next/font/google";
// const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });


const drinkTypes = [
    {
        type: "Popular",
        categories: ["Coffees", "Milk Teas", "Fruit Teas", "Juice"]
    },
    {
        type: "Coffees",
        categories: ["Latte", "Cold Brew", "Espresso", "Macchiato"]
    },
    {
        type: "Milk Teas",
        categories: ["Original", "Matcha", "Thai", "Brown Sugar"]
    },
    {
        type: "Fruit Teas",
        categories: ["Peach", "Passion", "Berry", "Lemon"]
    }
];

interface CartForm {
    choosenSize: string | null;
}



export default function ProductList() {
    // const [products, setProducts] = useState<Product[]>([]);
    const sample: Product[] = [
        ...Array.from({ length: 30 }, (_, i) => {
            const categoryOptions = ["Coffee", "Latte", "Milk Tea", "Espresso", "Mocha", "Macchiato", "Cold Brew"];
            const randomCategories = [
                categoryOptions[i % categoryOptions.length],
                categoryOptions[(i + 2) % categoryOptions.length]
            ];

            return {
                _id: `680a0d6e4f4c13d4a72ffb${100 + i}`,
                name: `Coffee ${i + 1}`,
                price: 25 + (i % 5) * 5,
                description: "Kích cỡ: M, Ngọt: Bình thường, Trà: Bình thường, Đá: Bình thường, Topping: Topping Vải (4 trái) x 1,Bánh Flan Phúc Long x 1",
                sizes: i % 3 === 0 ? ["s", "m"] : i % 3 === 1 ? ["m", "l"] : ["l", "xl"],
                toppings: [],
                image: "https://res.cloudinary.com/ddhmn2yiq/image/upload/v1749399198/product/blackcoffee_jkql5f.png",
                categories: randomCategories,
                status: i % 4 !== 0,
                createdAt: "1745489262251",
                updatedAt: "1745489262251"
            };
        })
    ];


    const searchParams = useSearchParams();
    const router = useRouter();

    const currentType = searchParams.get('type') || drinkTypes[0].type;
    const currentCategory = searchParams.get('cat') || drinkTypes[0].categories[0];

    const selectedType = useMemo(() => {
        return drinkTypes.find((d) => d.type === currentType) || drinkTypes[0]
    }, [currentType]);

    const handleTypeChange = (type: string) => {
        const url = `?type=${type}&cat=${drinkTypes.find(d => d.type === type)?.categories[0]}`;
        router.push(url);
    }

    const handleCategoryChange = (cat: string) => {
        const url = `?type=${currentType}&cat=${cat}`;
        router.push(url);
    }


    //product
    const [openAddItemCart, setOpenAddItemCart] = useState(false)

    const [choosenProduct, setChoosenProduct] = useState<Product | undefined>();

    const [isAnimating, setIsAnimating] = useState<string | null>(null);

    const productDetailCardTable = useRef<HTMLDivElement>(null);
    const { addProductToCart } = useCartServices();

    const handleAddProductToCart = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
        e.stopPropagation();
        if (!product) {
            console.warn("Chưa có sản phẩm được chọn");
            return;
        }
        addProductToCart({ ...product });
        setIsAnimating(product._id);

        setTimeout(() => {
            setIsAnimating(null)
        }, 600);
    }

    const openChooseProductTable = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
        e.stopPropagation();
        setOpenAddItemCart(true);
        setChoosenProduct(product)

    }

    const closeChooseProductTable = () => {
        setOpenAddItemCart(false)

    }
    const closeChooseProductTableOutSide = (e: React.MouseEvent<HTMLElement>) => {
        if (productDetailCardTable.current && !productDetailCardTable.current.contains(e.target as Node)) {
            closeChooseProductTable();
        }
    }

    // useEffect(() => {
    //     const fetching = async () => {
    //         const data = await productAPI.getAll();
    //         setProducts(data);
    //     }
    //     fetching();
    // }, [])
    return (
        <div className={`py-0 md:py-8 bg-white`}>
            <div className="max-w-7xl mx-auto ">
                <div className="grid grid-row-2">
                    <div className="flex gap-8  not-md:px-8 not-md:row-start-2 not-md:mb-8 not-md:mt-4 text-xl mb-3">
                        {drinkTypes.map((type) => (
                            <button
                                key={type.type}
                                onClick={() => handleTypeChange(type.type)}
                                className={`cursor-pointer ${type.type === currentType ? "text-black font-semibold border-b-2" : "text-gray-400"
                                    }`}
                            >
                                {type.type}
                            </button>
                        ))}
                    </div>

                    <div className="w-full h-[38vh] md:h-[65vh] mb-5 md:mt-4  right relative md:rounded-2xl overflow-hidden md:border-2 border-gray-200"><Image src="/productBackground.png" alt="CoffeLa Large Image" fill /></div>
                </div>


                <div className="flex gap-8 gap-y-4  not-md:px-9 text-xl mt-2 flex-wrap">
                    {selectedType.categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`cursor-pointer ${cat === currentCategory ? "text-white bg-[#323232] px-4 py-1 rounded-2xl font-semibold" : "text-gray-400"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="gap-12 my-8">
                    <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 w-full  not-md:px-8">
                        {sample.map((product) => (
                            <ProductCard key={product._id} product={product} openChooseProductTable={openChooseProductTable} isAnimating={isAnimating} />
                        ))}
                    </div>
                </div>
            </div>
            {openAddItemCart && choosenProduct && (
                <div className=" inset-0 fixed z-50 flex items-center justify-center bg-[#00000080] " onClick={closeChooseProductTableOutSide}>
                    <div ref={productDetailCardTable}>
                        <ProductDetailCard product={choosenProduct} isAnimating={isAnimating} handleAddProductToCart={handleAddProductToCart} closeChooseProductTable={closeChooseProductTable} />
                    </div>
                </div>
            )}

        </div>

    )
}