import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, name, phone, floor, img} = service
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-36 md:w-48"
          src={img}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
         <Link to={`/book/${_id}`}> <button className="btn bg-green-500">Book Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
