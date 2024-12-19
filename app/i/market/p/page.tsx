"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ProductHome() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if "buy" query parameter exists and is "yes"
    const buy = searchParams.get("buy");
    if (buy === "yes") {
      // Locate the button with the ID "buy-now"
      const buyNowButton = document.getElementById("buy-now");
      if (buyNowButton) {
        // Apply a zoom animation
        buyNowButton.classList.add("animate-zoom");
        // Remove the animation class after animation completes
        setTimeout(() => {
          buyNowButton.classList.remove("animate-zoom");
        }, 1000); // Match this duration with your animation length
      }
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Product Home</h1>
      <button
        id="buy-now"
        className="bg-blue-500 text-white px-6 py-2 rounded-md transition-transform"
      >
        Buy Now
      </button>
    </div>
  );
}
