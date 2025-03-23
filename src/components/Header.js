import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { addUser } from '../utils/userSlice';


const Header = () => {
  const [name,setName]=useState("name")
  const [box,setBox]=useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      dispatch(removeUser);
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  
  useEffect(()=>{

        const auth = getAuth();
const unSubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
const {uid,email,displayName}=user;
dispatch(addUser({uid:uid,email:email,displayName:displayName}));
    
    // ...
    navigate('/browse');
} else {
    // User is signed out
    // ...
    dispatch(removeUser());
    navigate('/');
  }
});
return ()=>unSubscribe();
    },[])

  const set=()=>{

    setBox(true);
  }
  const setf=()=>{

    setTimeout(() => {
        setBox(false);
      }, 200); 
  }
  
  return (
    <div  className='absolute bg-gradient-to-b from-black  top-[0px] left-[0px] h-28 z-10 w-screen flex justify-between' >
        <img className='  w-28 h-20 md:w-48 md:h-24  'src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
    
    
    {user && <div className='flex justify-start w-8 h-8 md:w-14 md:h-14'>
       <img  className='relative  right-5 top-2 md:right-10   md:top-5 rounded-md' src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYPTk-lJwL8jeVZoJJUHDBCBKTOHvq52XpkgHAXGAI9tzk5eUGy373181Xuqtz727B_VDlO-MyIgxFGKFDKYryKJgLCfi9dWaQ.png?r=ab6"/>
      {!box &&<div className='relative right-16 top-10 md:top-20 md:right-24  text-white font-bold cursor-pointer text-[10px] md:text-xs h-[15px] md:h-[30px]' onMouseEnter={set}  onMouseLeave={setf}      
      > Hey,{user.displayName}</div>}
       {box && <div className='relative  top-10 md:top-20 right-[60px] md:right-[110px] h-[60px] md:h-[70px] w-[50px] md:w-[180px] p-1  bg-opacity-65 mt-2 rounded-md text-white text-[8px] md:text-[15px] bg-black cursor-pointer  px-3'  onMouseLeave={setf} ><div className='hover:text-pink-500 my-1'>{user.displayName}</div><hr></hr><div className='font-mono text-[8px] md:text-[15px] mt-2 hover:text-pink-500' onClick={handleSignOut}>SignOut</div></div>}
    </div>}
  
</div>
  )
}

export default Header;