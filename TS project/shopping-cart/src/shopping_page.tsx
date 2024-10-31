import React,{useState} from "react"

//interface
interface Item{
    id:number;
    itemName:string;
    price: number;
}

interface CartItem{
    id: number;
    count: number;
    itemName: string;
    totalPrice: number;

}

const itemList: Item[] = [
    {id:1, itemName:"Water", price:2},
    {id:2, itemName:"Milk Tea", price:4.5},
    {id:3, itemName:"Coffee", price:3.75},
    {id:4, itemName:"Latte", price:4.5},
    {id:5, itemName:"Frappuccino", price:7},
];

const itemListString: string[]= itemList.map(item => `${item.itemName}: $${item.price}`)
// console.log(itemListString);

const ShoppingPage: React.FC = () => {
    const [cartList, setCartList] = useState<CartItem[]>([]);

    // Add item to cart
    const addToCartClick = (id: number) => {
        const selectedItem = itemList.find(item => item.id === id);
        if (!selectedItem) return;

        setCartList((prevCartList) => {
            const existingCartItem = prevCartList.find(item => item.id === id);
            if (existingCartItem) {
                return prevCartList.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              count: item.count + 1,
                              totalPrice: item.totalPrice + selectedItem.price,
                          }
                        : item
                );
            } else {
                return [...prevCartList, {
                    id: selectedItem.id,
                    count: 1,
                    itemName: selectedItem.itemName,
                    totalPrice: selectedItem.price,
                }];
            }
        });
    };

    // Delete item from cart
    const deleteFromCartClick = (id: number) => {
        setCartList((prevCartList) => {
            const itemToUpdate = prevCartList.find(item => item.id === id);
            if (!itemToUpdate) return prevCartList;

            if (itemToUpdate.count > 1) {
                return prevCartList.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              count: item.count - 1,
                              totalPrice: item.totalPrice - itemToUpdate.totalPrice / itemToUpdate.count,
                          }
                        : item
                );
            } else {
                return prevCartList.filter(item => item.id !== id);
            }
        });
    };

    return(
        <div>
            <div className="items">
                {itemListString.map((item,index) => (
                    <ul key={index}>
                        <p className="itemDisplay">{item}</p>
                        <button onClick={() => addToCartClick(index)}> Add To Cart </button>
                    </ul>
                ))}
            </div>
            <div className="cart">
                <h1> Shopping Cart </h1>
                {cartList.map(cartItem => (
                        <ul key={cartItem.id}>
                            <p className="cartDisplay">
                                {cartItem.itemName}  Qty: {cartItem.count}  Total Price: ${cartItem.totalPrice.toFixed(2)}
                                <button onClick={() => deleteFromCartClick(cartItem.id)}> Delete From Cart </button>
                            </p>
                        </ul>
                ))}
            </div>
        </div>
    )

}
export default ShoppingPage