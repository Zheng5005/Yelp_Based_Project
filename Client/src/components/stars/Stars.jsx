import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";

function Stars({rating}){
    const stars = []

    for(let i = 1; i <=5; i++){
        if(i <= rating){
            stars.push(<IoStar />)
        } else if(i === Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<IoStarHalfOutline />)
        } else{
            stars.push(<IoStarOutline />)
        }
    }

    return(<>
        {stars}
    </>)
}

export default Stars