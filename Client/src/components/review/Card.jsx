import "./Card.css"

function Card({ review }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h6>{review.name}</h6>
          <p>{review.rating} Stars</p>
        </div>
        <div className="card-body">
          <p>{review.review}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
