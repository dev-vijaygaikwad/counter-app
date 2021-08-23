import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [countHistory, setCountHistory] = useState([]);

  const handleCountHistory = (action) =>
    setCountHistory((history) => [...history, { action: action }]);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    handleCountHistory("INCREMENT");
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);

    handleCountHistory("DECREMENT");
  };
  const handleReset = () => {
    setCount((count) => 0);
    handleCountHistory("RESET");
  };
  const handleClearHistory = () => setCountHistory([]);
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
      <button className="btn btn-reset text-white" onClick={handleClearHistory}>
        Clear history
      </button>
    </p>
  );
  const renderCountHistory = (
    <>
      <hr />
      <h4>History</h4>
      <ul>
        {countHistory?.map(({ action, count }) => (
          <li key={`${action}`}>
            <label>{action}</label>
          </li>
        ))}
        {}
      </ul>
    </>
  );
  return (
    <div className="App">
      {renderHeader}
      {renderCount}
      {renderButtons}
      {renderCountHistory}
    </div>
  );
}
