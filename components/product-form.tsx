"use client";

import { User } from "next-auth";

interface ProductFormProps {
  user: User;
}

export default function ProductForm(props: ProductFormProps) {
  const { user } = props;

  // Define the onsubmit function properly
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name") as string;
    const description = form.get("description") as string;
    const owner = form.get("owner") as string;
    const price = form.get("price") as string;
    const image = form.get("image") as string;
    const type = form.get("type") as string;

    const product = {
      name,
      description,
      owner: user.id,
      price,
      image,
      type,
    };

    console.log(product)

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        console.log("Product created successfully");
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="owner" className="block text-sm font-medium text-gray-700">
          Owner
        </label>
        <input
          type="text"
          id="owner"
          name="owner"
          defaultValue={user.id}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>


      <div><label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type
        </label>
        <select id="type" name="type" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">

            <option value="digital">Digital</option>
            <option value="physical">Physical</option>
            <option value="food">Food</option>
            <option value="service">Service</option>
        </select>
        
       
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          defaultValue={"https://via.placeholder.com/150?text=Product+Image"}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
