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
   <div className="bg-red- w-full h-full mr-">
     <Carusel/>
   {/* <Accordion/> */}
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta modi vel accusamus non obcaecati odio quia ullam distinctio commodi voluptatem.</p>
   </div>
        </div>
  )
}

export default HomePage