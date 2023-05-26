import React from "react";
import { ErrorSearch } from "./ErrorSearch";

export const AllCountries = ({
  img,
  name,
  capital,
  independent,
  region,
  subregion,
  area,
}) => {
  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <i className="bx bxs-city"></i> Capital: {capital}
          </p>
          <div className="dependient-container">
            <i
              className={
                independent
                  ? "bx bxs-circle independent"
                  : "bx bxs-circle non-independent"
              }
            ></i>
            Independence status
          </div>
          <p>
            <i className="bx bx-world"></i> Region: {region}
          </p>
          <p><i className='bx bx-map' ></i> Subregion: {subregion}</p>
          <p><i className='bx bx-area' ></i> Area: {area}</p>
        </div>
      </div>
    </>
  );
};
