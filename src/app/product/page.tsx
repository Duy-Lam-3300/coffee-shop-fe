import ProductList from "./ProductList";
import { Suspense } from 'react'

export default function ProductPage() {
    return (<div>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
        </Suspense>
    </div>)
}