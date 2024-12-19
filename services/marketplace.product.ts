
export async function getProduct(id: string) {
    const DOMAIN = process.env.DOMAIN 
    const res = await fetch(`${DOMAIN}/api/products/${id}`);
    const data = await res.json();

    return data
}