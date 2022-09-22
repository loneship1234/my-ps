import React,{useState,useContext} from 'react'
import validator from 'validator'
import {EmailContext} from '../Context/EmailValidatorContext';
function Input({ptext,type}) {
  const [Error, setError] = useState('');
  let {setEmailValid,setPassValid}=useContext(EmailContext)
  // 
  const ChangeHandeler=(e)=>{
    const name=e.target.name
    const value=e.target.value
    const lenght=e.target.value.length
    if (name==='email') {
if (validator.isEmail(value)) {
  setError('')
  setEmailValid(true)
} else {
  setError('your email is wrong :)')
  setEmailValid(false)
}
} else if(name==='password') {
if (lenght<7) {
  setError('your password is too short')
  setPassValid(false)
} else if(lenght>=8) {
  setError('')
  setPassValid(true)
}
}
  } 
  return (
    <React.Fragment>
        <p htmlFor={ptext} className={'capitalize mt-5'}>{ptext} :</p>
  <input type={type} placeholder='' onChange={ChangeHandeler} name={ptext} autoComplete='off'  className={'tr w-full bg-black focus:border-b-[1px] rounded-[1px] border-b-[0.5px] focus:outline-none placeholder:text-sm placeholder:capitalize '}/>
  <p className='text-red-500 capitalize select-none text-xs mt-1 absolute'>{Error}</p>
    </React.Fragment>
  )
}

export default Input