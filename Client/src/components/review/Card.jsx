function Card({review}){
    return(<>
        {review.name}
        {review.rating}
        {review.review}
    </>)
}

export default Card