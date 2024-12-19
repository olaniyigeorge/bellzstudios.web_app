import ProductForm from "@/components/product-form";    
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

export interface iUser{
    name: string | null | undefined
    email: string | null | undefined
    image: string | null | undefined
    id: string  | null | undefined
}

export default async function AddProduct() {
    const session = await auth();
    console.log(session)
    if ( !session?.user?.id ) {
        redirect("/auth")
        return <div>Loading...</div>
    }
    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center bg-slate-50 text-gray-900 ">
            <ProductForm  user={session.user} />
        </div>
    )
}