import React, { useContext } from "react";
import Navber from "../Shared/Navber/Navber";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
 const {createUser} = useContext(AuthContext)

  const handelRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
   const name = form.get('name');
   const photo = form.get('photo');
   const email = form.get('email');
   const password = form.get('password');

   createUser(email,password)
   .then(result => {
    console.log(result.user);
   })
   .catch(err => {
    console.log(err);
   })
  };

  return (
    <div>
      <Navber></Navber>
      <h2 className="text-center my-4">Register your account</h2>
      <form onSubmit={handelRegister} className=" lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">
        Dont’t Have An Account ?{" "}
        <Link to="/login" className="border-b text-blue-700 font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
