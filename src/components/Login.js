import React from 'react'
import Header from './Header';
import { useState,useRef } from 'react';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Validate } from '../utils/validate';


const Login = () => {

  const [isSignIn,setIsSignIn]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const dispatch=useDispatch();
   const handlevalidation=()=>{
    const message = Validate(email.current.value,password.current.value);
   setErrorMessage(message);
   if(message) return;
    
   if(!isSignIn){
    // const auth = getAuth();
createUserWithEmailAndPassword
(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
      const {uid,email,displayName}=auth.currentUser;

dispatch(addUser({uid:uid,email:email,displayName:displayName}));
    }).catch((error) => {
      // An error occurred
      // ...
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    setErrorMessage("Already a user.");
    // ..
  });
}
else {
  
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const {uid,email,displayName}=auth.currentUser;

dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("Invalid credential!")
      });
   }
   }
   const handleSign=()=>{
    setIsSignIn(!isSignIn);
    // setErrorMessage(null);           // when toggling between already a member and new to netflix ,error message text didnt remove
   };
   
  return (
    <>
   {/* <Header/> */}
    

   <div className=' relative'>

    <form onSubmit={(e)=>e.preventDefault()} className='p-8 md:p-12 bg-black  absolute bg-opacity-85 top-52  md:top-[220px] left-[45px] md:left-[500px] w-[270px] md:w-3/12  h-[430px] md:h-[510px]'>
        {(!isSignIn)&&<input ref={name} type="text" placeholder='Name' className='h-9 w-6/8 md:h-12 rounded-sm placeholder-gray-500 p-2 my-4 md:my-5 ml-1 md:w-full text-gray-800 font-semibold'></input>}
        <input ref={email} type="text" placeholder='Email' className=' h-9 w-6/8 md:h-12 rounded-sm p-2  my-4 md:my-5 ml-1 md:w-full font-semibold placeholder-gray-500 text-gray-800'></input>
        <input ref={password} type="text" placeholder='password' className=' h-9 w-6/8 md:h-12 rounded-sm p-2  my-4 md:my-5 ml-1 md:w-full placeholder-gray-500 font-semibold text-gray-800'></input>
        <p className='my-2 px-2 text-red-700 font-bold'> {errorMessage}</p>
        <button    className ='bg-red-800 p-4 m-4 font-semibold text-white w-[202px] py-2 my-4 md:my-6 ml-1 md:w-full h-10 md:h-12 rounded-md ' onClick={handlevalidation}>{isSignIn?"SIGN IN":"sign up"}</button>

        <div className='py-12 text-white'>{isSignIn?<div className='flex'><h5 className='pt-[2px] text-sm'>New to netflix?</h5><h3 onClick={()=>{handleSign()}} className=' text-white ml-2 cursor-pointer hover:underline'>SignUp Now</h3></div>:<div className='flex'><div className='text-sm mt-[2px]'>Already a user?</div><div onClick={()=>{handleSign()}} className='ml-1 cursor-pointer hover:underline'>Sign In</div></div>}  </div>       
        
    </form>
   </div>
    
    <img  className='h-[700px] md:w-screen md:h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" alt='logo'/>
   <div className='h-[200px] bg-black'></div>
    {/* {isSignIn&&<div className='absolute  text-white font-bold top-[510px] right-[650px]'>Forgot password</div>} */}
    </>
  )
}

export default Login ;     
