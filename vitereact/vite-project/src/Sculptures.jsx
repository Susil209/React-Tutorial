import { useState } from "react";
import { sculptureList } from "./data";

export default function Sculpture() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handlePrevClick() {
    if(index>0){
        setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if(index < sculptureList.length-1){
        setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
      <>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculptureList.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <button
        style={{ margin: "10px", display: "flex" }}
        onClick={handleMoreClick}
      >
        {showMore ? "Hide" : "Show"} details
      </button>

      {showMore && <p>{sculpture.description}</p>}

      <img
        style={{ height: "30vh", width: "10rem" }}
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
