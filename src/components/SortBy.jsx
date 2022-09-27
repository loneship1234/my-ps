import React, { useState, useContext ,useMemo, useEffect } from "react";
// import Data from "../data/Data";
import { Context } from "../Context/GameCatalogContext";
import games from "../data/Data";

function SortBy() {
  const [Select, setSelect] = useState("default");
  const { SortBy, setSortBy } = useContext(Context);
  const SelectHandeler = (e) => {
    setSelect(e.target.value);
    localStorage.setItem("sort", e.target.value);
  };
  useMemo(() => {
    if (Select === "default") {
      setSortBy([...games]);
      // localStorage.setItem("Sort", Select);
    } else if (Select === "popular") {
      setSortBy([...games].sort((a, b) => b.rate - a.rate));
      // localStorage.setItem('Sort',Select)
    } else if (Select === "newest") {
      setSortBy([...games].sort((a, b) => (a.date > b.date ? -1 : 1)));
      // localStorage.setItem("Sort", Select);
    } else if (Select === "oldest") {
      setSortBy([...games].sort((a, b) => (a.date > b.date ? 1 : -1)));
      // localStorage.setItem('Sort',Select)
    } else if (Select === "name") {
      setSortBy([...games].sort((a, b) => (a.id > b.id ? 1 : -1)));
      // localStorage.setItem("Sort", Select);
    } else if (Select === "price") {
      setSortBy([...games].sort((a, b) => b.price - a.price));
      // localStorage.setItem("Sort", Select);
    }
    const lastSelected = localStorage.getItem("sort");
    setSelect(lastSelected);
  }, [ Select, setSortBy]);
  return (
    <div className="text-white flex items-center">
      {/* <p>{Select}</p> */}
      <p className="capitalize  text-md font-medium">sort by</p>
      <select
        className="bg-black border-none focus:border-none outline-none capitalize  text-md font-medium border-gray-500  rounded-md px-2"
        value={Select}
        onChange={SelectHandeler}
      >
        <option value="default">default</option>
        <option value="popular">popular</option>
        <option value="newest">newest</option>
        <option value="oldest">oldest</option>
        <option value="name">name</option>
        <option value="price">price</option>
      </select>
    </div>
  );
}

export default SortBy;
