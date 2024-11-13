import React, { useState } from "react";
import { itemList } from "./component/itemList";
import { CartItem } from "./component/interface";

const ShoppingPage: React.FC = () => {
    const [cartList, setCartList] = useState<CartItem[]>([]);

    // Add item to cart
    const addToCartClick = (id: number) => {
        const selectedItem = itemList.find(item => item.id === id);
        if (!selectedItem) return;

        setCartList(prevCartList => {
            const existingCartItem = prevCartList.find(item => item.id === id);
            if (existingCartItem) {
                return prevCartList.map(item =>
                    item.id === id
                        ? {
                              ...item,
                              count: item.count + 1,
                              totalPrice: item.totalPrice + selectedItem.price,
                          }
                        : item
                );
            } else {
                return [
                    ...prevCartList,
                    {
                        id: selectedItem.id,
                        count: 1,
                        itemName: selectedItem.itemName,
                        totalPrice: selectedItem.price,
                    },
                ];
            }
        });
    };

    // Delete item from cart
    const deleteFromCartClick = (id: number) => {
        setCartList(prevCartList => {
            const itemToUpdate = prevCartList.find(item => item.id === id);
            if (!itemToUpdate) return prevCartList;

            if (itemToUpdate.count > 1) {
                return prevCartList.map(item =>
                    item.id === id
                        ? {
                              ...item,
                              count: item.count - 1,
                              totalPrice: item.totalPrice - itemList.find(i => i.id === id)!.price,
                          }
                        : item
                );
            } else {
                return prevCartList.filter(item => item.id !== id);
            }
        });
    };

    return (
        <div>
             <div className="items">
                <h1> PP's Market </h1>
                {itemList.map(item => (
                    <li key={item.id}>
                        <p className="itemDisplay">
                            <img src={item.image} alt={item.itemName} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                            <br />
                            {item.itemName}: ${item.price.toFixed(2)}
                            <button onClick={() => addToCartClick(item.id)}>Add To Cart</button>
                        </p>
                    </li>
                ))}
            </div>
            <div className="cart">
                <h1> Shopping Cart </h1>
                {cartList.map(cartItem => (
                    <li key={cartItem.id}>
                        <p className="cartDisplay">
                            {cartItem.itemName} Qty: {cartItem.count} Total Price: $
                            {cartItem.totalPrice.toFixed(2)}
                            <button onClick={() => deleteFromCartClick(cartItem.id)}>
                                Delete From Cart
                            </button>
                        </p>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default ShoppingPage;

