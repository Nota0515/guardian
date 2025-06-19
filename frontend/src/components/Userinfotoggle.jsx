import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { PiGhostLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Button from './Buttons';

const Userinfotoggle = () => {

  const navigate = useNavigate();

  const BtnClicked = () => {
    console.log('the btn is clicked')
  }

  const logOutBtn = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <div className={`userinformation w-full h-full rounded-xl font-thin text-base overflow-hidden bg-gray-900 border border-white/20 flex items-start p-2 flex-col gap-y-1`}>
            <div className='profileuser'>
              <Link to={'/profile'} className='flex flex-1 pl-1  items-center gap-2'>
                <span><CiUser /></span><p>Profile</p>
              </Link>
            </div>
            <div className='UpgradePro'>
              <Link to={'/pricing'} className='flex flex-1 pl-1 py-1 gap-2 items-center'>
                <span><CiBadgeDollar /></span><p>UpgradePro</p>
              </Link>
            </div>
            <div className='tempmode flex flex-1 pr-1 -mt-1 items-center active:bg-blue-900/20 lg:hover:bg-zinc-800 rounded-md overflow-hidden'>
              <Button onClick={BtnClicked}>
                <span><PiGhostLight /></span>
                <p>Temp</p>
              </Button>
            </div>
            <div className='logoutbutton flex flex-1 pr-1 -mt-1 items-center active:bg-blue-900/20  lg:hover:bg-zinc-800 rounded-md overflow-hidden'>
              <Button onClick={logOutBtn}>
                <span><CiLogout /></span>
                <p>logout</p>
              </Button>
            </div>
          </div>
  )
}

export default Userinfotoggle
