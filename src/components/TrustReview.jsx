import React from 'react'
import {TrCard} from './Card'
function TrustReview() {
  return (
    <div className='my-1'>
        <h4 className='text-4xl font-bold tracking-tight text-center sm:text-5xl lg:mb-16 lg:mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
       <div className='flex flex-col lg:flex-row gap-6 lg:px-44 px-8 mt-10'>
       <TrCard/>
        <TrCard/>
        <TrCard/>
       </div>
    </div>
  )
}

export default TrustReview