import React from "react";
import { iProduct } from "@/app/i/market/page";
import Link from "next/link";

interface ProductCardProps {
  product: iProduct;
}

export default function ProductCard(props: ProductCardProps) {
  const product = props.product
  return (
    <div className="w-full border rounded-lg shadow-lg overflow-hidden bg-white">
      <img
        src={product.image || "https://via.placeholder.com/300x200"} // Fallback if no image is provided
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Link href={`/i/market/p/${product._id}`}>
          <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        
        </Link><p className="text-slate-600 text-sm mt-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-purple-600">${product.price}</span>
          <button className="px-4 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
