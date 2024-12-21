import Product from "@/models/marketplace.product";
import { connectToDB } from "@/services/mongo_db";


export const GET = async (request: Request) => {
  try {
    const url = new URL(request.url);
    await connectToDB();

    const owner = url.searchParams.get("userId"); // Extract the owner from query parameters
    // const id = url.searchParams.get("id"); // Extract the owner from query parameters

    if (owner) {
      console.log("Getting products from this user")
      const my_products = await Product.find({ owner}); // Use the extracted ID
      return new Response(JSON.stringify(my_products), { status: 200 })
    }



    const products = await Product.find({}).populate("owner");
    if (!products) return new Response("Products Not Found", { status: 404 });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};


// POST handler to update products
export const POST = async (request: Request) => {
    const { name, image, owner, price, type, description } = await request.json();
  
    try {
      await connectToDB();
  
      // Find the existing product by ID
      console.log(name, image, price, type, description)
      const existingProduct = await new Product({
          name: name,
          image: image,
          owner: owner,
          price: price,
          type: type,
          description: description
      })
  
      if (!existingProduct) {
        return new Response("Product Not Found", { status: 404 });
      }
  
      // Update the product with new data
      if (name) existingProduct.name = name;
      if (image) existingProduct.image = image;
      if (price) existingProduct.price = price;
      if (type) existingProduct.type = type;
      if (description) existingProduct.description = description;
  
      existingProduct.updated_at = new Date();
  
      await existingProduct.save();
  
      return new Response("Product successfully updated", { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response("Error updating product", { status: 500 });
    }
  };
  