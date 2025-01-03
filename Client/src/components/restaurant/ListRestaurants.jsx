import "./css/ListRestaurant.css";

function ListRestaurants({ restaurant }) {
  return (
    <>
      <tr key={restaurant.id}>
        <td>{restaurant.name}</td>
        <td>{restaurant.location}</td>
        <td>{restaurant.price_range}</td>
        <td><button>Update</button></td>
        <td><button>Delete</button></td>
      </tr>
    </>
  );
}

export default ListRestaurants;
