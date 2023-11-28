import React from "react";
import AdCard from "./AdCard";

function AdList({ advertisements }) {
  return (
    <div id="advertisements" className="row">
      {advertisements.map((advertisement) => (
        <AdCard key={advertisement.title} advertisement={advertisement} />
      ))}
    </div>
  );
}

export default AdList;
