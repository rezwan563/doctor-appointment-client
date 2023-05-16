import React from "react";

const BookNow = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
   return (
      <div className="">
    <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                placeholder="John"
                className="input input-bordered"
              />
            </label>
          </div>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <span>Email</span>
            <input
              type="email"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <label className="input-group">
            <span>Date</span>
            <input
              type="date"
              placeholder=""
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Department</span>
          </label>
          <label className="input-group">
            <span>Department</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <label className="input-group">
            <span>Phone number</span>
            <input type="tel" placeholder="" className="input input-bordered" />
          </label>
        </div>
        <input
          className="w-full hover:text-white mt-8 p-3 bg-green-500"
          type="submit"
          value="Submit"
        />
    </form>
      </div>
  );
};

export default BookNow;
