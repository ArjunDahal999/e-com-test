import { create } from 'zustand';
import { Product, CartItem } from '../types';

interface CartStore
{
    items: CartItem[];
    isOpen: boolean;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
    toggleCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    isOpen: false,
    addToCart: (product) => set((state) =>
    {
        const existingItem = state.items.find(item => item.id === product.id);
        if (existingItem)
        {
            return {
                items: state.items.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        }
        return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
    removeFromCart: (productId) => set((state) => ({
        items: state.items.filter(item => item.id !== productId)
    })),
    updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
        ).filter(item => item.quantity > 0)
    })),
    getTotalItems: () =>
    {
        return get().items.reduce((total, item) => total + item.quantity, 0);
    },
    getTotalPrice: () =>
    {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));