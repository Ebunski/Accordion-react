import React from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  //no need to store data in state since data is not modified or filtered i.e remains same
  const question = data.map((x) => <SingleQuestion key={x.id} {...x} />);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers and Login</h3>
        <div>{question}</div>
      </div>
    </main>
  );
}

export default App;
