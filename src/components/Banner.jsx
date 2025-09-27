import React from "react";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-20 max-w-[1440px] mx-auto px-4">
        {/* In-Progress Card */}
        <div className="card w-full sm:w-190 bg-[#643FDD] shadow-xl bg-img">
          <div className="card-body items-center text-center p-8 hover">
            <h2 className="card-title text-black text-opacity-80 text-lg font-normal mb-6">
              In-Progress
            </h2>
            <p className="text-black text-7xl font-bold">0</p>
          </div>
        </div>

        {/* Resolved Card */}
        <div className="card w-full sm:w-190 bg-[#36b45a] shadow-xl image-full">
          <div className="card-body items-center text-center p-8">
            <h2 className="card-title text-black text-opacity-80 text-lg font-normal mb-6">
              Resolved
            </h2>
            <p className="text-black text-7xl font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
