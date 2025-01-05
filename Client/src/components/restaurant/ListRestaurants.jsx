import "./css/ListRestaurant.css";
import DeleteRestaurant from "./DeleteRestaurant";
import EditRestaurant from "./EditRestaurant";

function ListRestaurants({ restaurant }) {
  return (
    <>
      <tr key={restaurant.id}>
        <td>{restaurant.name}</td>
        <td>{restaurant.location}</td>
        <td>{restaurant.price_range}</td>
        <td><EditRestaurant restaurant={restaurant}/></td>
        <td><DeleteRestaurant restaurant={restaurant}/></td>
      </tr>
    </>
  );
}

export default ListRestaurants;
