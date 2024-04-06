import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2>Login With</h2>
        <button className="btn w-full mt-2">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn w-full mt-2">
          <FaGithub />
          Login With github
        </button>
      </div>
      <div className="p-4">
        <h2 className="mb-4">Login With</h2>
        <a href="" className="flex items-center gap-4 border rounded-t-lg p-3">
          <FaFacebookF />
          <h2>Facebook</h2>
        </a>
        <a href="" className="flex items-center gap-4 border-x p-3">
          <FaTwitter />
          <h2>Twitter</h2>
        </a>
        <a href="" className="flex items-center gap-4 border rounded-b-lg p-3">
          <GrInstagram />
          <h2>Instagram</h2>
        </a>
      </div>

      <div className="p-4">
        <h2 className="mb-4">Q-Zone</h2>
        <div className="space-y-4">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
