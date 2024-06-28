import React, { useState } from "react";

function Card({ cart, setCart, data }) {
  const [isAddButton, setIsAddButton] = useState(true);
  //!The code for the cards
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {/* Checking whether the product has sale button or not and the text sale is displayed */}
          {data.isSale ? data.sale : null}
        </div>
        
        <img className="cardimg card-img-top" src={data.image}  alt="..." />
        
        
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.productName}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {/* Checking the condition for the Stars for displaying */}
              <div
                className={
                  data.productName === "Special Item" ||
                  data.productName === "Popular Item"
                    ? "bi-star-fill"
                    : ""
                }
              ></div>
            </div>
            {/* Checking the condition for the displaying the price whether it should be displayed normally or it should have a strike-through */}
            <span
              className={
                data.isPrice1 ? "text-muted text-decoration-line-through" : ""
              }
            >
              {data.price1}
            </span>
            {data.price2}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {/* Code for toggle between the Add to cart and Remove from cart */}
          <div className="text-center">
            {isAddButton ? (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart + 1);
                  setIsAddButton(false);
                }}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart - 1);
                  setIsAddButton(true);
                }}
              >
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;