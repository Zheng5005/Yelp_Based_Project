import { useEffect, useState } from "react"

function Reviews({restaurant}){
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    const [Rating, setRating] = useState(1)

    async function fetchdata() {
        try {
            setLoading(true)
            const res = await fetch(`http://localhost:3000/api/v1/restaurants`)
            const fetchedData = await res.json()

            if(fetchedData){
                setData(fetchedData)
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

    return(<>
        <h1>{restaurant.name}</h1> {/* Star Rating */} <br/>
        
        <Card /> {/* This has to be a map, and you have to pass the data object (reviews) */}
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