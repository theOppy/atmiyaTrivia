import React from "react";
import ProgressBar from "react-customizable-progressbar";

const ProgressBars = ({ progress, setProgress }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <ProgressBar
          radius={70}
          progress={progress}
          strokeWidth={28}
          strokeColor="blue"
          strokeLinecap="butt"
          trackStrokeWidth={14}
          trackStrokeLinecap="butt"
          cut={120}
          rotate={-210}
        ></ProgressBar>
        <div className="fixed  flex text-center justify-center text-white ">
          <p className="text-2xl text-white font-bold">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
