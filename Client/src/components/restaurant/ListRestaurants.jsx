import { NavLink } from "react-router-dom";
import "./css/ListRestaurant.css";
import DeleteRestaurant from "./DeleteRestaurant";
import EditRestaurant from "./EditRestaurant";

function ListRestaurants({ restaurant }) {
  return (
    <>
      <tr key={restaurant.id}>
        <td><NavLink to={`/reviews/${restaurant.id}`}>{restaurant.name}</NavLink></td>
        <td>{restaurant.location}</td>
        <td>{restaurant.price_range}</td>
        <td>Stars</td>
        <td style={{display: "flex"}}>
          <EditRestaurant restaurant={restaurant}/>
          <DeleteRestaurant restaurant={restaurant}/>
        </td>
      </tr>
    </>
  );
}

export default ListRestaurants;
