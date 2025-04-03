import React, { useRef } from 'react'
import { auth } from '../utils/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPage = () => {
    const email=useRef(null)
    const reset=()=>{
        sendPasswordResetEmail(auth, email.current.value)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("Password reset link has been send to your mail")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    }
  return (
    <div >
    <div className='absolute flex justify-center items-center  w-full h-dvh '>
  <form onSubmit={(e)=>{e.preventDefault()}} className=' bg-black opacity-85 h-40 w-64 p-4 '>
  <input ref={email} placeholder='Enter your e-mail' className=' bg-white placeholder:text-black placeholder:font-semibold w-full border text-black border-black mt-4 p-2' ></input>
  <button className='bg-red-600 text-white z-30 mt-6 px-2 rounded-md' onClick={()=>{reset()}}> Reset</button>  
  </form>

    </div>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"></img>
    </div>
  )
}

export default ForgotPage