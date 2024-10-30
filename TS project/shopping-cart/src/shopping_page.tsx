import React,{useState} from "react"

interface Item{
    id:number;
    itemName:string;
    price: number;
}

//
interface CartItem{
    count: number;
    itemName: string;
    totalPrice: number;
}

const item1: Item = {id:1, itemName:"water", price:2};
const item2: Item = {id:2, itemName:"milk tea", price:4.5};
const item3: Item = {id:3, itemName:"coffee", price:3.75};
const item4: Item = {id:4, itemName:"latte", price:4.5};
const item5: Item = {id:5, itemName:"frappuccino", price:7};

const itemList: Item[] = [item1, item2, item3, item4,item5];


const ShoppingPage: React.FC = () =>{

    const [addCart, setAddCart] = useState<object>();
    // 
    const [cartList, setCartList] = useState<string[]>([]);
    
    const addToCart = (key:number) => {
        setAddCart(itemList[key])
    }



    return(
        <div>
            <div className="items">
                {itemList.map((item,index) => (
                    <ul key={index}><p className="intemName">{item.itemName} ${item.price}</p>
                        <button onClick={() => addToCart(index)}> Add To Cart </button>
                    </ul>
                ))}

            </div>
        </div>
    )

}
export default ShoppingPage