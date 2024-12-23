import Cart from "@/models/marketplace.cart";
import { connectToDB } from "@/services/mongo_db";


export const GET = async (request: Request) => {
  try {
    const url = new URL(request.url);
    await connectToDB();

    const id = url.searchParams.get("id"); // Extract the owner from query parameters
    // const id = url.searchParams.get("id"); // Extract the owner from query parameters

    if (id) {
        console.log("Getting cart from this user")
        const my_cart = await Cart.findById({ id}); // Use the extracted ID
        return new Response(JSON.stringify(my_cart), { status: 200 })
    }



    const products = await Cart.find({}).populate("products");
    if (!products) return new Response("Cart Not Found", { status: 404 });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};


// POST handler to update products
export const POST = async (request: Request) => {
    const { name, image, owner, products } = await request.json();
  
    try {
      await connectToDB();
  
      // Find the existing product by ID
      console.log(name, image, products)
      const existingCart = await new Cart({
          name: name,
          owner: owner,
          products: products,
      })
  
      if (!existingCart) {
        return new Response("Product Not Found", { status: 404 });
      }
  
      // Update the product with new data
      if (name) existingCart.name = name;
      if (image) existingCart.image = image;
      if (products) existingCart.products = products;

  
      existingCart.updated_at = new Date();
  
      await existingCart.save();
  
      return new Response("Cart successfully updated", { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response("Error updating car", { status: 500 });
    }
  };
  