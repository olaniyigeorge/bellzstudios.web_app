import ProductCard from '@/components/product-card'
import { iProduct } from '../page';

export default async function ShopPage() {

    const products: iProduct[] = await getProducts();


    return (
  
          <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
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