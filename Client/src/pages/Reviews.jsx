import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"

function Reviews(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    const [Rating, setRating] = useState(1)
    const [restaurantName, setRestaurantName] = useState("")
    const { id } = useParams();

    async function fetchdata() {
        try {
            setLoading(true)

            const [reviewsRes, restaurantNameRes] = await Promise.all([
                fetch(`http://localhost:3000/api/v1/reviews/${id}`),
                fetch(`http://localhost:3000/api/v1/restaurants/${id}`)
            ])

            const reviewsData = await reviewsRes.json()
            const restaurantName = await restaurantNameRes.json()

            if(restaurantName){
                setRestaurantName(restaurantName)
                if(reviewsData){
                    setData(reviewsData)
                }
                setLoading(false)
            }

            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    if (loading) {
        return <div>Loading please wait</div>;
    }

    console.log(data)
    console.log(restaurantName)

    return(<>
        <NavLink to={"/"}>Home</NavLink>
        <h1>{restaurantName.name}</h1><br/>
        
        <br/>

        <h3>Leave your Review</h3> <br/>
        <form>
            <h5>Name:</h5>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>

            <h5>Review:</h5>
            <input type="text" value={review} onChange={e => setReview(e.target.value)}/>

            <h5>Star Rating</h5>
            <input type="number" min="1" max="5" value={Rating} onChange={e => setRating(parseInt(e.target.value, 10))}/>

            <button>Submit</button>
        </form>
    </>)
}

export default Reviews