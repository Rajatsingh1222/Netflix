import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';


const Header = () => {
  const [name,setName]=useState("name")
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  console.log(user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
      dispatch(removeUser);
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <div  className='absolute bg-gradient-to-b from-black  top-[0px] left-[0px] h-28 z-10 w-screen flex justify-between' >
        <img className=' w-30 h-24  'src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
    
    
    {user && <div className='flex justify-start w-14 h-14'>
       <img  className='relative right-10  rounded-md top-5' src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYPTk-lJwL8jeVZoJJUHDBCBKTOHvq52XpkgHAXGAI9tzk5eUGy373181Xuqtz727B_VDlO-MyIgxFGKFDKYryKJgLCfi9dWaQ.png?r=ab6"/>
       <div className='relative top-20 right-24  text-white font-bold cursor-pointer' onClick={handleSignOut}> {user.displayName}</div>
    </div>}
  
</div>
  )
}

export default Header;