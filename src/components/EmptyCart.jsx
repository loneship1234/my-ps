import { BsCartX, BsEmojiSmileUpsideDown } from "react-icons/bs";
// import { RiEmotionSadLine } from "react-icons/ri";
//
function Page404() {
  return (
    <div className="flex items-center bg--500   flex-col lg:flex-row  w-full h-[90vh] select-none">
      <div className="bg--500">
        {/* <BiGhost className='w-80 h-80 '/> */}
        <div className="lg:ml-32 ml-2">
          <p className="capitalize font-bold text-center lg:text-left text-6xl lg:text-8xl mt-10 lg:mt-0 mb-10 lg:mb-14 ">
            empty cart
          </p>
          <div className="flex  items-center text-xs text-center lg:text-2xl">
            {" "}
            <p className="capitalize  font-semibold  tracking-wide ">
              you're cart is empty why woudn't you add some games
            </p>{" "}
            <BsEmojiSmileUpsideDown className="lg:w-10 lg:h-10 w-5 h-5   ml-2" />
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
