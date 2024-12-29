"use client";

import { User } from "next-auth";
import { useState } from "react";
import { toast } from "react-toastify";

interface ProductFormProps {
  user: User;
}

export default function ProductForm(props: ProductFormProps) {
  const { user } = props;
  const [image, setImage] = useState<string>("https://via.placeholder.com/150?text=Product+Image");

  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  // Define the onsubmit function properly
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name") as string;
    const description = form.get("description") as string;
    const owner = form.get("owner") as string;
    const price = form.get("price") as string;
    const image = fileUrl // form.get("image") as string;
    const type = form.get("type") as string;

    await handleImageUpload(event)

    const product = {
      name,
      description,
      owner: user.id || owner,
      price,
      image: fileUrl,
      type,
    };
    console.log(product)


    try {
      const response = await fetch("/api/marketplace/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        console.log("Product created successfully");
        toast.success(`${product.name} added`)
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
    if (file) {
      setFile(file);
    }
  };


  async function handleImageUpload(e: React.FormEvent) {
    e.preventDefault();
    try {
      console.log("file: ", file)
      if (!file) throw new Error('No file selected');
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('/api/cloudinary-upload', {
        method: 'POST',
        body: formData,
      });
      const result: { secure_url: string } = await response.json();
      if (!result) throw new Error('Failed to upload file');
      setFileUrl(result.secure_url);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }



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
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="owner" className=" hidden block text-sm font-medium text-gray-700">
          Owner 
        </label>
        
        <input  
          type="text"
          id="owner"
          name="owner"
          defaultValue={user.id}
          readOnly
          className="mt-1 block hidden  w-full rounded-md border-gray-300 bg-gray-100 shadow-sm sm:text-sm"
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
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
        <div>
    {/* Image Preview */}
    <img
      src={image}
      alt="Selected"
      className="mt-1 block w-full md:max-w-[220px] rounded-md border-gray-300 shadow-sm"
    />
    {/* Image Upload Input */}
    <input
      type="file"
      id="image"
      name="image"
      accept="image/*"
      onChange={handleImageChange}
      className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
  </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-500 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
