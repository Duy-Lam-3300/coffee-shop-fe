
import { Product } from "@/types/product";
import {ProductCard} from "../ProductCard";


export default function ExploreProduct() {
    const sample: Product[] = [
        ...Array.from({ length: 8 }, (_, i) => ({
            _id: `680a0d6e4f4c13d4a72ffb${100 + i}`,
            name: `Coffee ${i + 1}`,
            price: 25 + (i % 5) * 5,
            description: "",
            sizes: i % 3 === 0 ? ["s", "m"] : i % 3 === 1 ? ["m", "l"] : ["l", "xl"],
            toppings: [],
            image: "https://res.cloudinary.com/ddhmn2yiq/image/upload/v1745743738/product/ahpwgdxx1vuvtftbumt7.png",
            categories: ["680a092233433e7c2b9e2fa0", "680a0bc1bf4b305b7153c445"],
            status: i % 4 !== 0, // every 4th product is unavailable
            createdAt: "1745489262251",
            updatedAt: "1745489262251"
        }))
    ];


    return (
        <div className="pb-8">
            <div className="max-w-7xl mx-auto ">
                <div className="max-w-7xl mx-auto not-md:px-8">
                    <div className="space-y-2">
                        <div className="italic">Best Seller</div>
                        <h2 className="font-bold text-2xl"> Our most popular drink</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 w-full my-10 not-md:px-8">
                    {sample.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>

        </div>
    );
}

