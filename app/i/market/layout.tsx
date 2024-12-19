import { HomeIcon, ChartBarIcon, ShoppingBagIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image"




export default function Layout({ children }: { children: React.ReactNode }) {
    const navItems = [
        { name: "Home", icon: HomeIcon, href: "/i/market#" },
        { name: "Dashboard", icon: ChartBarIcon, href: "/i/market/dashboard" },
        { name: "Shop", icon: ShoppingBagIcon, href: "/i/market/shop" },
        { name: "Reach Us", icon: ChatBubbleLeftIcon, href: "/i/market#contact-us" },
      ];
    
    return (
        <div className="w-full h-full flex flex-col items-center text-slate-900 bg-slate-50">
          <main className="relative max-w-[1440px] min-h-[2000px] w-full h-full border flex flex-col items-center">
            <nav className="border flex sticky bg-purple-400 bg-opacity-50 top-3 p-3 rounded-lg right-0">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-1 hover:text-purple-600 font-medium"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs md:text-sm">{item.name}</span>
                </a>
              ))}
            </nav>
    

            {children}

    
            <div className="py-5" id="contact-us"> 
                Olaniyigeorge77@gmail.com
            </div>
          </main>
        </div>
      );
}