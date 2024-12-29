import { HomeIcon, ChartBarIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { name: "Home", icon: HomeIcon, href: "/i/market#" },
    { name: "Dashboard", icon: ChartBarIcon, href: "/i/market/dashboard" },
    { name: "Shop", icon: ShoppingBagIcon, href: "/i/market/shop" },
    { name: "Cart", icon: ShoppingCartIcon, href: "/i/market/cart" },
  ];

  return (
    <div className="w-full h-full bg-slate-50 flex flex-col items-center text-slate-900">
      <main className="relative max-w-[1440px] w-full h-full border flex flex-col items-center">
        {/* Navigation */}
        <nav className="w-full md:w-2/3 flex sticky top-3 bg-purple-100 bg-opacity-50 blur-backgrop p-3 rounded-lg w-full glassimorphism  justify-between  border border-purple-200 z-10 shadow shadow-purple-500">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="w-full flex font-medium justify-center text-purple-600 items-center gap-2 px-3 py-1 hover:scale-105"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs md:text-sm font-semibold ">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Main Content */}
        <div className="flex-grow w-full">{children}</div>


        {/* Footer */}
        <footer className="w-full mt-3 py-4 bg-purple-700 text-white  blur-backdrop flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            <a href="/i/market#" className="text-sm hover:underline">Home</a>
            <a href="/i/market/dashboard" className="text-sm hover:underline">Dashboard</a>
            <a href="/i/market/shop" className="text-sm hover:underline">Shop</a>
            <a href="#contact-us" className="text-sm hover:underline">Contact Us</a>
          </div>
          <div className="flex items-center  gap-3 mb-3">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-purple-400">
              <Image 
                src="data:image/png;base64,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" 
                alt="Facebook" 
                width={20} 
                height={20} 
                className="object-fill rounded-full w-5 h-5"
              />
            </a>
            <a href="#" className="hover:text-purple-400">
              <Image 
                src="data:image/png;base64,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" 
                alt="Twitter" 
                width={20} 
                height={20}
                className="object-fill rounded-full w-5 h-5"
               />
            </a>
            <a href="#" className="hover:text-purple-400">
              <Image 
                src="data:image/png;base64,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" 
                alt="LinkedIn" 
                width={20} 
                height={20}
                className="object-fill rounded-full w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Bellz Studio. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
