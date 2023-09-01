import React from "react";
import ProgressBar from "react-customizable-progressbar";
import "../index.css";

const Tasks = ({ tasks, setTasks }) => {
  return (
    <div className="flex flex-col items-center h-full mt-7 mb-2 ">
      <p className="text-white text-2xl font-bold">Accuracy Level</p>
      <div>
        <div className="flex justify-center items-center mt-3">
          <ProgressBar
            radius={70}
            progress={tasks > 0 ? 100 : 0}
            strokeWidth={30}
            strokeColor="green"
            strokeLinecap="butt"
            trackStrokeWidth={14}
            trackStrokeLinecap="butt"
            cut={120}
            rotate={-210}
          ></ProgressBar>
          <div className="fixed  flex text-center justify-center text-white ">
            <p className="text-2xl text-purple font-bold">
              {tasks > 0 ? 100 : 0}%
            </p>
          </div>
        </div>
        <div className="relative -mt-2 ">
          <div
            className="
                absolute 
                inset-0 
                flex 
                items-center
              "
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm"></div>
        </div>

        <div className="flex flex-col text-xl poppins text-white justify-center items-center mt-7">
          <p>Questions</p>
          <p>{tasks}/5</p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
