import React from "react";
import "./style.css";

function ProductCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
        <img alt="Apple Mouse" src="https://firebasestorage.googleapis.com/v0/b/friendfinder-ae18a.appspot.com/o/Wish%20List%20Products%2Fapplemouse.jpg?alt=media&token=de079a06-63bf-4b82-8907-5ffbe1956469" />

      </div>
      <div className="content">
        <p>
            {/* <strong>Name:</strong> {props.name} */}
            <strong>Apple Mouse</strong> 
        </p>
            {/* <strong>Occupation:</strong> {props.occupation} */}
            $59.99 
        <br />
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove"></span> */}
        <button type="button" className="btn btn-secondary">Add to Wish List</button>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove"></span>
    </div>

    
  );
}

export default ProductCard;
