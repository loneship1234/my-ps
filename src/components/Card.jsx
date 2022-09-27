import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../img/doom eternal.jpg";
import Rating from "./Rating";
import { useCart } from "react-use-cart";
// import { SearchContext } from "../Context/SearchBarContext";
import { ToastContainer, toast } from "react-toastify";
// Icons
import { BiCart } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
//
export function Card({
  textSize,
  // img,
  price,
  // rate,
  imgUrl,
  id,
  name,
  items,
  // description,
  // link,
}) {
  const navigate = useNavigate();
  const clickHandeler = () => {
    addItem(items);
    toast(`item added,click to see you're cart 😎 `, {
      position: "top-right",
      progressStyle: { backgroundColor: "#ffff" },
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "dark",
      pauseOnHover: false,
      onClick: () => navigate("/add-to-cart"),
      draggable: true,
      progress: undefined,
    });
  };
  const { addItem } = useCart();
  return (
    <div className="lg:w-full lg:h-60 h-72  w-[80vw]  rounded-lg overflow-hidden cursor-pointer  group  mx-auto">
      <div
        // to={`/game-catalog/${id}`}
        className=" transition-all lg:w-[22.5em] w-[23em] h-64 lg:p-0 p-0  rounded-lg overflow-hidden cursor-pointer bg-gray-800   group "
      >
        <p
          className={
            " absolute  rotate-[270deg]  mt-20 select-none  z-10 font-medium text-gray-300 capitalize text-sm  "
          }
          style={{ marginLeft: `-${textSize}px` }}
        >
          {name}
        </p>
        <Link to={`/game-catalog/${id}`}>
          {" "}
          <img
            src={imgUrl}
            alt=""
            className=" w-full  h-full rounded-lg  bg-gradient-to-t from-black to-transparent   transition-all object-cover active:scale-95 group-hover:scale-105"
          />
        </Link>
        <div className="bg-gradient-to-t from-black to-transparent z-10  transition-all lg:pr-2 pr-10 relative bottom-16 lg:h-12 h-20 flex items-center overflow-hidden">
          <p className="flex items-center font-semibold select-none ml-3 mb-1">
            {price} <p className="text-sm">.99</p>
            <FaDollarSign />
          </p>
          <button
            onClick={clickHandeler}
            className="bg-white text-black px-5 py-2 mr-1 mb-1 rounded-md ml-auto capitalize font-semibold flex items-center active:scale-95 transition-all"
          >
            buy it <BiCart className="ml-1 w-5 h-5" />
          </button>
        </div>
      </div>{" "}
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
export function CartCard({ imgUrl, name, rate, price, CloseBtn, index }) {
  return (
    <div
      key={index}
      className="even:card-bg flex items-center lg:flex-row flex-col  lg:h-auto h-72  w-full py-5 justify-around"
    >
      <img src={imgUrl} className="w-56 rounded-md" alt="" />
      <p className="capitalize text-lg">{name}</p>
      <Rating star={rate} className="scale-150" />
      <p className="flex items-center text-lg">
        <FaDollarSign /> {price} <span className="text-base">.99</span>
      </p>
      <AiOutlineClose
        onClick={CloseBtn()}
        className="cursor-pointer active:scale-95 transition-all"
        size={25}
      />
    </div>
  );
}
export function CardSecondary({ name, IsNew, imgUrl, id }) {
  return (
    <React.Fragment>
      <Link to={`/game-catalog/${id}`}>
        <div className="lg:w-80 w-full h-[22.5em]  lg:h-[22em] rounded-md  overflow-hidden bg-mid-black hover:shadow-xl hover:shadow-zinc-900 transition-all duration-500 cursor-pointer active:scale-95">
          <img
            src={imgUrl}
            className="object-cover w-full h-48"
            alt=""
            srcset=""
          />
          <div className="  w-full h-60 px-4 py-2 overflow-hidden ">
            <div className="flex items-center mt-1">
              <h2 className="font-medium capitalize opacity-90 mb-[3px] text-lg select-none">
                {name}
              </h2>
              {IsNew && <span class="badge ml-2 capitalize">new</span>}
            </div>
            <p className="font- text-justify opacity-50 leading-6 text-sm mt-2 select-none line-clamp-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis nesciunt reprehenderit, voluptate et expedita nisi cum
              iste illo quas exercitationem. Facere excepturi modi nam officia?
              Iusto rerum doloremque libero laudantium cupiditate vitae magnam
              doloribus sunt.
            </p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
//
export function CaruselCard({
  id,
  category,
  imgUrl,
  name,
  company,
  price,
  rate,
}) {
  return (
    <Link to={`/game-catalog/${id}`}>
      <div className="x lg:h-96 h-[22.5em] lg:w-[250px] w-10/12  mx-auto rounded-3xl card-bg cursor-pointer  ">
        <img
          src={imgUrl}
          className="rounded-3xl w-full h-[12em] lg:h-[14em]  transition-all "
          alt=""
        />
        <div className="pl-5 ">
          <p className="  font-medium lg:text-base text-lg -tracking-wider capitalize mt-3 group-hover:absolute">
            {name}
          </p>
          <Rating star={rate} className="lg:scale-110 scale-110" showNum />
          <div className="">
            <p className=" text-[14px] lg:text-[13px]  text-gray-400  mt-1">
              {category}
            </p>
          </div>
          <div className="">
            <p className="text-[14px] lg:text-[13px] text-gray-400  mt-px">
              {company}
            </p>
          </div>
          <p className=" font-medium flex  items-center lg:text-base text-base tracking-wider capitalize mt-4">
            <FaDollarSign /> {price} <span className="text-sm">.99</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export function TrCard() {
  return (
    <div className="border-[0.0001px] rounded-md h-72 w-full px-6">
      <div className="w-full h-3/6 bg-blue- flex items-center">
        <img src={img} className="rounded-full w-20 h-20" alt="" />
        <div className="pl-3">
          <Rating showNum={false} />
          <p className="mt-1 text-lg font-medium text-gray-300">parviz</p>
        </div>
      </div>
      <div className="w-full h-3/6 text-justify ">
        <p className="line-clamp-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          tempore amet, quidem numquam beatae vero adipisci velit, ad id tempora
          nisi ipsa quam sed. Vel numquam accusantium ipsam voluptas? Qui.
        </p>
      </div>
    </div>
  );
}
export function SearchCard({ imgUrl, name, price, link }) {
  // const { SearchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div
    // onClick={setSearchValue([])}
    >
      <Link
        to={`game-catalog/${link}`}
        className="capitalize flex  px-5 border-b-[0.1px] items-center border-slate-600 py-4"
      >
        <img src={imgUrl} alt="" className="w-24 rounded-md" />
        <div className="flex items-center justify-around w-full ">
          <p className="opacity-80 ">{name}</p>
        </div>
        <div className=" flex items-center justify-center">
          <p className="opacity-80 flex items-center">
            <FaDollarSign />
            {price}
            <span className="text-sm">.99</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
