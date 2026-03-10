import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { increment , decrement , reset } from "../features/counter/CounterSlice";

function Counter(){
    const count = useSelector((state)=> state.counter.value);

    const dispatch = useDispatch();

    return(
        <div style={{textAlign: "center" , marginTop:"20px" , gap: "20px"}}>
            <h1>Redux Counter App</h1>
            <h2>{count}</h2>

            <button onClick={()=> dispatch(increment()) }>Increment</button>
            <button onClick={()=> dispatch(decrement()) }>Decrement</button>
            <button onClick={()=> dispatch(reset()) }>Reset</button>
        </div>
    )
}

export default Counter;