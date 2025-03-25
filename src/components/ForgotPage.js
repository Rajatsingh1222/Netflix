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
    <div className='bg-black p-10'>
  <form onSubmit={(e)=>{e.preventDefault()}} className='border border-white h-20 w-64 p-4'>
  <input ref={email} placeholder='Enter your e-mail' className='w-full border border-black' ></input>
  <button className='bg-red-700 text-white z-30' onClick={()=>{reset()}}> Reset Password</button>  
  </form>

    </div>
  )
}

export default ForgotPage