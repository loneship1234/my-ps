import React from 'react'
// route
// 
import Main from '../components/Main';
import Thumbnail from '../components/Thumbnail';
import NewestCarusel from "../components/NewestCarusel";
import PopularCarusel from '../components/PopularCarusel';
import PriceCarusel from '../components/PriceCarusel';
// import FAQ from "../components/FAQ";
// import {CardSec} from '../components/Card'

function HomePage() {
  return (
    <div className="text-white">
      <Main />
      <Thumbnail>discover games</Thumbnail>
  
      <NewestCarusel />
      <Thumbnail className="mt-10">popular games</Thumbnail>
      {/* <PopularCarusel /> */}
      <Thumbnail className="mt-10">expensive games</Thumbnail>
      {/* <PriceCarusel /> */}
      
{/* <FAQ/> */}
    </div>
  );
}

export default HomePage