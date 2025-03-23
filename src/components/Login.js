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
    const message = Validate(email.current?.value,password.current?.value,name?.current?.value);
    if(!isSignIn && message){
      setErrorMessage(message);
      return;

    }
    else if(isSignIn && message){
      if(message!="Name field can't be empty"){
        setErrorMessage(message);
        return;
      }
    } 
    
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
    
    setErrorMessage("Already a user with this gmail account");
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
        setErrorMessage("Wrong credentials!")
      });
   }
   }
   const handleSign=()=>{
    setIsSignIn(!isSignIn);
    // setErrorMessage(null);           // when toggling between already a member and new to netflix ,error message text didnt remove
   };
   
  return (
    <>
   <Header/>
    <div className='relative'> 
    <img className='h-[800px] md:w-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" alt='logo'/>
    <div className='h-[200px] -mt-1 bg-black'></div>
    <form onSubmit={(e)=>e.preventDefault()} className='pb-32 p-8 md:p-12 bg-black  absolute bg-opacity-85 top-[220px] left-[60px] md:left-[500px] w-8/12 md:w-3/12 h-[400px] md:h-[510px]'>
        {(!isSignIn)&&<input ref={name} type="text" placeholder='Name' className='mb-1 ml-4 mt-6 placeholder-gray-500 p-1 md:p-2 md:m-5 md:ml-1 w-10/12 md:w-full rounded-sm text-gray-800 font-semibold text-sm'></input>}
        <input ref={email} type="text" placeholder='Email' className='mb-6 ml-4 mt-6 placeholder-gray-500 p-1 md:p-2 md:m-5 md:ml-1 w-10/12 md:w-full rounded-sm text-gray-800 font-semibold text-sm'></input>
        <input ref={password} type="text" placeholder='password' className='mb-4 ml-4 mt-1 placeholder-gray-500 p-1 md:p-2 md:m-5 md:ml-1 w-10/12 md:w-full rounded-sm text-gray-800 font-semibold text-sm'></input>
        <p className='my-2 px-2 text-red-700 font-bold'> {errorMessage}</p>
        <button    className ='bg-red-800 p-4 m-4 font-semibold text-white py-2 my-6 md:ml-1 w-10/12 md:w-full md:h-12 rounded-md ' onClick={handlevalidation}>{isSignIn?"SIGN IN":"sign up"}</button>

        <div className='py-12 text-white'>{isSignIn?<div className='flex'><h5 className='pt-[2px] text-sm'>New to netflix?</h5><h3 onClick={()=>{handleSign()}} className=' text-white ml-2 cursor-pointer hover:underline'>SignUp Now</h3></div>:<div className='flex'><div className='text-sm mt-[-28px]'>Already a user?</div><div onClick={()=>{handleSign()}} className='ml-1 cursor-pointer hover:underline mt-[-30px]'>Sign In</div></div>}  </div>       
        
    </form>
    {/* {isSignIn&&<div className='absolute  text-white font-bold top-[510px] right-[650px]'>Forgot password</div>} */}
    </div>
    </>
  )
}

export default Login ;     
