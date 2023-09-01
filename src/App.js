import React from "react";
import "./App.css";
import ProgressBars from "./components/ProgressBars";
import Quiz from "./components/Quiz";
import GSDC from "./components/GSDC";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
  const [progress, setProgress] = React.useState(0);
  const [tasks, setTasks] = React.useState(0);
  const [greeting, setGreeting] = React.useState(false);

  return (
    <div className="bg w-screen h-screen overflow-hidden flex flex-col  ">
      <div
        className={`w-screen ${
          greeting ? "h-screen" : "h-auto"
        } py-6 mt-2 bg-black bg-opacity-70 text-white`}
      >
        <GSDC
          progress={progress}
          greeting={greeting}
          setGreeting={setGreeting}
        />
      </div>

      <div
        className={`flex gap-4 p-2 overflow-hidden bg-slate-900 ${
          greeting ? "hidden" : ""
        }`}
      >
        <main className="w-2/12 h-2/6 bg-gray-800 rounded-lg p-2 flex flex-col items-center">
          <p className="font-bold text-2xl texg-white text-white my-1">
            Progress Bar
          </p>
          <ProgressBars progress={progress} setProgress={setProgress} />
        </main>
        <main className="h-full w-9/12 bg-gray-800 rounded-lg p-3 ">
          <Quiz
            progress={progress}
            setProgress={setProgress}
            tasks={tasks}
            setTasks={setTasks}
          />
        </main>

        <main className="h-screen w-2/12 flex flex-col rounded-lg gap-3">
          <div className="flex justify-center h-3/6 flex-col  bg-gray-800">
            <Tasks tasks={tasks} setTasks={setTasks} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
