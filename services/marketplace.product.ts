import { iProduct } from "@/app/i/market/page";

export async function getProduct(id: string): Promise<iProduct | null> {
    const res = await fetch(`${process.env.DOMAIN}/api/marketplace/products/${id}`, {
        method: "GET",
    });

    console.log("Resposne: ", res)
  
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        console.error(`Error: ${res.status}`);
        return null
    }
  }