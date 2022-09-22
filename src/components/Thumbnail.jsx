import React from 'react'
import {Link} from 'react-router-dom';

import {BiChevronRight} from 'react-icons/bi';
function Thumbnail({children}) {
  return (
    <div className='flex items-center  my-3 ml-[75px] '>
    <p className='  font-normal tracking-wide select-none capitalize text-3xl mb-3  text-center'>{children}</p>
    <Link to='/game-catalog' className='ml-auto items-center transition-all mr-16 hover:mr-14 font-normal text-lg tracking-normal capitalize hidden  lg:flex'>more games
       <BiChevronRight className='  mt-1 w-5 h-5  ml-px hidden lg:flex'/>
    </Link>
    </div>
  )
}

export default Thumbnail