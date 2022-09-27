import React from "react";
import { FaDollarSign } from "react-icons/fa";
// import { CartCard } from "../components/Card";
import Rating from "../components/Rating";
import { AiOutlineClose } from "react-icons/ai";
// import img from "../img/horizon forbiden west.jpg";
import { useCart } from "react-use-cart";
import EmptyCart from "../components/EmptyCart";

function AddToCart() {
  const { items, isEmpty, removeItem, totalUniqueItems } = useCart();
  return (
    <React.Fragment>
      {isEmpty && <EmptyCart />}

      {isEmpty === false && (
        <div className="odd flex flex-col">
          <div className="flex flex-col">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="even:card-bg flex items-center lg:flex-row flex-col  lg:h-auto h-72  w-full py-5 justify-around"
                >
                  <div className="w-full flex items-center justify-center pl-20">
                    <img src={item.imgUrl} className="w-56 rounded-md" alt="" />
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <p className="capitalize text-lg">{item.name}</p>
                  </div>

                  <div className="w-full flex items-center justify-center">
                    <Rating star={item.rate} className="scale-150" />
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <p className="flex items-center text-lg">
                      <FaDollarSign /> {item.price}{" "}
                      <span className="text-base">.99</span>
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-center">
                    <AiOutlineClose
                      onClick={() => removeItem(item.id)}
                      className="cursor-pointer active:scale-95 transition-all"
                      size={25}
                    />
                  </div>
                </div>
                // <CartCard
                // key={index}
                //   name={item.name}
                //   imgUrl={item.imgUrl}
                //   rate={item.rate}
                //   price={item.price}
                //   CloseBtn={()=>removeItem(item.id)}
                // />
              );
            })}
          </div>
          <div className="lg:px-28 ">
            {isEmpty === false && (
              <button className="w-full h-20 border-white border flex font-semibold items-center text-white capitalize justify-center text-xl hover:bg-white mt-2  hover:text-black transition-all duration-200">
                buy {totalUniqueItems <= 1 && <p className="ml-1"> it</p>}{" "}
                {totalUniqueItems >= 2 && <p className="ml-1"> all</p>}
              </button>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default AddToCart;
