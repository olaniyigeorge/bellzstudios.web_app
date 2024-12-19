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
  const PRODUCTS: iProduct[] = [
    {
      _id: "1",
      owner: "63fbc2df8b82f12345678901",
      name: "Wireless Mouse",
      image: "https://via.placeholder.com/150?text=Wireless+Mouse",
      price: "29.99",
      type: "physical",
      description: "A high-precision wireless mouse with ergonomic design.",
      created_at: "2024-12-01T10:00:00Z",
      updated_at: "2024-12-15T15:30:00Z",
    },
    {
      _id: "2",
      owner: "63fbc2df8b82f12345678902",
      name: "Yoga className Subscription",
      image: "https://via.placeholder.com/150?text=Yoga+className",
      price: "49.99",
      type: "service",
      description: "Monthly subscription for unlimited yoga classes.",
      created_at: "2024-11-20T09:00:00Z",
      updated_at: "2024-12-10T12:00:00Z",
    },
    {
      _id: "3",
      owner: "63fbc2df8b82f12345678903",
      name: "E-book: JavaScript Essentials",
      image: "https://via.placeholder.com/150?text=JavaScript+E-book",
      price: "19.99",
      type: "digital",
      description: "An in-depth guide to mastering JavaScript.",
      created_at: "2024-10-05T14:00:00Z",
      updated_at: "2024-11-01T10:00:00Z",
    },
    {
      _id: "4",
      owner: "63fbc2df8b82f12345678904",
      name: "Vegan Meal Plan",
      image: "https://via.placeholder.com/150?text=Vegan+Meal+Plan",
      price: "99.99",
      type: "food",
      description: "A 7-day vegan meal plan with recipes and ingredients.",
      created_at: "2024-12-01T08:00:00Z",
      updated_at: "2024-12-15T18:30:00Z",
    },
    {
      _id: "5",
      owner: "63fbc2df8b82f12345678905",
      name: "Fitness Coaching",
      image: "https://via.placeholder.com/150?text=Fitness+Coaching",
      price: "199.99",
      type: "service",
      description: "Personalized fitness coaching sessions for one month.",
      created_at: "2024-11-25T07:00:00Z",
      updated_at: "2024-12-16T14:00:00Z",
    },
    {
      _id: "6",
      owner: "63fbc2df8b82f12345678906",
      name: "Online Photography Course",
      image: "https://via.placeholder.com/150?text=Photography+Course",
      price: "79.99",
      type: "digital",
      description: "A comprehensive online course to master photography skills.",
      created_at: "2024-10-10T11:00:00Z",
      updated_at: "2024-11-20T09:00:00Z",
    },
  ];
  



export default function MarketLanding() {
  return (
  <div className="w-full my-3 flex flex-col items-center gap-5">
        <HeroSection 
            message={"Join a community of creators and entrepreneurs."} 
            image={"/assets/images/bellzstudio.png"}
          />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {PRODUCTS.map((product) => (
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
            <li>Email: <a href="mailto:olaniyigeorge77@gmail.com" className="text-purple-500 hover:underline">Olaniyigeorge77@gmail.com</a></li>
            <li>Phone: <a href="tel:+2349037018310" className="text-purple-500 hover:underline">+234 903 7018 310</a></li>
            <li>Address: Akure, Ondo State, Nigeria</li>
          </ul>
        </div>

  </div>
  );
}


