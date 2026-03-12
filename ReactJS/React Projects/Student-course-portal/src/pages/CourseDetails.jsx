import { useDispatch } from "react-redux";
import { addtocart } from "../redux/cartSlice";
import { useParams } from "react-router-dom";

function CourseDetails(){
    const {id} = useParams();
    const dispatch = useDispatch()

    return(
        <div>
            <h2>Course Details {id}</h2>

            <button onClick={()=> dispatch(addtocart({id , name }))}>Add to Cart</button>
        </div>
    );
}

export default CourseDetails;