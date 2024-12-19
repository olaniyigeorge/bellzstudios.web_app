import ProductCard from '@/components/product-card'
import { iProduct } from '../page';
import HeroSection from '@/components/hero-section';

export default async function ShopPage() {

    const products: iProduct[] = await getProducts();


    return (
        <div className="w-full my-3 flex flex-col items-center gap-5 p-2 md:p-4">
            <HeroSection 
                message={"Shop your favorites products and services."} 
                image={"/assets/images/buy-sell.png"}
            />
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
            </div>

        </div>

    )
}




async function getProducts(): Promise<iProduct[]> {
    const res = await fetch(`${process.env.DOMAIN}/api/products`, {
        method: "GET",
    });

    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        console.error(`Error: ${res.status}`);
        return []
    }
}