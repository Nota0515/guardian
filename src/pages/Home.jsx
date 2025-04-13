import React from 'react'
import { useState } from 'react'
import Button from '../components/Buttons'
import Userinfotoggle from '../components/Userinfotoggle'
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const Home = () => {
  const BtnClick = () => {
    if (!toogleInfo) {
      settToogleInfo(true);
    } else {
      settToogleInfo(false);
    }
    console.log("yeh we have clicked the button")
  }

  const openSide = () => {
    if(!isSidebar){
      setIsSidebar(true)
    }else{
      setIsSidebar(false)
    }
  }
  const [toogleInfo, settToogleInfo] = useState(false)
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className='flex relative bg-gradient-radial from-black via-black to-blue-950/10 justify-center items-center h-screen w-screen'>
      <div className="topnavigation flex items-center justify-between fixed top-0 left-0 right-0 w-full mt-2 px-1">
        <div className="logbox flex items-center p-1">
          <img src='/logoimg.png' className='w-8 h-8' />
          <text className='text-lg font-pixelify '>Guardian</text>
          <div className='toglesidebar mt-1 ml-1'>
            <Button onClick={openSide}>
              {isSidebar ? <GoSidebarCollapse /> : <GoSidebarExpand />}
            </Button>
          </div>
        </div>
        <div className="userinfo relative flex flex-col p-1">
          <div className="userlogo w-10 h-10">
            <Button onClick={BtnClick}>
              <img src='src\assets\tem111.png' className='object-cover rounded-full' />
            </Button>
          </div>
          <div className={`userinfotogle ${toogleInfo ? "" : "hidden"} absolute top-10 right-10`}>
            <Userinfotoggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
