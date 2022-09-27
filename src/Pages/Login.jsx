import React,{useState,useEffect} from 'react'
import img from '../img/batman arkham knight.jpg';
import {Link} from 'react-router-dom';
import Input from '../components/Input';
import {EmailContext} from '../Context/EmailValidatorContext'
// import { useInputValue } from 'react-haiku';
// import logo from '../img/ps5-logo.png';
import {AiOutlineGoogle} from 'react-icons/ai';
function Login() {
const [EmailValid, setEmailValid] = useState(false);
const [PassValid, setPassValid] = useState(false);
// const [BtnAvailable, setBtnAvailable] = useState(true);
  // /\S+@\S+\.\S+/.test(e.target.value)
// if (EmailValid&&PassValid==true) {
//   setBtnAvailable(false)
//   // console.log('is valid');
// } else {
//   setBtnAvailable(true)
//   // console.log('is not valid');
// }
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);
const submitHandeler=(e)=>{
e.preventDefault()
}
  return (
  <EmailContext.Provider value={{EmailValid,setEmailValid,PassValid,setPassValid}}>
      <React.Fragment>
    <div className="flex items-center justify-center h-[90vh] lg:h-[90.5vh] px-3 py-0 lg:px-72 lg:py-28  ">
    <div className=' w-full h-full flex rounded-xl lg:pt-0 pt-14 shadow'>
<div className=" mx-3 mb-10 w-screen  lg:px-0 lg:w-[60%] h-full rounded-l-lg ">
  <form action="" method="get" onSubmit={submitHandeler}>
  {/* <img src={logo} className='w-28 mt-2 ml-2'/> */}
<div className=' lg:mx-28  mt-12 bg--400'>
<h2 className='text-5xl lg:text-5xl mb-5 lg:mb-3 text-center lg:text-left capitalize'>welcome back</h2>
<p className='text-gray-300 text-md capitalize mb-12 mt-5 font-light text-center lg:text-left'>welcome back! please enter your info</p>
<Input ptext='email' type='email' />
<Input ptext='password' type='password'/>
</div>
{/*  */}
<div className='flex mx-0 lg:mx-28 mt-6 items-center bg-orange-'>
   <label className='text-[17px]  cursor-pointer flex items-center select-none active:scale-95 transition-all '>
   <input type="checkbox" name="" id="" className=' w-4 h-4 cursor-pointer mr-2  accent-white ' />
    remember me
   </label>
<Link to='/' className='ml-auto bg-clip-text text-transparent bg-gradient-to-tr font-semibold from-blue-400 to-violet-600 '>forget password ?</Link>
</div>
<button type="submit" value="Submit"  disabled={EmailValid&&PassValid?true:false}   className={' disabled:cursor-not-allowed border-2 border-white  ml-auto lg:ml-28 w-full lg:w-auto lg:px-[153px] rounded-md py-4 text-3xl  font-semibold select-none mt-9 tr-2  hover:bg-slate-100 hover:text-black capitalize   '}  >log in</button>
<div class="divider after:bg-white before:bg-white lg:mr-[106px] lg:ml-[110px] my-6">OR</div>
<div className='flex items-center justify-center py-4 hover:bg-white hover:text-black tr-2  cursor-pointer active:scale-95  lg:ml-[110px] lg:mr-[102px] border-2  rounded-md select-none border-white '><AiOutlineGoogle className='w-7 h-7 mr-1'/> <p className='text-lg font-semibold capitalize'>sign in with google</p></div>
<p className='lg:ml-52 mt-6 lg:mt-4 select-none text-sm text-center lg:text-left '>dont have an account ? <Link to='/sign-up' className='font-bold  bg-gradient-to-tr tr-2 bg-clip-text text-transparent from-blue-400 to-violet-600 capitalize'>create one</Link></p>
</form></div>
<img className=" w-[40%] h-full rounded-r-lg hidden lg:flex" alt='' src={img}/>
</div>
    </div>
    </React.Fragment>
  </EmailContext.Provider>
    
  )
}

export default Login