import React from "react";
import { Quizes } from "../assets/Questions/questions";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import "../index.css";
import ConfettiExplosion from "react-confetti-explosion";

const Quiz = ({ progress, setProgress, tasks, setTasks }) => {
  const [answer, setAnswer] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [explosion, setExplosion] = React.useState(null);

  const selectedQuiz = Quizes[currentPage];

  console.log(progress);

  const handleClick = (option, answer) => {
    if (option !== answer) {
      setAnswer(false);
    }
    if (option === answer) {
      setProgress(progress + 20);
      setTasks(tasks + 1);
      setAnswer(true);
      setExplosion(true);
    }
    setInterval(() => {
      setExplosion(false);
    }, 6000);
  };

  return (
    <div className="text-white flex flex-col [word-spacing:4px] items-center h-full justify-around">
      <div className="absolute h-screen z-30">
        {explosion && <ConfettiExplosion />}
      </div>
      <p className="text-5xl font-bold  text-green-50 w-10/12 raleway  text-center -mb-28 mt-10">
        {selectedQuiz.question}
      </p>

      <ul className="w-7/12 flex gap-1  flex-col text-lg mt-24">
        {Object.keys(selectedQuiz.options).map((option) => (
          <div className="flex gap-3 items-center  justify-center" key={option}>
            <button
              onClick={() =>
                handleClick(selectedQuiz.options[option], selectedQuiz.answer)
              }
              className={`poppins  text-2xl text-white font-bold
                bg-blue-600 hover:bg-blue-900  
                transition-all ease-in-out  w-11/12 ${
                  answer ? "focus:bg-green-600" : "focus:bg-red-600"
                } hover:-translate-y-1   duration-300 focus:border-white focus:border-2 focus:tranform focus:text-5xl focus:text-black  focus:ease-out
                hover:translate hover:transform  border-black outline-black  
                hover:border-2 hover:border-white  text-start my-1  px-5 py-3 rounded-xl font-bold`}
            >
              {selectedQuiz.options[option]}
            </button>
          </div>
        ))}
      </ul>

      {tasks <= 4 && (
        <div
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          className="flex gap-3 -mt-10 px-3 py-3  bg-black rounded-lg justify-center items-center cursor-pointer hover:bg-white hover:text-black trasnlate duration-200"
        >
          <p className="text-xl font-bold  ">Next</p>
          <button>
            <TbPlayerTrackNextFilled size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
