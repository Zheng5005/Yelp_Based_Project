import { NavLink } from "react-router-dom";
import "./css/ListRestaurant.css";
import DeleteRestaurant from "./DeleteRestaurant";
import EditRestaurant from "./EditRestaurant";
import Stars from "../stars/Stars";

function ListRestaurants({ restaurant }) {
  return (
    <>
      <tr key={restaurant.id}>
        <td><NavLink to={`/reviews/${restaurant.id}`}>{restaurant.name}</NavLink></td>
        <td>{restaurant.location}</td>
        <td>{restaurant.price_range}</td>
        <td><Stars rating={restaurant.avg_rating}/></td>
        <td style={{display: "flex"}}>
          <EditRestaurant restaurant={restaurant}/>
          <DeleteRestaurant restaurant={restaurant}/>
        </td>
      </tr>
    </>
  );
}

export default ListRestaurants;
