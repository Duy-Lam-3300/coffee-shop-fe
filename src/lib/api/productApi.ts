import axiosClient from "../axios";
import { Product } from "@/types/product";

const productAPI = {
    async getAll(): Promise<Product[]> {
        const res = await axiosClient.get("/product");
        return res.data
    }
}

export default productAPI;