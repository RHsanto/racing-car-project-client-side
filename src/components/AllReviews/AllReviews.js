import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Rating from "react-rating";
import "./AllReviews.css";
const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://motorcycle-server.onrender.com/savereviews")
      .then(res => res.json())
      .then(data => setReviews(data.slice(1, 5)));
  }, []);
  return (
    <div className="reviews-section">
      <div className="container text-light ">
        <div className="row ">
          <div className="col review-slider">
            <Carousel>
              {reviews.map(review => (
                <Carousel.Item key={review._id}>
                  <div className="slider ">
                    <div className="slider-img">
                      <img className="rounded-circle mb-4" src={review.img} alt="" />
                      <h4>
                        <span className="me-2 ">Ratings : </span>
                        <Rating
                          className="rating text-warning"
                          emptySymbol="far fa-star  text-warning"
                          fullSymbol="fas fa-star  text-warning"
                          readonly
                          initialRating={review.ratings}
                        ></Rating>
                      </h4>
                    </div>
                    <div className="reviews-info ">
                      <h4 className="col-md-6 d-inline-block lh-base mt-3 fw-bolder">
                        {review.description}
                      </h4>
                      <h6 className=" my-5 text-warning">
                        <strong>{review.userName}</strong>
                      </h6>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
