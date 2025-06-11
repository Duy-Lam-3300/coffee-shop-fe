
import { useAppDispatch } from "@/hooks/store";
import { addToCart } from "@/redux/store/slice/cartSlice";
import { Product } from "@/types/product";

export function useCartServices() {
    const dispatch = useAppDispatch();

    const addProductToCart = (product: Product) => {
        dispatch(addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            quantity: 1,
            img: product.image,
            description: product.description
        }));
    };
    return { addProductToCart };
}