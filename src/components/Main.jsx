import React from 'react'
import Poster from './Poster';
import SecondCarusel from '../components/SecondCarusel'
import Data from "../data/Data";
// 
// 
function Main() {
// const [num, setNum] = useState([])
//   const RandomNum =()=> Math.floor(Math.random() * (Data.length - 0 + 1)) + 0;
//   const uniqueNumber = () => {
//     const number = Math.floor(Math.random() * Data.length + 1);
//     if (!num.includes(number)) {
//       num.push(number);
//       return number;
//     } else if (num.length - 1 !== Data.length) {
//       uniqueNumber(Data.length);
//     }
//   };
  // const {name,id}=Data[RandomNum()]
  const data1=Data[8]
  const data2=Data[10]
  const data3 = Data[5];
  const data4 = Data[15];

  return (
    <div className=" w-full lg:h-[33.2em] h-[26em] bg-blue- lg:mt-2 overflow-hidden flex h- pr-0 pl-0 mt-0 lg:pl-[55px] lg:pr-16">
      <div className=" w-screen flex-shrink flex items-start  lg:px-0 px-6  ">
        {/* <div className='h-[32.5] rounded-3xl'>
   <button className='bg-blue-600 rounded-[16px] p-4 px-6 relative left-16 top-[29em] shadow-md shadow-blue-600 '>explore more</button> 
   <img src={ps5} className='rounded-3xl h-[32.5em]' alt="" />
   </div> */}

        <SecondCarusel />
      </div>
      <div className=" overflow-hidden w-8/12 gap-4 gap-x-6 grid-cols-2 grid-row-6 grid  h-[33em] ">
        {/* poster */}
        <div className="p">
          <Poster
            id={data1.id}
            imgUrl={data1.imgUrl}
            name={data1.name}
            classname={"h-full w-full"}
            textbottom="19"
            colorTheme={data1.colorTheme}
          />
        </div>
        <div className="b">
          <Poster
            id={data2.id}
            imgUrl={data2.imgUrl}
            name={data2.name}
            classname={"h-full w-full"}
            textbottom="33"
            colorTheme={data2.colorTheme}
          />
        </div>
        <div className="g">
          <Poster
            id={data3.id}
            imgUrl={data3.imgUrl}
            name={data3.name}
            classname={"h-full w-full"}
            textbottom="20"
            colorTheme={data3.colorTheme}
          />
        </div>
        <div className="r">
          <Poster
            imgUrl={data4.imgUrl}
            id={data4.id}
            name={data4.name}
            classname={"h-full w-full"}
            textbottom="30"
            colorTheme={data4.colorTheme}
          />
        </div>
        {/* poster end */}
      </div>
    </div>
  );
}

export default Main