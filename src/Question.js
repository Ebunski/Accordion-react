import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  //alternatively: storing the data in state of App with the show property and using css to decide whether toshow or not.
  //derived state
  const [show, setShow] = useState(false);
  const { title, info } = props;

  function handleToggle() {
    setShow(!show);
  }

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleToggle}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info} </p>}
    </article>
  );
};

export default Question;
