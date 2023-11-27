import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import "./SearchInput.css";

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedOnSearch = debounce(onSearch, 500);

  useEffect(() => {
    if (searchTerm === "") {
      onSearch("");
    } else {
      debouncedOnSearch(searchTerm);
    }

    return () => {
      debouncedOnSearch.cancel();
    };
  }, [searchTerm, onSearch, debouncedOnSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
