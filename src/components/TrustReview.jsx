import React from 'react'
import {TrCard} from './Card'
function TrustReview() {
  return (
    <div className='my-1'>
        <h4 className='text-4xl font-bold tracking-tight text-center sm:text-5xl mb-16 mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
       <div className='flex gap-6 px-44'>
       <TrCard/>
        <TrCard/>
        <TrCard/>
       </div>
    </div>
  )
}

export default TrustReview