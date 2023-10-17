'use client'
import { useState } from 'react';
import { useImmer } from 'use-immer';

interface Product {
    id: number;
    name: string;
    count: number;
}
type Products = Product[];

const initialProducts: Products = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

export default function ShoppingCart() {
    const [
        products,
        setProducts
    ] = useState<Products>(initialProducts)

    function handleIncreaseClick(productId: number) {
        const newProducts: Products = products.map((product: Product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count + 1,

                }
            }
            return product;
        })
        setProducts(newProducts);
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                </li>
            ))}
        </ul>
    );
}
