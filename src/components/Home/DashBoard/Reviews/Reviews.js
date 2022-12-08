import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import "./Reviews.css";
const Reviews = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = data => {
    // console.log(data);
    axios.post("https://motorcycle-server.onrender.com/reviews", data).then(res => {
      console.log(res);
      if (res.data.insertedId) {
        alert("Reviews Successfully");
        reset();
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto shadow-lg p-5">
          <h1>ADD YOUR REVIEWS..</h1>
          <form className="review-from" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" defaultValue={user.email} {...register("email")} />
            <input type="text" placeholder="enter your name" {...register("userName")} />
            <input
              type="text"
              placeholder="enter img link"
              {...register("img", { required: true })}
            />

            <select {...register("ratings")}>
              <option>Ratings</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <textarea placeholder="Write your comments....." {...register("description")} />
            <input type="submit" className="bg-success btn text-light" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
