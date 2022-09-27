import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import {Link} from 'react-router-dom';
import Logo from "../img/ps5-logo.png";

function Footer() {
  return (
    <footer className=" card-bg mt-4">
      <div className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
          <div
            onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
            className="inline-block p-2 text-white transition bg-teal-600 rounded-full shadow cursor-pointer sm:p-3 lg:p-4 hover:bg-teal-500 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <span className="sr-only">Back to top</span>

            <MdOutlineKeyboardArrowUp className="w-5 h-5 text-sky-500" />
          </div>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-blue-400  lg:justify-start">
              <img src={Logo} className="w-40 h-10" alt="" />
            </div>

            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 dark:text-gray-400 lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <nav className="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
            <h2 className="sr-only" id="footer-navigation">
              Footer navigation
            </h2>

            <ul className="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12">
              <li>
                <Link
                  className="capitalize text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 relative  font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100"
                  to="/"
                >
                  home
                </Link>
              </li>

              <li>
                <Link
                  className="capitalize text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 relative  font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100"
                  to="/about-us"
                >
                  about us
                </Link>
              </li>

              <li>
                <Link
                  className="capitalize text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 relative  font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100"
                  to="/game-catalog"
                >
                  games
                </Link>
              </li>

              <li>
                <Link
                  className="capitalize text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 relative  font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100"
                  to="/login"
                >
                  login
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-sm text-center text-gray-500 dark:text-gray-400 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
