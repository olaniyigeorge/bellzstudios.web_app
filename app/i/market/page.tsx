import React from "react";
import ProductCard from "@/components/product-card";
import HeroSection from "@/components/hero-section";

export interface iProduct {
    _id: string;
    owner: string;
    name: string;
    image: string;
    price: string;
    type: "physical" | "service" | "digital" | "food";
    description: string;
    created_at: string;
    updated_at: string;
  }




export default async function MarketLanding() {
  const products = await getProducts()
  return (
  <div className="w-full my-3 flex flex-col items-center gap-5">
        <HeroSection 
            message={"Join a community of creators and entrepreneurs."} 
            image={"/assets/images/bellzstudio.png"}
          />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* Contact Section */}
        <div
          id="contact-us"
          className="w-full  max-w-4xl my-5 p-6 bg-purple-500 glassmorphism shadow-lg rounded-lg border"
        >
          <h2 className="text-xl font-medium text-purple-600">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            If you have any questions or suggestions on how to make the app better, feel free to reach out to us:
          </p>
          <ul className="mt-4 space-y-2">
            <li>Email: <a href="mailto:olaniyigeorge77@gmail.com" className="text-purple-700 hover:underline">olaniyigeorge77@gmail.com</a></li>
            <li>Phone: <a href="tel:+2349037018310" className="text-purple-700 hover:underline">+234 903 7018 310</a></li>
            <li>Address: Akure, Ondo State, Nigeria</li>
          </ul>
        </div>

  </div>
  );
}



async function getProducts(): Promise<iProduct[]> {
  const res = await fetch(`${process.env.DOMAIN}/api/marketplace/products`, {
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