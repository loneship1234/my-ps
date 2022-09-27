import React, { useContext } from "react";
import { IoGridOutline, IoColorWandOutline } from "react-icons/io5";
import { IoMdGrid } from "react-icons/io";
import SortBy from "../components/SortBy";
// import { BsEmojiSunglassesFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "../Context/GameCatalogContext";
function TopFilter({ setSortBy }) {
  const { setBig, setSmall, Effect, setEffect } = useContext(Context);
  const BigHandeler = () => {
    setSmall(true);
    setBig(false);
  };
  const SmallHandeler = () => {
    setSmall(false);
    setBig(true);
  };
  const EffectHandeler = () => {
    Effect ? setEffect(false) : setEffect(true);
    toast(`Effect Has Been Changed 🤩`, {
      position: "top-right",
      progressStyle: { backgroundColor: "#ffff" },
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "dark",
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="flex items-center  w-full h-10 pl-6 pr-5 lg:pl-[75px] lg:pr-[75px]  border-t-[1px] border-gray-800 ">
      <SortBy setSortBy={setSortBy} />
      <div className=" flex ml-auto items-center ">
        <IoColorWandOutline
          onClick={EffectHandeler}
          className="w-6 h-6 mr-3 cursor-pointer active:scale-90 transition-all "
        />

        <IoGridOutline
          className="w-6 h-6 mr-1 cursor-pointer active:scale-90 transition-all"
          onClick={BigHandeler}
        />
        <IoMdGrid
          className="w-7 h-7  cursor-pointer active:scale-90 transition-all"
          onClick={SmallHandeler}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default TopFilter;
