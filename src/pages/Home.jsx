import React from 'react'
import { useEffect, useState } from 'react';
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import Userinfotoggle from '../components/Userinfotoggle'
import { Link } from "react-router-dom"
import Button from '../components/Buttons'

const Home = () => {

  const [isSidebar, setIsSidebar] = useState(false);
  const [isinfo, setIsinfo] = useState(false)

  const handleClick = () => {
    if (isSidebar) {
      setIsSidebar(false);
    } else {
      setIsSidebar(true);
    }
  }

  const displayUserinfo = () => {
    if (isinfo) {
      setIsinfo(false);
    } else {
      setIsinfo(true);
    }
  }


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scroll on unmount
    };
  }, []);



  return (
    <div className='flex items-center flex-row w-screen min-h-screen'>
      <div className={`slidingwindow ${isSidebar ? "w-[5rem]" : 'w-[260px]'} overflow-hidden transition-all duration-500 ease-in-out`}>
        <div className='flex flex-shrink-0 overflow-x-hidden '>
          <div className='h-screen w-full bg-blue-950/10 border-r border-white/20 '>
            <div className='flex h-full min-h-0 flex-col'>
              <div className='dragcontent relative pl-5 flex-1 justify-center h-full w-full border-white/20'>
                <div className="top-nav flex flex-row items-center h-fit w-fit" >
                  <div className='burgur-icon flex hover:bg-zinc-800 rounded-md w-[40px] h-[40px] justify-center items-center mt-5 px-1'>
                    <Button onClick={handleClick}>{isSidebar ? <GoSidebarCollapse size={20} /> : <GoSidebarExpand size={20} />}</Button>
                  </div>
                </div>
                <div className={`sidebar-content ${isSidebar ? "hidden" : ''}`}>
                  <div className="newchat mt-2">
                    <Link to={'/'}>
                      <div className='newchat flex flex-nowrap flex-row gap-x-1 items-center w-fit p-2 rounded-md overflow-hidden hover:bg-zinc-800'>
                        <img src='/logoimg.png' className='w-6 h-6' />
                        <span className='font-pixelify text-white ' >Guardian</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainscreencontent flex relative bg-gradient-radial from-black via-black to-blue-900/10 justify-center flex-1 w-full h-screen">
        <header className="topnavigation absolute w-full p-2 mt-3 top-0 left-0 flex items-center justify-between">
          <div className="companylogo flex p-2 rounded-md hover:bg-zinc-800">
            <Link to={'/'} className='flex flex-nowrap items-center'>
              <img src='/logoimg.png' className='w-8 h-8 mr-1 content-start overflow-hidden' />
              <span className='font-pixelify text-white text-2xl' >Guardian</span>
            </Link>
          </div>
          <div className="userprofile">
            <div className="userlogo p-1 hover:bg-zinc-800 rounded-md">
              <Button onClick={displayUserinfo}>
                <div className='h-8 w-8 rounded-full overflow-hidden'>
                  <img src='src\assets\tem111.png' className='object-contain' />
                </div>
              </Button>
            </div>
          </div>
        </header>
        <div className={`userinfo absolute top-20 right-0 pr-4 w-40 h-36 transition-all duration-200 ease-out ${isinfo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
          <Userinfotoggle />
        </div>
        <div className='restmain w-full h-full flex flex-col p-1 md:p-2 lg:p-4'></div>
      </div>
    </div>
  )
}

export default Home