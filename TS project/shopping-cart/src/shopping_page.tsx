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

const ShoppingPage: React.FC = () =>{

    // const [addCart, setAddCart] = useState<Item | null>(null);
    const [cartList, setCartList] = useState<CartItem[]>([]);
    
    const addToCartClick = (key:number) => {
        const selectedItem = itemList[key];

        //console.log(typeof(addCart));
        const findItem: CartItem | undefined = cartList.find(item => item.id === selectedItem.id);
        if(findItem){
            const updateItem: CartItem = {
                ...findItem,
                count: findItem.count + 1,
                totalPrice: findItem.totalPrice + selectedItem.price,
            }
            const currentList = cartList.filter(item => item.id !== selectedItem.id)
            setCartList([...currentList,updateItem])
        }else{
            setCartList(cartList =>[...cartList,{
                id:selectedItem.id, 
                 count:1, 
                 itemName:selectedItem.itemName, 
                 totalPrice: selectedItem.price,
                }]);
        }
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
                <h1> Shopping Cart</h1>
                {cartList.map(cartItem => (
                    <ul key={cartItem.id}>
                        <p className="cartDisplay">
                            {cartItem.itemName}  Qty: {cartItem.count}  Total Price: ${cartItem.totalPrice.toFixed(2)}
                        </p>
                    </ul>
                ))}
            </div>
        </div>
    )

}
export default ShoppingPage