import React from "react";
import AdCard from "./AdCard";

function AdList({ advertisements }) {
  return (
    <div id="advertisements" className="row m-5">
      <div className="m-2">
        <h3>Advertisement List</h3>
      </div>
      {advertisements.map((advertisement) => (
        <AdCard key={advertisement.title} advertisement={advertisement} />
      ))}
    </div>
  );
}

export default AdList;
