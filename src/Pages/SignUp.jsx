import React from 'react'
import Input from '../components/Input';
import signUpImg from '../img/sign up image.png';

function SignUp() {
  return (
    <React.Fragment>
      <div className='flex items-center justify-center h-[90vh] lg:px-60 lg:py-14'>
        <div className='bg--500 w-full h-full   shadow shadow-gray-600 rounded-md'>
          {/* <h4 className='font-semibold text-center text-6xl py-3 tracking-wide'>sign up</h4> */}
          <img src={signUpImg} className='w-60 mx-auto my-7 bg-red-00' alt="" />
          <div className='flex'>
          <div className="bg--600 w-full px-10 ">
            <p className='text-center font-medium text-lg tracking-wide capitalize select-none'>peraonal information</p>
            <Input ptext='first name' type='text' textClassName='mt-5'/>
            <Input ptext='last name' type='text' textClassName='mt-8'/>
          <Input ptext='age' type='text' textClassName='mt-14'/>
            <Input ptext='phone number' type='text' textClassName='mt-14'/>
            </div>
          <div className="bg--600 w-full px-10  ">
          <p className='text-center font-medium text-lg tracking-wide capitalize select-none'>peraonal information</p>
            <Input ptext='email' type='email' textClassName='mt-14'/>
            <Input ptext='password' type='password' textClassName='mt-14'/>
            <Input ptext='email' type='email' textClassName='mt-14'/>
            <Input ptext='address' type='text' textClassName='mt-14'/>
      
          </div>
          </div>
         
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignUp