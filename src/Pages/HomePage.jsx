import React from 'react'
// route
// 
import Main from '../components/Main';
import Thumbnail from '../components/Thumbnail';
import Carusel from '../components/Carusel';
// import {CardSec} from '../components/Card'
// import Accordion from '../components/Accordion';

function HomePage() {
  return (
    <div className='text-white' >
    <Main/>
   <Thumbnail>discover games</Thumbnail>
   {/* <div className="bg-red-400 w-full h-full"> */}
     <Carusel/>
   {/* <Accordion/> */}
   {/* </div> */}
   
        </div>
  )
}

export default HomePage