import { auth } from "@/services/auth"
import { iProduct, PRODUCTS } from "../page"
import { MinusCircleIcon, PlusCircleIcon, ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/outline";

interface iCart{
    owner: string;
    products: iProduct[];

}
export default async function Cart() {
    const session = await auth()
    const currency = "$" // Infer from user location



    // if (!session?.user?.id) {
    //     return <> Loading</>
    // }
    

    const cart: iCart = await getUserCart(session?.user?.id || "1")

    let total = 0

    cart.products.forEach(element => {
        total = parseFloat(element.price) + total
    })

    return (
        <div className="w-full flex flex-col justify-center p-3 md:p-5 items-center my-3 ">
            <div className="w-full flex flex-col shadow justify-center items-center md:w-1/3 rounded-xl bg-white p-2 md:p-4">
                <span className="flex items-center gap-2 m-2">
                    <ShoppingCartIcon className="h-6 w-6 text-purple-600"/>    
                    <h1 className="font-medium">Cart</h1>
                </span>

            <ul className="w-full flex flex-col gap-2">
                {cart.products.map((item: iProduct) => (

                    <span className="w-full flex justify-between border-y items-start  p-2">
                        <span className="w-full">
                            <li className="flex gap-1 items-center "> {item.name} <p className="text-gray-600 text-xs">({item.type})</p></li>
                            <li className=""> {item.price}</li>
                        </span>
                        <span className="w-fit flex gap-2 flex-col items-center justify-between">
                            <li className="h-4 w-5 text-red-600"> <TrashIcon /> </li>
                            <li className="flex items-center"> 
                                <MinusCircleIcon className="h-5 w-5 text-gray-600"/> 
                                <>{1}</>
                                <PlusCircleIcon className="h-5 w-5 text-gray-600"/>
                            </li>
                        </span>
                    </span>
                    
                ))}
            </ul>

            <span className="flex items-center gap-2 my-3">
                <h2 className="">Total: </h2>
                <p className="text-semibold text-xl"> {currency}{total}</p>
            </span>

            <span className="flex gap-2 my-4">
                
                <button className="purple_btn">Buy</button>
            </span>

            </div>
            
        </div>
    )
}





async function getUserCart(id: string): Promise<iCart>  {
    let cart: iCart = {
        owner: "john-dow",
        products: PRODUCTS
    }
    try {

        const res = await fetch(`${process.env.DOMAIN}/api/marketplace/cart?id=${id}`,
            {
                method: "GET",
            }
        )

        if (res.status == 200) {
            cart = await res.json()
        }
    } catch(err) {
        console.error(err)
    }
    return cart

}




// async function createOrder() : Promise<any>{


//     return {}
// }





