import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Card from "../components/review/Card";
import "./Reviews.css";

function Reviews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [restaurantName, setRestaurantName] = useState("");
  const { id } = useParams();

  async function fetchdata() {
    try {
      setLoading(true);

      const [reviewsRes, restaurantNameRes] = await Promise.all([
        fetch(`http://localhost:3000/api/v1/reviews/${id}`),
        fetch(`http://localhost:3000/api/v1/restaurants/${id}`),
      ]);

      const reviewsData = await reviewsRes.json();
      const restaurantName = await restaurantNameRes.json();

      if (restaurantName) {
        setRestaurantName(restaurantName);
        if (reviewsData) {
          setData(reviewsData);
        }
        setLoading(false);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  async function createReview() {
    const restaurant_id = id;
    try {
      const body = { restaurant_id, name, review, rating };
      const res = await fetch("http://localhost:3000/api/v1/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function onSubmitReview(e) {
    e.preventDefault();
    createReview();
  }

  if (loading) {
    return <div>Loading please wait</div>;
  }

  console.log(data);
  console.log(restaurantName);

  return (
    <>
      <div className="reviews-container">
        <NavLink to={"/"}>Home</NavLink>
        <h1>{restaurantName.name} - Stars (It can't be changeable)</h1>
        <br />
        {data.map((review) => (
        <Card review={review} key={review.id} />
        ))}
        <br />
        <h3>Leave your Review</h3>
        <form onSubmit={onSubmitReview}>
          <h5>Name:</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Review:</h5>
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <h5>Star Rating</h5>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value, 10))}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Reviews;
