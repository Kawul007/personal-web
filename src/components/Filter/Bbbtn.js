import React, { useEffect, useState } from "react";
import { Wrapper } from "./Filter.index";

const Bbbtn = ({ setActiveGere, activeGere, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGere === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGere)
    );
    setFiltered(filtered);
  }, [activeGere]);

  return (
    <Wrapper>
      <div className="bbbtn-container">
        <button
          className={activeGere === 0 ? "active" : ""}
          onClick={() => setActiveGere(0)}
        >
          All
        </button>
        <button
          className={activeGere === 35 ? "active" : ""}
          onClick={() => setActiveGere(35)}
        >
          Comedy
        </button>
        <button
          className={activeGere === 28 ? "active" : ""}
          onClick={() => setActiveGere(28)}
        >
          Action
        </button>
      </div>
    </Wrapper>
  );
};

export default Bbbtn;
