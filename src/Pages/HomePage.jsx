import React, { useEffect } from "react";
// route
//
import Main from "../components/Main";
import Thumbnail from "../components/Thumbnail";
import NewestCarusel from "../components/NewestCarusel";
import PopularCarusel from "../components/PopularCarusel";
import PriceCarusel from "../components/PriceCarusel";
import FAQ from "../components/FAQ";
// import {CardSec} from '../components/Card'

function HomePage() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);
  return (
    <div className="text-white">
      <Main />
      <Thumbnail>discover games</Thumbnail>

      <NewestCarusel />
      <Thumbnail className="mt-10">popular games</Thumbnail>
      <PopularCarusel />
      <Thumbnail className="mt-10">expensive games</Thumbnail>
      <PriceCarusel />
      <div className="w-full h-auto  flex lg:flex-row flex-col lg:pl-20 pl-6 pr-7 lg:pr-16 mt-6 ">
        <div className="w-full divide-y-2 divide-slate-100 first:rounded-lg  ">
          <FAQ
            topic={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, facere!"
            }
            describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, autem voluptatum. Necessitatibus tenetur accusamus, fuga nostrum nam dolorem modi omnis commodi, impedit aliquam atque!"
          />
          <FAQ
            topic={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, facere!"
            }
            describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, autem voluptatum. Necessitatibus tenetur accusamus, fuga nostrum nam dolorem modi omnis commodi, impedit aliquam atque!"
          />
          <FAQ
            topic={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, facere!"
            }
            describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, autem voluptatum. Necessitatibus tenetur accusamus, fuga nostrum nam dolorem modi omnis commodi, impedit aliquam atque!"
          />
        </div>
        <div className="w-full divide-y-2 divide-slate-100 first:rounded-lg">
          <FAQ
            topic={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, facere!"
            }
            describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, autem voluptatum. Necessitatibus tenetur accusamus, fuga nostrum nam dolorem modi omnis commodi, impedit aliquam atque!"
          />
          <FAQ
            topic={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, facere!"
            }
            describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, autem voluptatum. Necessitatibus tenetur accusamus, fuga nostrum nam dolorem modi omnis commodi, impedit aliquam atque!"
          />
          <FAQ
            topic={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, facere!"
            }
            describtion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, autem voluptatum. Necessitatibus tenetur accusamus, fuga nostrum nam dolorem modi omnis commodi, impedit aliquam atque!"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
