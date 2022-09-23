import React from 'react'
// route
// 
import Main from '../components/Main';
import Thumbnail from '../components/Thumbnail';
import NewestCarusel from "../components/NewestCarusel";
import PopularCarusel from '../components/PopularCarusel';
import PriceCarusel from '../components/PriceCarusel';
// import {CardSec} from '../components/Card'
// import Accordion from '../components/Accordion';

function HomePage() {
  return (
    <div className="text-white">
      <Main />
      <Thumbnail>discover games</Thumbnail>
      {/* <div className="bg-red-400 w-full h-full"> */}
      <NewestCarusel />
      <Thumbnail className="mt-10">popular games</Thumbnail>
      <PopularCarusel />
      <Thumbnail className="mt-10">expensive games</Thumbnail>
      <PriceCarusel />
      {/* <Accordion/> */}
      {/* </div> */}
    </div>
  );
}

export default HomePage