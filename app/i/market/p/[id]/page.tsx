// Server Component
import { getProduct } from "@/services/marketplace.product";

export default async function Product({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  const currency = "$"

  return (
    <div className="p-4 w-full flex justify-center items-center">
      {product ? (
        <div className="border w-10/12 md:flex rounded-xl gap-4 p-4">
            <img src={product.image} alt={product.name} className="w-full rounded-xl max-w-[500px] h-auto" />
            <div className="w-full">
                <p className="font-medium">{product.description}</p>
                <p> {currency}{product.price}</p>
                <p>Type: {product.type}</p>
                <span className="flex gap-2">
                    <button className="outline_btn">Add to cart</button>
                    <button className="outline_btn">Buy Now</button>
                </span>
                
            </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
