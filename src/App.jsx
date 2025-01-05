import React from "react";
import Button from "./components/Button";
import Clock from "./components/Clock";
import Message from "./components/Message";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="bg-gradient-to-b from-lime-200 to-emerald-200 w-[320px] h-[480px] px-2 py-4">
      <h1 className="text-xl font-semibold text-center">Pomodoro Timer</h1>
      <Clock />
      <Timer />
      <Message />
      <Button />
    </div>
  );
}

export default App;
