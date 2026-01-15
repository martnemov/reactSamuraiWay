import {useState} from "react";

export function ProductList (prop) {
    const [inCart, setInCart] = useState(false)

    return <div style={{display: 'flex', flexDirection: 'column', border: '4px solid black', padding: '20px', width: '300px', gap: '20px'}}>
        <div>id: {prop.item.id}</div>
        <div>name: {prop.item.name}</div>
        <div>price: {prop.item.price}</div>
        <div>category: {prop.item.category}</div>
        <button style={{background: inCart ? 'yellow': ''}} onClick={() => {
            if (inCart) {
                alert('Товар удален из корзины');
            } else {
                alert('Товар добавлен в корзину');
            }
            setInCart(prev => !prev);
        }}>
            <span>{inCart ? 'товар в корзине' : 'товар удален из корзины'}</span>
        </button>
        </div>
}