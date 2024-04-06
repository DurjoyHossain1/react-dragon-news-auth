import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex my-4">
      <button className=" btn btn-secondary text-white">Breaking News</button>
      <Marquee pauseOnHover={true} speed={150} className="cursor-pointer">
        <Link to='/' className="mx-20">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="mx-20">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="mx-20">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
