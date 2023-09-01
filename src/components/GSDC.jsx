import React from "react";
import "../index.css";
import Typewriter from "typewriter-effect";
import ConfettiExplosion from "react-confetti-explosion";

const GSDC = ({ progress, greeting, setGreeting }) => {
  console.log(progress);

  if (progress === 100) {
    setInterval(() => {
      setGreeting(true);
    }, 8000);
  }
  return (
    <div
      className={`flex flex-col  justify-center items-center gap-8 ${
        greeting ? "h-screen" : ""
      }`}
    >
      {greeting && <ConfettiExplosion />}
      <div
        onClick={() => setGreeting(true)}
        className={`flex poppins  hover:text-4xl translate transform duration-200 delay-75 ease-in-out
      ${greeting ? "text-5xl" : "text-2xl"} justify-center items-center gap-4 `}
      >
        {progress === 100 && (
          <img
            src="https://studentorgs.engineering.asu.edu/wp-content/uploads/sites/35/2023/01/GDSC-Crop.png"
            alt=""
            className="w-auto h-9 "
          />
        )}
        <div className="text-center flex gap-3 justify-center items-center">
          {(progress === 20 ||
            progress === 40 ||
            progress === 60 ||
            progress === 80 ||
            progress === 100) && (
            <p className="text-white translate ">
              <span className="text-red-600">G</span>oogle
            </p>
          )}
          {(progress === 40 ||
            progress === 60 ||
            progress === 80 ||
            progress === 100) && (
            <p className="text-white">
              <span className="text-blue-600">D</span>eveloper
            </p>
          )}
          {(progress === 60 || progress === 80 || progress === 100) && (
            <p className="text-white">
              <span className="text-green-600">S</span>tudents
            </p>
          )}
          {(progress === 80 || progress === 100) && (
            <p className="text-white">
              <span className="text-yellow-400">C</span>lub
            </p>
          )}
          <main>
            {progress === 100 && (
              <div className="flex gap-2  text-center text-4xl text-blue-300">
                <p className=" ">
                  <span className="">at A</span>tmiya
                </p>
                <p className="">
                  <span className="">U</span>niversity{" "}
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
      {greeting && (
        <div className="text-9xl coding  text-green-600">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("Wealco")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcomes You")
                .pauseFor(800)
                .typeString("!")
                .start();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GSDC;
