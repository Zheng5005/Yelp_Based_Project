import "./css/ListRestaurant.css";
import DeleteRestaurant from "./DeleteRestaurant";
import EditRestaurant from "./EditRestaurant";

function ListRestaurants({ restaurant }) {
  return (
    <>
      <tr key={restaurant.id}>
        <td><a href="#">{restaurant.name}</a></td> 
        <td>{restaurant.location}</td>
        <td>{restaurant.price_range}</td>
        <td>Stars</td>
        <td>
          <EditRestaurant restaurant={restaurant}/>
          <DeleteRestaurant restaurant={restaurant}/>
        </td>
      </tr>
    </>
  );
}

export default ListRestaurants;
