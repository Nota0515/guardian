import React, { useEffect, useState } from 'react';
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import Userinfotoggle from '../components/Userinfotoggle';
import { Link } from "react-router-dom";
import Button from '../components/Buttons';

const Home = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isinfo, setIsinfo] = useState(false);

  const handleClick = () => setIsSidebar((prev) => !prev);
  const displayUserinfo = () => setIsinfo((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className='flex w-screen min-h-screen'>
      <div className={`slidingwindow ${isSidebar ? 'w-20' : 'w-64'} transition-all duration-500 ease-in-out`}> 
        <div className='h-screen bg-blue-950/10 border-r border-white/20'>
          <div className='flex flex-col h-full'>
            <div className='pl-5 flex-1'>
              <div className='flex items-center mt-5'>
                <Button onClick={handleClick} className='p-2 hover:bg-zinc-800 rounded-md'>
                  {isSidebar ? <GoSidebarCollapse size={20} /> : <GoSidebarExpand size={20} />}
                </Button>
              </div>
              {!isSidebar && (
                <Link to={'/'} className='mt-4 flex items-center gap-x-2 p-2 rounded-md hover:bg-zinc-800'>
                  <img src='/logoimg.png' className='w-6 h-6' alt='Logo' />
                  <span className='font-pixelify text-white'>Guardian</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 relative bg-gradient-radial from-black via-black to-blue-900/10'>
        <header className='absolute w-full p-4 top-0 flex items-center justify-between'>
          <Link to={'/'} className='flex items-center gap-x-2 p-2 hover:bg-zinc-800 rounded-md'>
            <img src='/logoimg.png' className='w-8 h-8' alt='Logo' />
            <span className='font-pixelify text-white text-2xl'>Guardian</span>
          </Link>

          <Button onClick={displayUserinfo} className='p-1 hover:bg-zinc-800 rounded-md'>
            <div className='h-8 w-8 rounded-full overflow-hidden'>
              <img src='src/assets/tem111.png' className='object-contain' alt='User' />
            </div>
          </Button>
        </header>

        <div className={`userinfo absolute top-20 right-0 w-40 h-36 transition-transform ${isinfo ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <Userinfotoggle />
        </div>

        <div className='w-full h-full p-4 md:p-6 lg:p-8'></div>
      </div>
    </div>
  );
}

export default Home;
