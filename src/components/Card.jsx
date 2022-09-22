import React from "react";
import { Link } from "react-router-dom";
import img from "../img/doom eternal.jpg";
import Rating from "./Rating";
// import { SearchContext } from "../Context/SearchBarContext";
// Icons
import { BiCart } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
//
export function Card({
  textSize,
  // img,
  price,
  // rate,
  // description,
  // link,
  imgUrl,
  id,
  name
}) {
  const clickHandeler = (e) => {
    e.preventDefault();
  };
  return (
    <Link
      to={`/game-catalog/${id}`}
      className="lg:w-full lg:h-60 h-72  w-[80vw]  rounded-lg overflow-hidden cursor-pointer  group  mx-auto"
    >
      <div
        // to={`/game-catalog/${id}`}
        className="active:scale-95 transition-all lg:w-[22.5em] w-[25em] lg:h-64 lg:p-0 p-0 h-7 rounded-lg overflow-hidden cursor-pointer bg-gray-800   group "
      >
        <p
          className={
            " absolute  rotate-[270deg]  mt-20 select-none  z-10 font-medium text-gray-300 capitalize text-sm  "
          }
          style={{ marginLeft: `-${textSize}px` }}
        >
          {name}
        </p>
        <img
          src={imgUrl}
          alt=""
          className=" w-full  h-full rounded-lg  bg-gradient-to-t from-black to-transparent   transition-all object-cover group-hover:scale-105"
        />
        <div className="bg-gradient-to-t from-black to-transparent z-10  transition-all pr-2 relative bottom-16 h-20 flex items-center overflow-hidden">
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
      </div>
    </Link>
  );
}
export function Cardds({ textSize, img, link, id }) {
  const clickHandeler = (e) => {
    e.preventDefault();
    const Container = e.target.parentElement.parentElement;
    const image = Container.childNodes[1].src;
    const name = Container.firstChild.textContent;
    const price = Container.lastChild.firstChild.textContent;
    console.log(name, price, image);
  };
  return (
    // <Link to={`/${link}`} className='lg:w-full lg:h-60 h-72  w-[80vw]  rounded-lg overflow-hidden cursor-pointer  group  mx-auto'>
    <div className="lg:w-full  lg:h-60 h-72  w-[80vw]  rounded-lg overflow-hidden cursor-pointer  group ">
      <p
        className={
          " absolute  rotate-[270deg]  mt-20 select-none  z-10 font-medium text-gray-300 capitalize text-sm  "
        }
        style={{ marginLeft: `-${textSize}px` }}
      >
        {id}
      </p>
      <img
      alt=''
        src={require("../img/" + img + ".jpg")}
        className=" w-full z-0 h-full rounded-lg  bg-gradient-to-t from-black to-transparent lg:group-hover:scale-105 group-active:scale-105 transition-all"
      />
      <div className="bg-gradient-to-t from-black to-transparent z-10 pr-2 relative bottom-16 h-20 flex items-center">
        <p className="flex items-center font-semibold select-none ml-3 mb-1">
          59 <p className="text-sm">.99</p>
          <FaDollarSign />
        </p>
        <button
          onClick={clickHandeler}
          className="bg-white text-black px-5 py-2 mr-1 mb-1 rounded-md ml-auto capitalize font-semibold flex items-center active:scale-95 transition-all"
        >
          buy it <BiCart className="ml-1 w-5 h-5" />
        </button>
      </div>
    </div>
    // </Link>
  );
}
export function CardSecondary({ name, img, IsNew,imgUrl }) {
  return (
    <React.Fragment>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            nesciunt reprehenderit, voluptate et expedita nisi cum iste illo
            quas exercitationem. Facere excepturi modi nam officia? Iusto rerum
            doloremque libero laudantium cupiditate vitae magnam doloribus sunt.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
//
export function c({ img }) {
  return (
    <div className=" w-60 h-60 rounded-lg">
      <img
        src={require("../img/" + img + ".jpg")}
        className="h-full w-full rounded-lg"
        alt=""
      />
      <div className="relative mx-auto w-3/4 bottom-10  rounded-md px-3 glass flex items-center h-14">
        <p className="flex items-center font-semibold  select-none ml-0">
          59 <p className="text-sm">.99</p>
          <FaDollarSign />
        </p>
        <button className="bg-white text-black px-3  py-2 rounded-md ml-auto capitalize font-semibold flex items-center active:scale-90 transition-all">
          buy it <BiCart className="ml-1 w-5 h-5" />
        </button>
      </div>
    </div>
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
export function SearchCard({ imgUrl,name,price,link}){
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