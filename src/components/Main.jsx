import React from 'react'
import Poster from './Poster';
import SecondCarusel from '../components/SecondCarusel'
import Data from "../data/Data";
// 
// 
function Main() {

  const RandomNum =()=> Math.floor(Math.random() * (Data.length - 0 + 1)) + 0;
  // const {name,id}=Data[RandomNum()]
  const data1=Data[RandomNum()]
  const data2=Data[RandomNum()]
  const data3 = Data[RandomNum()];
  const data4 = Data[RandomNum()];

  return (
    <div className=" w-full lg:h-[33.2em] bg-blue- lg:mt-2 overflow-hidden flex h- pr-0 pl-0 mt-0 lg:pl-[55px] lg:pr-16">
      <div className=" w-screen flex-shrink flex items-center mr-5 -mt-14 ">
        {/* <div className='h-[32.5] rounded-3xl'>
   <button className='bg-blue-600 rounded-[16px] p-4 px-6 relative left-16 top-[29em] shadow-md shadow-blue-600 '>explore more</button> 
   <img src={ps5} className='rounded-3xl h-[32.5em]' alt="" />
   </div> */}

        <SecondCarusel />
      </div>
      <div className=" overflow-hidden w-8/12 gap-4 gap-x-6 grid-cols-2 grid-row-6 grid h-[33em] -mt-2">
        {/* poster */}
        <div className="p">
          <Poster
            imgUrl={data1.imgUrl}
            name={data1.name}
            classname={"h-full w-full"}
            textbottom="19"
          />
        </div>
        <div className="b">
          <Poster
            imgUrl={data2.imgUrl}
            name={data2.name}
            classname={"h-full w-full"}
            textbottom="33"
          />
        </div>
        <div className="g">
          <Poster
            imgUrl={data3.imgUrl}
            name={data3.name}
            classname={"h-full w-full"}
            textbottom="20"
          />
        </div>
        <div className="r">
          <Poster
            imgUrl={data4.imgUrl}
            name={data4.name}
            classname={"h-full w-full"}
            textbottom="30"
          />
        </div>
        {/* poster end */}
      </div>
    </div>
  );
}

export default Main