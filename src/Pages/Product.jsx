import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrump from "../components/BreadCrump";
import { FaDollarSign } from "react-icons/fa";
import Rating from "../components/Rating";
// import { Player, BigPlayButton } from "video-react";
import Data from "../data/Data";
// import ReactImageMagnify from "react-image-magnify";
// import ReactImageZoom from "react-image-zoom";
function Product(props) {
  const { id } = useParams();
  const product = Data.find((product) => product.id === id);
  const {
    ps4Available,
    // Id,
    price,
    rate,
    name,
    description,
    // imgUrl,
    // video,
    imgList,
  } = product;
  const [img, setImg] = useState(imgList[0]);
  const hoverHandeler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < imgList.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addsRef = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <React.Fragment>
      <section>
        <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <h1 class="text-2xl font-bold capitalize lg:text-3xl">{name}</h1>
            <p class="mt-1 text-sm text-gray-500">
              <BreadCrump name={name} id={id} />
            </p>
          </div>

          <div id="img" class="grid gap-8 lg:items-start lg:grid-cols-4">
            <div class="lg:col-span-3">
              <div class="relative mt-4">
                <img
                  alt=""
                  className="transition-all  w-full rounded-xl h-72 lg:h-[540px] object-cover"
                  src={img}
                />
              </div>
              <ul class="flex gap-2 mt-1">
                {imgList.map((image, i) => {
                  return (
                    <li>
                      <img
                        onMouseOver={() => hoverHandeler(image, i)}
                        className={
                          i === 0
                            ? " active cursor-pointer object-cover w-16 h-16 rounded-md "
                            : " cursor-pointer object-cover w-16 h-16 rounded-md "
                        }
                        src={image}
                        key={i}
                        ref={addsRef}
                        alt=""
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            {/*  */}
            <div class="lg:top-0 lg:sticky">
              <form class="space-y-4 lg:pt-8">
                <fieldset>
                  <legend class="text-lg font-bold">Color</legend>

                  <div class="flex mt-2 space-x-1">
                    <label for="color_green" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_green"
                        name="color"
                        class="sr-only peer"
                        checked
                      />

                      <span class="block w-6 h-6 bg-green-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_blue" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_blue"
                        name="color"
                        class="sr-only peer"
                      />

                      <span class="block w-6 h-6 bg-blue-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_pink" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_pink"
                        name="color"
                        class="sr-only peer"
                      />

                      <span class="block w-6 h-6 bg-pink-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_red" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_red"
                        name="color"
                        class="sr-only peer"
                      />

                      <span class="block w-6 h-6 bg-red-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>

                    {/* <label for="color_indigo" class="cursor-pointer">
                      <input
                        type="radio"
                        id="color_indigo"
                        name="color"
                        class="sr-only peer"
                      />

                      <span class="block w-6 h-6 bg-indigo-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label> */}
                  </div>
                </fieldset>

                <fieldset>
                  <legend class="text-lg font-bold capitalize">type</legend>

                  <div class="flex mt-2 space-x-1">
                    {ps4Available && (
                      <label for="material_cotton" class="cursor-pointer">
                        <input
                          type="radio"
                          id="material_cotton"
                          name="material"
                          class="sr-only peer"
                          checked
                        />

                        <span class="block px-3 py-1  border border-gray-200 rounded-lg peer-checked:ring-2 ring-blue-600 ring-opacity-70 font-semibold tracking-wider text-md capitalize ">
                          ps4
                        </span>
                      </label>
                    )}

                    <label for="material_wool" class="cursor-pointer">
                      <input
                        type="radio"
                        id="material_wool"
                        name="material"
                        class="sr-only peer"
                        checked
                      />

                      <span class="block px-3 py-1  border border-gray-200 rounded-lg peer-checked:ring-2 ring-blue-600 ring-opacity-70 font-semibold tracking-wider text-md capitalize ">
                        ps5
                      </span>
                    </label>
                  </div>
                </fieldset>
                <div>
                  <legend class="text-lg font-bold capitalize">rating</legend>
                  <Rating className={"gap-1 scale-110 ml-1"} star={rate} />
                </div>
                <div class="p-4 text-gray-100 border rounded">
                  <p class="text-sm">
                    <span class="block">Pay as low as $3/mo with 0% APR.</span>

                    <p
                      
                      class="inline-block mt-1 hover:underline underline-offset-2 font-bold transition-all"
                    >
                      Find out more
                    </p>
                  </p>
                </div>

                <div>
                  <p class="text-xl font-bold flex items-center">
                    <FaDollarSign />
                    {price} <span className="text-sm">.99</span>
                  </p>
                </div>

                <button
                  type="button"
                  class="w-full px-6 py-3 text-sm font-bold tracking-wide active:scale-95 text-white transition-all select-none bg-gradient-to-tl uppercase to-violet-700 from-blue-600 rounded"
                >
                  add to cart
                </button>

                <button
                  type="button"
                  class="w-full px-6 py-3 text-sm font-bold tracking-wide capitalize active:scale-95 transition-all select-none text-gray-100 border-2 border-gray-300 rounded"
                >
                  call me when on sale
                </button>
              </form>
            </div>

            <div class="lg:col-span-3">
              <div class="prose max-w-none">
                <p className="leading">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Product;
