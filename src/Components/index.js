import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((count) => count + 1);
  const handleDecrement = () => setCount((count) => count - 1);
  const handleReset = () => setCount((count) => 0);
  const renderHeader = <h1>This is sample counter</h1>;
  const renderCount = <h2>{count}</h2>;
  const renderButtons = (
    <p>
      <button
        className="btn btn-increment text-white"
        onClick={handleIncrement}
      >
        + Increment
      </button>
      <button className="btn btn-reset text-white" onClick={handleReset}>
        Reset
      </button>
      <button
        className="btn btn-decrement text-white"
        onClick={handleDecrement}
      >
        - Decrement
      </button>
    </p>
  );
  return (
    <div className="App">
      {renderHeader}
      {renderCount}
      {renderButtons}
    </div>
  );
}
