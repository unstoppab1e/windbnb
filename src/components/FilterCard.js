import React, { useState } from "react";
import "./filterCard.css";

export const FilterCard = ({ isActive, toggleFilterCard }) => {
  if (isActive) {
    return (
      <div className="container" onClick={() => toggleFilterCard()}>
        <div
          className={["filter-card", isActive && "filter-card--active"].join(
            " "
          )}
          onClick={(e) => {
            console.log("I am stopping propogation of events");
            e.stopPropagation();
          }}
        >
          <button
            onClick={(e) => {
              console.log("HELLO");
              e.stopPropagation();
            }}
          >
            {" "}
            HELLO{" "}
          </button>
          DUMMY
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
