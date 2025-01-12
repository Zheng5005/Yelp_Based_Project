import Stars from "../stars/Stars";
import "./Card.css"

function Card({ review }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h6>{review.name}</h6>
          <p><Stars rating={review.rating}/></p>
        </div>
        <div className="card-body">
          <p>{review.review}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
