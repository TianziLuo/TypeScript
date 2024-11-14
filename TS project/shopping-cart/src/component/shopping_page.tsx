import React, { useState } from "react";
import { itemList } from "./itemList";
import { CartItem } from "./interface";
import "./shopping_page.css";

const ShoppingPage: React.FC = () => {
    const [cartList, setCartList] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

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
        <div className="shopping-page">
            <h1>PP's Market</h1>
            <button className="cart-toggle-button" onClick={toggleCart}>
                {isCartOpen ? "Close Cart" : "Open Cart"}
            </button>
            {isCartOpen && (
                <div className="cart-popup">
                    <h2>Shopping Cart</h2>
                    {cartList.length > 0 ? (
                        cartList.map(cartItem => (
                            <div key={cartItem.id} className="cart-item">
                                <p>
                                    {cartItem.itemName} (Qty: {cartItem.count}) - ${cartItem.totalPrice.toFixed(2)}
                                </p>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteFromCartClick(cartItem.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
            )}
            <div className="items">
                {itemList.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.itemName} className="item-image" />
                        <p className="item-info">
                            <strong>{item.itemName}</strong> - ${item.price.toFixed(2)}
                        </p>
                        <button className="add-button" onClick={() => addToCartClick(item.id)}>
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingPage;