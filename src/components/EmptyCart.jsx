import React from "react";

import { BsCartX, BsEmojiSmileUpsideDown } from "react-icons/bs";
// import { RiEmotionSadLine } from "react-icons/ri";
//
function Page404() {
  return (
    <div className="flex items-center bg--500   flex-col lg:flex-row  w-screen h-[90vh] select-none">
      <div className="bg--500">
        {/* <BiGhost className='w-80 h-80 '/> */}
        <div className="lg:ml-32 ml-2">
          <p className="capitalize font-bold text-center lg:text-left text-7xl lg:text-8xl mt-10 lg:mt-0 mb-10 lg:mb-14 ">
            empty cart
          </p>
          <div className="flex bg--500 items-center">
            {" "}
            <p className="capitalize text-2xl lg:text-2xl font-semibold  tracking-wide mb-14 my-3">
              sorry you're cart is empty why woudn't you add some games
            </p>{" "}
            <BsEmojiSmileUpsideDown className="w-10 h-10 mt-2 mb-11 ml-2" />
          </div>
        </div>
      </div>
      <div className="flex items-center mx-auto lg:ml-auto lg:mr-20 anime lg:mt-0 mt-16">
        <BsCartX className="w-80 h-80" />
      </div>
    </div>
    //
    //   <div className='flex items-center bg-blue-500  justify-center lg:flex-row flex-col h-[90vh]'>
    //   <div className='bg-red-500'>
    //   <BiGhost className='w-96 h-96 '/>
    //    <p className='capitalize text-6xl text-center mb-3 mt-10'>Page404</p>
    //    <p className='capitalize text-2xl text-center mt-10'>sorry we cant find your page</p>
    //   </div>
    //  </div>
  );
}

export default Page404;
