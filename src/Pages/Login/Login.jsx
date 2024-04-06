import React, { useContext } from "react";
import Navber from "../Shared/Navber/Navber";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Login = () => {
  const {singinUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

    const handelLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        e.target.reset();
        singinUser(email,password)
        .then(result => {
          console.log(result.user);
          navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
          console.log(error);
        })
    }
  return (
    <div>
      <Navber></Navber>
      <h2 className="text-center my-4">Login your account</h2>
      <form onSubmit={handelLogin} className=" lg:w-1/2 mx-auto">
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
                <button className="btn btn-primary">Login</button>
              </div>
      </form>
      <p className="text-center mt-4">Dont’t Have An Account ? <Link to='/register' className="border-b text-blue-700 font-bold">Register</Link></p>
    
    </div>
  );
};

export default Login;
