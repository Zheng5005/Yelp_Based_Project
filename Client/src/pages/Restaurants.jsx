import { useEffect, useState } from "react";
import ListRestaurants from "../components/restaurant/ListRestaurants";
import CreateRestaurant from "../components/restaurant/CreateRestaurant";
import './Restaurant.css'

function Restaurants({ url }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchRestaurants() {
    try {
      setLoading(true);

      const res = await fetch(url);
      const data = await res.json();

      if (data) {
        setRestaurants(data);
        setLoading(false);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, [url]);

  if (loading) {
    return <div>Loading please wait</div>;
  }

  return (
    <div>
      <div style={{"display": "flex"}}>
        <h1>Restaurants</h1>
        <CreateRestaurant />
      </div>

      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Price Range</th>
                <th>Ratings</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {restaurants.map((item) => (
                <ListRestaurants restaurant={item} key={item.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Restaurants;
