import React from "react";
import AdCard from "./AdCard";

function AdList({ advertisements }) {
  return (
    <div className="advertisement-list">
      {advertisements.map((advertisement) => (
        <AdCard key={advertisement.title} advertisement={advertisement} />
      ))}
    </div>
  );
}

export default AdList;
