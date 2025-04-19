import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Button from '../components/Buttons'
import Userinfotoggle from '../components/Userinfotoggle'
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { RiSendPlaneFill } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";

const Home = () => {

  const [text, setText] = useState("");

  const sendBtnClick = () => {
    if(text.trim()){
      console.log("sending message of : " , text );
      setText('');
    }
  }

  const handlekeyDown = (e) => {
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      sendBtnClick();
    }
  }


  const textArearef = useRef(null);

  const adjustHeight = () => {
    const el = textArearef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 250)}px`

    if (el.scrollHeight > 250) {
      el.style.height = "250px";
      el.style.overflowY = "auto";
    }
  }

  useEffect(() => {
    adjustHeight();
  }, [text]);

  const profileBtnClick = () => settToogleInfo(prev => !prev);

  const openSide = () => setIsSidebar(prev => !prev);

  const [toogleInfo, settToogleInfo] = useState(false)
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className='flex relative min-h-[100dvh] w-full'>
      <div className="topnavigation flex items-center justify-between fixed z-40 top-0 left-0 right-0 w-full mt-2 px-1">
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
            <Button onClick={profileBtnClick}>
              <img src='src\assets\tem111.png' className='object-cover rounded-full' />
            </Button>
          </div>
          <div className={`userinfotogle ${toogleInfo ? "" : "hidden"} absolute top-10 right-10`}>
            <Userinfotoggle />
          </div>
        </div>
      </div>
      {isSidebar && <div className='w-full h-full bg-black/80 fixed z-10 md:hidden'></div>}
      <div className={`sidebar ${isSidebar ? "w-[16rem]" : ' w-0 overflow-hidden'} transition-all duration-300 ease-in-out border border-l border-white/20 absolute z-10 bg-black md:z-0 md:static flex h-full `}></div>
      <div className="mainarea flex relative flex-col flex-1 justify-center items-center">
        <div className="allcontent flex w-full h-full justify-center items-center flex-col p-2 pt-12">
          <div className={`greeting flex w-fit mx-auto bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text justify-center`}>
            <h1 className='font-normal text-base md:text-3xl '>Just ask DSA-based plz</h1>
          </div>
        </div>
        <div className='downcontent p-4 w-full'>
          <div className="usertextarea flex flex-col relative items-center justify-center border border-white/20 rounded-lg w-full max-w-3xl min-w-[200px] p-2 mx-auto">
            <div className='textArea flex w-full justify-center overflow-hidden pt-1'>
              <textarea
                ref={textArearef}
                onInput={adjustHeight}
                onKeyDown={handlekeyDown}
                value={text}
                className="w-full max-w-3xl min-w-[200px] mx-auto text-base resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-900 scrollbar-track-transparent
                scrollbar-thumb-rounded-full focus:outline-none focus:ring-0 border-none border border-white/20 bg-transparent"
                placeholder='get only hints and theoretical solution'
                rows={1}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div title='upload' className='iconsuploads flex w-full justify-between pt-2  items-center'>
              <ImAttachment />
              <div title='send' className="submitbtndiv flex items-center justify-center rounded-md hover:bg-white/20">
                <Button onClick={sendBtnClick}>
                  <RiSendPlaneFill size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
