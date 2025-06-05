
import { Product } from "@/types/product";
import ProductCard from "../ProductCard";


export default function ExploreProduct() {
    const sample: Product[] = [
        {
            _id: "680a0d6e4f4c13d4a72ffad3",
            name: "Coffee",
            price: 25,
            description: "",
            sizes: ["m", "l", "xl"],
            toppings: [],
            image: "https://res.cloudinary.com/ddhmn2yiq/image/upload/v1745743738/product/ahpwgdxx1vuvtftbumt7.png",
            categories: ["680a092233433e7c2b9e2fa0", "680a0bc1bf4b305b7153c445"],
            status: false,
            createdAt: "1745489262251",
            updatedAt: "1745489262251"
        },
        {
            _id: "680a0d6e4f4c13d4a72ffad4",
            name: "Coffee",
            price: 30,
            description: "",
            sizes: ["s", "m", "l"],
            toppings: [],
            image: "https://res.cloudinary.com/ddhmn2yiq/image/upload/v1745743738/product/ahpwgdxx1vuvtftbumt7.png",
            categories: ["680a092233433e7c2b9e2fa0", "680a0bc1bf4b305b7153c445"],
            status: true,
            createdAt: "1745489262251",
            updatedAt: "1745489262251"
        },
        {
            _id: "680a0d6e4f4c13d4a72ffad5",
            name: "Coffee",
            price: 30,
            description: "",
            sizes: ["s", "m", "l"],
            toppings: [],
            image: "https://res.cloudinary.com/ddhmn2yiq/image/upload/v1745743738/product/ahpwgdxx1vuvtftbumt7.png",
            categories: ["680a092233433e7c2b9e2fa0", "680a0bc1bf4b305b7153c445"],
            status: true,
            createdAt: "1745489262251",
            updatedAt: "1745489262251"
        },
        {
            _id: "680a0d6e4f4c13d4a72ffad6",
            name: "Coffee",
            price: 30,
            description: "",
            sizes: ["s", "m", "l"],
            toppings: [],
            image: "https://res.cloudinary.com/ddhmn2yiq/image/upload/v1745743738/product/ahpwgdxx1vuvtftbumt7.png",
            categories: ["680a092233433e7c2b9e2fa0", "680a0bc1bf4b305b7153c445"],
            status: true,
            createdAt: "1745489262251",
            updatedAt: "1745489262251"
        }
    ]
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