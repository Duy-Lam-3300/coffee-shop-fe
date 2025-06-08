"use client"

import { DetailProductCard } from "@/components/ProductCard";
// import productAPI from "@/lib/api/productApi"
import { Product } from "@/types/product";
import {  useMemo } from "react"


import { useSearchParams, useRouter } from "next/navigation";

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
                description: "",
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
    const currentCategory = searchParams.get('cat')

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


    // useEffect(() => {
    //     const fetching = async () => {
    //         const data = await productAPI.getAll();
    //         setProducts(data);
    //     }
    //     fetching();
    // }, [])
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto ">
                <div className="">
                    <h2>s</h2>
                    {/* <h2 className={`font-bold text-5xl ${dancingScript.className}    `}>Products</h2> */}
                </div>
                <div className="flex gap-8">
                    {drinkTypes.map((type) => (
                        <button
                            key={type.type}
                            onClick={() => handleTypeChange(type.type)}
                            className={` ${type.type === currentType ? "text-black font-semibold border-b-2" : "text-gray-400"
                                }`}
                        >
                            {type.type}
                        </button>
                    ))}
                </div>
                <div className="flex gap-8">
                    {selectedType.categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={` ${cat === currentCategory ? "text-black bg-gray-200 px-4 py-2 rounded-4xl font-semibold" : "text-gray-400"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="gap-12 my-12">
                    <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 w-full not-md:px-8">
                        {sample.map((product) => (
                            <DetailProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}