import Product from "@/models/market.product";
import { connectToDB } from "@/utils/database";

// GET handler to retrieve a single product by ID
export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    await connectToDB();

    const product = await Product.findById(params.id).populate("owner");
    if (!product) return new Response("Product Not Found", { status: 404 });

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

// PATCH handler to update a product by ID
export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
  const { name, image, price, type, description } = await request.json();

  try {
    await connectToDB();

    // Find the existing product by ID
    const existingProduct = await Product.findById(params.id);

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

// DELETE handler to delete a product by ID
export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    await connectToDB();

    // Find the product by ID and remove it
    const deletedProduct = await Product.findByIdAndDelete(params.id);

    if (!deletedProduct) {
      return new Response("Product Not Found", { status: 404 });
    }

    return new Response("Product deleted successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error deleting product", { status: 500 });
  }
};







