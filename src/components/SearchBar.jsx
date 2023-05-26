import React from "react";

export const SearchBar = ({
  handleTarget,
  handleSearch,
  target,
  handleClick,
}) => {
  return (
    <div className="container-input">
      <label className="label-container">
        <p>Find your country🙌</p>
        <div className="d-flex">
          <input
            placeholder="Search country"
            className="countries-input"
            onChange={handleTarget}
            onKeyDown={handleSearch}
            type="text"
            value={target}
          />
          <i onClick={handleClick} className="bx bx-search-alt"></i>
        </div>
      </label>
    </div>
  );
};
