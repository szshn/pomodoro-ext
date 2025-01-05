import React from "react";

const Clock = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className="flex w-[200px] h-[200px] rounded-full bg-white shadow-md justify-center items-center">
        <div className="flex w-[180px] h-[180px] rounded-full bg-[#FB8C78] justify-center items-center cursor-pointer">
          <div className="w-14 h-14 rounded-full bg-white shadow-md "></div>
          {/*<div className="block w-3 h-5 bg-slate-800"></div>*/}
        </div>
      </div>
    </div>
  );
};

export default Clock;
