import { auth } from "@/services/auth";
import { HomeIcon, ShoppingCartIcon, CubeIcon, TruckIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { iProduct } from "../page";
import { redirect } from "next/navigation";
import ProductCard from "@/components/product-card";

export default async function Dashboard() {
const session = await auth();

if (!session?.user?.id) {
    redirect("/i/market#get-started")
    return <div>Loading...</div>;
}

// Fetch metrics data
const [sells, buys, orders, products] = await Promise.all([
    getSells(session.user.id),
    getBuys(session.user.id),
    getOrders(session.user.id),
    getProducts(session.user.id),   
]);

const metrics = {
    sells: sells.length || 0,
    buys: buys.length || 0,
    orders: orders.length || 0,
    products: products.length || 0,
};

const navItems = [
    { name: "Buy", id: "buys", icon: ShoppingCartIcon, href: "/i/market/dashboard/#buys" },
    { name: "Sell", id: "sells", icon: CubeIcon, href: "/i/market/dashboard/#sells" },
    { name: "Orders", id: "orders", icon: TruckIcon, href: "/i/market/dashboard/#orders" },
    { name: "Products", id: "products", icon: UserCircleIcon, href: "/i/market/dashboard#products" },
];

return (
    <div className="w-full p-4 my-3 h-full  flex flex-col md:flex-row bg-opacity-50 flex justify-between items-start bg-slate-50 text-gray-900">
    {/* Navigation */}
    <nav className="w-full bg-white md:w-fit flex min-h-[80%] md:flex-col border h-full p-2 bg-gray-100 justify-between rounded-lg shadow-md">
        {navItems.map((item) => (
        <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 hover:text-purple-600 font-medium"
        >
            <item.icon className="h-6 w-6" />
            <span className="text-sm hidden md:flex md:text-base">{item.name}</span>
        </a>
        ))}
        <div id="profile" className="md:mt-4 bg-slate-50 border p-2 rounded-xl flex flex-col items-center gap-3">
        <img
            src={session?.user?.image || "https://via.placeholder.com/300x200"}
            alt={session?.user?.name || "User"}
            className="w-12 h-12 rounded-full object-cover"
        />
        <span className="text-sm hidden md:flex font-medium">{session?.user?.name}</span>
        </div>
    </nav>

    {/* Welcome Section */}
    <div className="w-full  flex items-center  flex-col gap-3">
        {/* Dashboard Metrics */}
        <div className="w-full max-w-4xl p-4 bg-slate-100 rounded-lg shadow-md">
            <h2 className="text-lg font-medium mb-4">
                Welcome, <span className="font-bold">{session?.user?.name}! </span>
                <br/>
                <span className="text-sm font-light">Dashboard Metrics</span>    
            </h2>
            <div className="grid grid-cols-1 gap-3">
            {[
                { name: "Sells", id: "sells", count: metrics.sells, icon: CubeIcon },
                { name: "Buys", id: "buys", count: metrics.buys, icon: ShoppingCartIcon },
                { name: "Orders", id: "orders", count: metrics.orders, icon: TruckIcon },
                { name: "Products", id: "products", count: metrics.products, icon: HomeIcon },
            ].map((metric) => (
                <div
                    id={metric.id}
                    key={metric.name}
                    className="p-4 bg-white border rounded-lg flex flex-col"
                >
                <span className="flex items-center gap-1 justify-between">
                    <metric.icon className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-600">{metric.name}</span>
                    <span className="text-xl font-bold">{metric.count}</span>
                </span>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2"> 
                    {   
                        metric.id == "products" && ( 
                            (
                                products.map((product: iProduct) => (
                                   <ProductCard key={product._id} product={product} />
                                ))
                            )
                        )
                    }
                </div>


                </div>
            ))}
            </div>
        </div>
    </div>
    </div>
);
}

// Helper Functions
async function getSells(userId: string) {
try {
    const response = await fetch(`${process.env.DOMAIN}/api/sells?userId=${userId}`);
    const data = await response.json();
    return data;
} catch (error) {
    console.error(error);
    return [];
}
}

async function getBuys(userId: string) {
try {
    const response = await fetch(`${process.env.DOMAIN}/api/buys?userId=${userId}`);
    const data = await response.json();
    return data;
} catch (error) {
    console.error(error);
    return [];
}
}

async function getProducts(userId: string) {
try {
    const response = await fetch(`${process.env.DOMAIN}/api/products?userId=${userId}`);
    const data = await response.json();
    return data;
} catch (error) {
    console.error(error);
    return [];
}
}

async function getOrders(userId: string) {
try {
    const response = await fetch(`${process.env.DOMAIN}/api/orders?userId=${userId}`);
    const data = await response.json();
    return data;
} catch (error) {
    console.error(error);
    return [];
}
}
