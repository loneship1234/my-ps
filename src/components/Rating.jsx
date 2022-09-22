import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai';
function Rating({className,showNum,star}) {
switch (star) {
  default:
  case 1:
    return(    <div className='flex row items-center mt-1'>
    <div class={"rating rating-sm mr-1  "+className}>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-gray-600'/>
    <AiTwotoneStar className='w-3 text-gray-600'/>
    <AiTwotoneStar className='w-3 text-gray-600'/>
        <AiTwotoneStar className='w-3 text-gray-600'/>
</div>
{showNum &&  <p className='text-xs mb-[3px] font-extralight tracking-wide'>(56)</p>}
</div>)
  case 2:
    return(    <div className='flex row items-center mt-1'>
    <div class={"rating rating-sm  mr-1  "+className}>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-gray-600'/>
    <AiTwotoneStar className='w-3 text-gray-600'/>
        <AiTwotoneStar className='w-3 text-gray-600'/>
</div>
{showNum &&  <p className='text-xs mb-[3px] font-extralight tracking-wide'>(56)</p>}
</div>)
  case 3:
    return(    <div className='flex row items-center mt-1'>
    <div class={"rating rating-sm  mr-1  "+className}>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-gray-600'/>
        <AiTwotoneStar className='w-3 text-gray-600'/>
</div>
{showNum &&  <p className='text-xs mb-[3px] font-extralight tracking-wide'>(56)</p>}
</div>)
  case 4:
    return(    <div className='flex row items-center mt-1'>
    <div class={"rating rating-sm  mr-1  "+className}>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
        <AiTwotoneStar className='w-3 text-gray-600'/>
</div>
{showNum &&  <p className='text-xs mb-[3px] font-extralight tracking-wide'>(56)</p>}
</div>)
  case 5:
    return(    <div className='flex row items-center mt-1'>
    <div class={"rating rating-sm  mr-1  "+className}>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
    <AiTwotoneStar className='w-3 text-orange-600'/>
        <AiTwotoneStar className='w-3 text-orange-600'/>
</div>
{showNum &&  <p className='text-xs mb-[3px] font-extralight tracking-wide'>(56)</p>}
</div>)
}
}

export default Rating