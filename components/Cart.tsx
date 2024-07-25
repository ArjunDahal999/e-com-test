"use client"
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';


export const CartDrawer: React.FC = () =>
{
    const { items, isOpen, toggleCart, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();

    return (
        <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">Your Cart</h2>
                    <button onClick={toggleCart} className="p-1">
                        <X size={24} />
                    </button>
                </div>
                <div className="flex-grow overflow-y-auto p-4">
                    {items.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1">
                                        <Minus size={16} />
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
                                        <Plus size={16} />
                                    </button>
                                    <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500">
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="p-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};