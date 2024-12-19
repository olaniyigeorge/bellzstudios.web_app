import Product from "@/models/market.product";
import { connectToDB } from "@/utils/database";


export const GET = async (request: Request) => {
  try {
    await connectToDB();

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
  