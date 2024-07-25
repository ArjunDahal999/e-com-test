"use client"
import { HeadPhoneImage, LeatherBagImage, SmartWatch, SpeakerImage } from "@/images";
import { useCartStore } from "@/store/cart-store";

interface Product
{
    id: number;
    image?: any;
    name: string;
    description: string;
    price: number;
}


const ProductCard: React.FC<Product> = ({ id, name, description, price, image }) =>
{
    const addToCart = useCartStore(state => state.addToCart);
    return <div className="bg-background rounded-lg  border-2 border-black overflow-hidden">
        <img
            src={image.src}
            width="400"
            height="300"
            alt={` Image`}
            className="w-full h-48 "
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">${price.toFixed(2)}</span>
                <button
                    onClick={() => addToCart({ id, name, description, price })}
                    className="items-center justify-center text-sm px-3">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
}


const products: Product[] = [
    { id: 1, name: 'Wireless Headphones', description: 'High-quality sound', price: 79.99, image: HeadPhoneImage },
    { id: 2, name: 'Leather Backpack', description: 'Durable and stylish', price: 99.99, image: LeatherBagImage },
    { id: 3, name: 'Smart Watch', description: 'Track your fitness', price: 149.99, image: SmartWatch },
    { id: 5, name: 'Bluetooth Speaker', description: 'Powerful sound, compact design', price: 59.99, image: SpeakerImage }
];

export const ProductCatalog: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
            <ProductCard key={product.id} {...product} />
        ))}
    </div>
);