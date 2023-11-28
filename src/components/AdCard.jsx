import React from "react";

function AdCard({ advertisement }) {
  return (
    <div className="card mb-4 col-md-4">
      <img
        className="card-img-top"
        src={advertisement.imageUrl}
        alt={advertisement.title}
      />
      <div className="card-body">
        <h5 className="card-title">{advertisement.title}</h5>
        <p className="card-text">{advertisement.description}</p>
        <p className="card-text">Contact: {advertisement.contact}</p>
      </div>
      <div
        className="card-footer text-center"
        onClick={() => {
          alert(`Contact: ${advertisement.contact}`);
        }}
      >
        <a href="#" class="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  );
}

export default AdCard;
