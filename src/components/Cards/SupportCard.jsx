import React from "react";
import { Link } from "react-router-dom";

const SupportCard = ({ slide }) => {
  return (
    <div className="h-[400px] p-4 relative overflow-hidden bg-gradient-to-l from-mainColor to-[#5d759c] rounded-2xl shadow-lg">
      <Link to={`/our-seasonal-programs/${slide?.slug}`}>
        <img
          src={slide?.image}
          alt="support-img"
          className="w-full h-[350px] object-cover"
        />
      </Link>
      <div className="absolute flex justify-center pt-14 left-1/2 translate-x-[-50%] bottom-[-370px] size-[500px] rounded-full bg-gradient-to-l from-mainColor to-[#5d759c]">
        <Link to={`/our-seasonal-programs/${slide?.slug}`}>
          <h3 className="max-w-[315px] text-3xl text-center text-[#223C66] font-semibold">
            {slide?.name}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default SupportCard;
