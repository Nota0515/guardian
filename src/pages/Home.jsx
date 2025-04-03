import { useEffect, useState , useRef } from 'react';
import Inputfeild from '../components/Inputfeild'
import { IoSend } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import Userinfotoggle from '../components/Userinfotoggle'
import { Link } from "react-router-dom"
import Button from '../components/Buttons'

const Home = () => {

  const [isSidebar, setIsSidebar] = useState(false);
  const [isinfo, setIsinfo] = useState(false)
  const [userprompt, setuserprompt] = useState('');

  const textAreaRef = useRef(null);

  const handleTextArea = (e) => {
    setuserprompt(e.target.value);
    adjustTextareaHeight();
  }

  const adjustTextareaHeight = () => {
    const textarea = textAreaRef.current;
    if(!textarea) return ;
    textarea.style.height = 'auto'
    const newHeight = Math.min(textarea.scrollHeight , 300);
    textarea.style.height = `${newHeight}px`
  }


  useEffect(()=>{
    adjustTextareaHeight();
  }, [userprompt])

  const handleSlideBar = () => {
    if (isSidebar) {
      setIsSidebar(false);
    } else {
      setIsSidebar(true);
    }
  }



  const handleClick = () => {
    console.log("wtyoujh")
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
    <div className='flex items-center relative flex-row w-screen min-h-screen'>
      <div className="mainscreencontent flex relative bg-gradient-radial from-black/90 via-black to-blue-900/10 justify-center flex-1 w-full h-screen">
        <header className="topnavigation absolute w-full p-2 mt-3 top-0 left-0 flex items-center justify-between select-none">
          <div className="companylogo flex p-2 scale-90 md:scale-100 rounded-md lg:hover:bg-white/10 select-none">
            <Link to={'/'} className='flex flex-nowrap items-center'>
              <img src='/logoimg.png' className='w-8 h-8 mr-1 content-start' />
              <span className='font-pixelify text-white text-2xl ' >Guardian</span>
            </Link>
          </div>
          <div className="userprofile">
            <div className="userlogo p-1 scale-90 md:scale-100 lg:hover:bg-white/10 rounded-md">
              <Button onClick={displayUserinfo}>
                <div className='h-8 w-8 rounded-full overflow-hidden'>
                  <img src='src\assets\tem111.png' className='object-contain' />
                </div>
              </Button>
            </div>
          </div>
        </header>
        <div className={`userinfo absolute top-20 right-0 pr-4 w-40 h-36 ${isinfo ? '' : 'hidden'}`}>
          <Userinfotoggle />
        </div>
        <div className='restmain w-full h-full flex flex-col p-1 md:p-2 lg:p-4'>
          <div className="greetingUser flex items-center translate-y-[20%] justify-center w-full h-[30rem] p-5">
            <h1 className='text-2xl font-bold h-12 bg-text-gradient bg-clip-text text-transparent'>
              Hello ,<span>User</span>
            </h1>
          </div>
          <div className="res-field"></div>
          <div className="promptfeild w-full bottom-0 flex flex-1 px-2 items-center justify-center">
            <div className='input-feild-div relative w-full p-1 mt-1 min-h-28 rounded-3xl border border-white/20'>
              <div className="inputfeild flex w-full h-full px-2">
                <textarea
                placeholder='Ask me any DSA question'
                className='text-white bg-transparent resize-none overflow-hidden w-full px-2 text-lg outline-none '
                value={userprompt}
                ref={textAreaRef}
                onChange={handleTextArea}
                rows={1}
                />
              </div>
              <div className="uploadicon absolute bottom-2 left-2 w-10 h-10 bg-blue-900/10 rounded-full active:bg-blue-900/20">
              <Button onClick={handleClick} className="w-full h-full"><GoPlus size={30} color='grey' /></Button>
              </div>
              <div className="uploadicon absolute bottom-2 right-2 w-10 h-10 bg-blue-900/10 rounded-full active:bg-blue-900/20">
              <Button onClick={handleClick} className="w-full h-full"><IoSend  size={20} color='grey' /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home