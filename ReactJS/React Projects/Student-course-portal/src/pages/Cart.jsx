import { useSelector } from "react-redux";

function Cart(){
    const items = useSelector(state=> state.cart.items)

    return(
        <div>
            <h2>Cart</h2>

            {items.map((item, index)=>(
                <p key={index}>Course ID: {item.id} {items.name}</p>
            ))}
        </div>
    )
}
export default Cart;