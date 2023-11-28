import React from "react";
import AdCard from "./AdCard";

function AdList({ advertisements }) {
  return (
    <div id="advertisements" className="row">
      <div className="m-4">
        <h3>Advertisement List</h3>
      </div>
      {advertisements.map((advertisement) => (
        <AdCard key={advertisement.title} advertisement={advertisement} />
      ))}
    </div>
  );
}

export default AdList;
