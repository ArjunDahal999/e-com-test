"use client"
import { useCartStore } from "@/store/cart-store";
import { Mountain, Search, ShoppingCart } from "lucide-react";



const Logo = () => (
    <a className="flex items-center gap-2" href="#">
        <Mountain className="h-6 w-6" />
        <span className="text-lg font-semibold">Arjun Store</span>
    </a>
);


export const CartIcon: React.FC = () =>
{
    const totalItems = useCartStore(state => state.getTotalItems());
    const toggleCart = useCartStore(state => state.toggleCart);
    return (
        <button className="relative" onClick={toggleCart}>
            <ShoppingCart className="h-6 w-6" />

            {totalItems > 0 && (
                <div className="absolute -top-3 -right-2 text-white  size-5 bg-red-400 px-1 rounded-full">
                    {totalItems}
                </div>
            )}
        </button>
    );
};


export const Header: React.FC = () => (
    <header className="bg-background border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
            <Logo />
            <CartIcon />
        </div>
    </header>
);