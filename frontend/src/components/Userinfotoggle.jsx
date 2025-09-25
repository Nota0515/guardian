import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CiTimer } from "react-icons/ci";
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
    <div className={`userinformation rounded-xl font-thin text-base overflow-hidden bg-gray-900 border border-white/20 flex items-start p-2 flex-col gap-y-1`}>
            <div className='profileuser'>
              <Link to={'/profile'} className='flex flex-1 pl-1  items-center gap-2'>
                <span><CiUser /></span><p>Profile</p>
              </Link>
            </div>
            <div className='UpgradePro'>
              <Link to={'/pricing'} className='flex flex-1 pl-1 py-1 gap-2 items-center'>
                <span><CiBadgeDollar /></span><p>Upgrade Pro</p>
              </Link>
            </div>
            <div className='tempmode flex flex-1 pr-1 -mt-1 items-center active:bg-blue-900/20 lg:hover:bg-blue-900/60 rounded-md overflow-hidden'>
              <Button onClick={BtnClicked}>
                <span><PiGhostLight /></span>
                <p>Temp</p>
              </Button>
            </div>
            <div className='logoutbutton flex flex-1 pr-1 -mt-1 items-center active:bg-blue-900/20  lg:hover:bg-blue-900/60 rounded-md overflow-hidden'>
              <Button onClick={logOutBtn}>
                <span><CiLogout /></span>
                <p>logout</p>
              </Button>
            </div>
            <div className='profileuser pr-1'>
              <Link to={'/timecomplexity'} className='flex flex-1 whitespace-nowrap pl-1 items-center gap-2'>
                <span><CiTimer /></span><p>Time Complexity</p>
              </Link>
            </div>
          </div>
  )
}

export default Userinfotoggle
