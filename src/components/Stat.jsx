import React from 'react'

function Stat({sales,users,games}) {
  return (
    <section class="">
    <div class="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold capitalize text-white sm:text-4xl">
          trusted by eCommerce web-app
        </h2>
  
        <p class="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
          laborum labore provident impedit esse recusandae facere libero harum
          sequi.
        </p>
      </div>
  
      <div class="mt-8 sm:mt-12">
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            class="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
          >
            <dt class="order-last text-lg font-medium text-gray-500">
              Total Sales
            </dt>
  
            <dd class="text-4xl font-extrabold bg-gradient-to-tr from-sky-400 to-violet-600  bg-clip-text text-transparent md:text-5xl">
              ${sales}m
            </dd>
          </div>
  
          <div
            class="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
          >
            <dt class="order-last  capitalize text-lg font-medium text-gray-500">
             total users
            </dt>
  
            <dd class="text-4xl font-extrabold bg-gradient-to-tr from-sky-400 to-violet-600  bg-clip-text text-transparent md:text-5xl">{users}</dd>
          </div>
  
          <div
            class="flex flex-col px-4 py-8 text-center border border-gray-800 rounded-lg"
          >
            <dt class="order-last capitalize text-lg font-medium text-gray-500">
              Total games
            </dt>
  
            <dd class="text-4xl font-extrabold bg-gradient-to-tr from-sky-400 to-violet-600  bg-clip-text text-transparent md:text-5xl">{games}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
  
  )
}

export default Stat