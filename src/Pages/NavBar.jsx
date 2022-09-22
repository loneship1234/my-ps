import React from "react";
import Logo from "../img/ps5-logo.png";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import SearchBar from "../components/SearchBar";

function NavBar() {
  return (
    <div class="navbar transition-opacity">
      <div class="navbar-start h-20 w-4/12">
        <Link
          to="/"
          class=" normal-case text-xl cursor-pointer ml-4 lg:ml-16 mr-0"
        >
          <img src={Logo} alt="" className="w-44 lg:w-48 lg:h-14 h-10 mr-auto " />
        </Link>
      </div>
      <div class="navbar-center pl-[0em]  w-[50em] hidden lg:flex">
        <SearchBar />
      </div>
      <div class="navbar-end    hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <Link
            to="game-catalog"
            className="select-none border-2 border-slate-800 flex items-center p-3  py-2     text-slate-400 rounded-xl text-lg mr-5 capitalize transition-all active:scale-95 hover:text-slate-100 hover:border-slate-400 "
          >
            <TbDeviceGamepad2 className="mr-2 text-white" />
            games
          </Link>
          <Link
            to="/login"
            className="select-none border-2 border-slate-800 flex items-center p-3 py-2 text-slate-400 rounded-xl text-lg mr-5  capitalize transition-all active:scale-95 hover:text-slate-100 hover:border-slate-400"
          >
            <MdOutlinePersonOutline className="mr-2 text-white" />
            login
          </Link>
          <Link
            to="/sign-up"
            className="select-none border-2 border-slate-800 flex items-center p-3 py-2 text-slate-400 rounded-xl text-lg mr-14  capitalize transition-all active:scale-95  hover:text-slate-100 hover:border-slate-400"
          >
            {" "}
            <FiLogIn className="mr-2 text-white" />
            sign up
          </Link>
        </ul>
      </div>
      <div dir="rtl" class="dropdown ml-auto  ">
        <label tabindex="0" class="btn btn-ghost lg:hidden px-2">
          <RiMenu3Fill className="h-8 w-8" />
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content  mt-3 bg text-white p-2 shadow card-bg rounded-box w-52"
        >
          <Link
            to="/"
            className="h  cursor-pointer active:scale-95 bg-child mb-2  text flex items-center px-3 py-[5px] rounded-md transition-all"
          >
            <BiHomeAlt className="w-6 h-6" />
            <p className="capitalize text-lg font-medium mr-auto select-none">
              home
            </p>
          </Link>
          {/*  */}

          {/*  */}
          <Link
            to="/game-catalog"
            className="h cursor-pointer active:scale-95 bg-child mb-2  text flex items-center px-3 py-[5px] rounded-md transition-all"
          >
            <TbDeviceGamepad2 className="w-6 h-6" />
            <p className="capitalize text-lg font-medium mr-auto select-none">
              games
            </p>
          </Link>
          {/*  */}
          <Link
            to="/login"
            className=" h cursor-pointer active:scale-95 bg-child mb-2  text flex items-center px-3 py-[5px] rounded-md transition-all"
          >
            <MdOutlinePersonOutline className="w-6 h-6" />
            <p className="capitalize text-lg font-medium mr-auto select-none">
              login
            </p>
          </Link>
          {/*  */}
          <Link
            to="/sign-up"
            className="h cursor-pointer active:scale-95 bg-child mb-2  text flex items-center px-3 py-[5px] rounded-md transition-all"
          >
            <FiLogIn className="w-6 h-6" />
            <p className="capitalize text-lg font-medium mr-auto select-none">
              sign up
            </p>
          </Link>
          {/*  */}
          <hr className="bg-gray-500  h-[3px] rounded-md" />
          <Link
            to="/about-us"
            className="  cursor-pointer active:scale-95 bg-child mt-2  text flex items-center px-3 py-[5px] rounded-md transition-all"
          >
            <AiOutlineTeam className="w-6 h-6" />
            <p className="capitalize text-lg font-medium mr-auto select-none">
              about us
            </p>
          </Link>
          {/*  */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
