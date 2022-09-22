import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { SearchContext } from "../Context/SearchBarContext";
import { SearchCard } from "./Card";
import Data from "../data/Data";
function SearchBar() {
  const [SearchValue, setSearchValue] = useState([]);
  const ChangHandeler = (e) => {
    const SearchWord = e.target.value;
    const newFilter = Data.filter((value) => {
      return value.name.toLowerCase().includes(SearchWord.toLowerCase());
    });
    if (SearchWord === "") {
      setSearchValue([]);
    } else {
      setSearchValue(newFilter);
    }
  };
  return (
    <React.Fragment>
      <SearchContext.Provider value={{ SearchValue, setSearchValue }}>
        <input
          // value={SearchValue}
          onChange={ChangHandeler}
          type="text"
          placeholder="Search . . ."
          className="ml-[21em] hidden lg:flex mr-0 w-[30em] h-[43px]  pl-6 rounded-l-2xl rounded-r-lg border-2 border-slate-800 bg-transparent focus:outline-slate-800 focus:border-slate-800"
        />
        <div className="hidden lg:flex bg-gradient-to-tr from-blue-400 to-violet-500  p-[11px] rounded-xl cursor-pointer text-2xl relative shadow-custom right-11">
          <FiSearch className="text-black" />
        </div>
        {SearchValue.length !== 0 && (
          <div className="w-[23em] max-h-[23em] overflow-y-scroll absolute rounded-md z-50 top-[71px] right-[35.5em] bg-black">
            {SearchValue.slice(0, 5).map((e) => {
              return (
                <SearchCard
                  SearchValue={setSearchValue}
                  link={e.id}
                  imgUrl={e.imgUrl}
                  name={e.name}
                  price={e.price}
                />
              );
            })}
          </div>
        )}
      </SearchContext.Provider>
    </React.Fragment>
  );
}

export default SearchBar;
