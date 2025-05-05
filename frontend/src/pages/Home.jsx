import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../components/Buttons';
import Userinfotoggle from '../components/Userinfotoggle';
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { RiSendPlaneFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import userImage from '../assets/tem111.png'
import Inputfeild from '../components/Inputfeild';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [sidebarContent, setSidebarContent] = useState(true);
  const [isUserscrolling , setIsUserscrolling] = useState(false);
  
  const messagesEndRef = useRef();
  const textAreaRef = useRef(null);
  const contentRef = useRef();
  
  useEffect(() => {
    if (!isUserscrolling && messagesEndRef.current){
      messagesEndRef.current.scrollIntoView({behavior: "instant", block: "end"})
    }
  }, [messages.length]);


  const handleScroll = () => {
    const el = contentRef.current;
    const atbottom = Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 5 ;
    setIsUserscrolling(!atbottom);
  };

  useEffect(()=>{
    const content = contentRef.current;
    content.addEventListener('scroll' , handleScroll);

    return () =>{
      content.removeEventListener('scroll', handleScroll );
    };
  }, []);

  const toggleSidebar = () => {
    if (isSidebar) {
      setSidebarContent(false);
      setIsSidebar(false);
      }
    else{
      setSidebarContent(true);
      setIsSidebar(true);
     
    }
  };

  const sendMessage = async () => {
    if (text.trim() === '' && !file) return;
    
    // Add user message
    const userMessage = { role: 'user', content: text, file: file };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setText('');
    setFile(null);
    
    // Simulate AI response
    setIsLoading(true);
    
    try {
      // Replace with actual API call to your AI service
      // const response = await fetchAIResponse(text, file);
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const aiResponse = { 
        role: 'assistant', 
        content: `This is a simulated response to: "${text}"` 
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: 'Sorry, there was an error processing your request.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  },[sendMessage]);

  const adjustHeight = () => {
    const el = textAreaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 250)}px`;

    if (el.scrollHeight > 250) {
      el.style.overflowY = "auto";
    } else {
      el.style.overflowY = "hidden";
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [text]);

  return (
    <div className='flex relative min-h-[100dvh] w-full overflow-hidden'>
      {/* Top Navigation */}
      <div className="topnavigation flex items-center justify-between fixed z-10 md:z-40 top-0 left-0 right-0 w-full mt-2 px-1">
        <div className="logbox flex items-center p-1">
          <img src='/logoimg.png' className='w-8 h-8' alt="Logo" />
          <span className='text-lg font-pixelify'>Guardian</span>
          <div className='toglesidebar mt-1 ml-1'>
            <Button onClick={toggleSidebar}>
              {isSidebar ? <GoSidebarCollapse /> : <GoSidebarExpand />}
            </Button>
          </div>
        </div>
        <div className="userinfo relative flex flex-col p-1">
          <div className="userlogo w-10 h-10">
            <Button onClick={() => setToggleInfo(prev => !prev)}>
              <img src={userImage} className='object-cover rounded-full' alt="User" />
            </Button>
          </div>
          <div className={`userinfotogle ${toggleInfo ? "" : "hidden"} absolute top-10 right-10`}>
            <Userinfotoggle />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebar && <div className='w-full h-full bg-black/80 fixed z-10 md:hidden'></div>}
      
      {/* Sidebar */}
      <div className={`sidebar ${isSidebar ? "translate-x-0 w-64" : '-translate-x-full'} flex min-h-full transition-all duration-500 ease-in-out border-r border-white/20 absolute z-20 bg-black md:z-0 md:static`}>
        {sidebarContent && (
          <div className="sidebar-content w-full pt-16 px-2">
            <div className='crossicon absolute top-5 right-5  md:hidden' title='close'>
              <Button onClick={toggleSidebar}><RxCross2 /></Button>
            </div>
            <h2 className="text-xl font-medium mb-4">Recent Chats</h2>
            <div className="chat-list space-y-2">
              {/* Add your chat history items here */}
              <div className="chat-item p-2 rounded hover:bg-white/10 cursor-pointer">
                DSA Problem Solving
              </div>
              <div className="chat-item p-2 rounded hover:bg-white/10 cursor-pointer">
                Algorithm Tips
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Main Content Area */}
      <div className="mainarea flex relative flex-col flex-1 mt-16 justify-between items-center overflow-hidden ">
        <div ref={contentRef} className="allcontent absolute inset-x-0
             top-16
             bottom-24
             flex flex-col p-8 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-neutral-500">
          {messages.length === 0 ? (
            <div className="greeting flex flex-col items-center justify-center h-full w-full">
              <h1 className='font-normal text-base md:text-3xl bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text'>
                Just ask DSA-based questions
              </h1>
              <div className="suggestion-chips flex flex-wrap gap-2 mt-6 justify-center">
                <div className="chip px-3 py-1 bg-white/10 rounded-full cursor-pointer hover:bg-white/20">
                  Explain time complexity
                </div>
                <div className="chip px-3 py-1 bg-white/10 rounded-full cursor-pointer hover:bg-white/20">
                  Help with binary search
                </div>
                <div className="chip px-3 py-1 bg-white/10 rounded-full cursor-pointer hover:bg-white/20">
                  Dynamic programming tips
                </div>
              </div>
            </div>
          ) : (
            <div className='messages flex flex-col gap-4 w-full max-w-2xl pb-10 mx-auto'>
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`message p-3 rounded-xl ${
                    msg.role === 'user' ? 'bg-[#192333] ml-auto' : 
                    msg.role === 'system' ? 'bg-red-900/30' : ' mr-auto'
                  } max-w-[85%]`}
                >
                  <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                  {msg.file && (
                    <div className="file-preview mt-2 p-2 bg-black/30 rounded-md">
                      <p className='text-xs text-gray-400'>{msg.file.name}</p>
                      {msg.file.type.startsWith('image/') && (
                        <img 
                          src={URL.createObjectURL(msg.file)} 
                          alt="Preview" 
                          className="mt-2 max-h-40 rounded-md" 
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
              {isLoading && (
                <div className="loading-indicator p-3 rounded-xl bg-gray-800/60 max-w-[85%]">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Input Area */}
        <div className='downcontent fixed bottom-0 p-4 w-full mx-auto bg-gradient-to-t from-black via-black to-transparent'>
          <div className="usertextarea flex flex-col relative items-center justify-center border border-white/20 rounded-xl w-full max-w-3xl min-w-[200px] p-2 mx-auto bg-black">
            <div className='textArea flex w-full justify-center overflow-hidden pt-1 px-2'>
              <textarea
                ref={textAreaRef}
                onInput={adjustHeight}
                onKeyDown={handleKeyDown}
                value={text}
                className="w-full max-w-3xl min-w-[200px] mx-auto text-base resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-900 scrollbar-track-transparent
                scrollbar-thumb-rounded-full focus:outline-none focus:ring-0 border-none bg-transparent"
                placeholder='Get hints and theoretical solutions for DSA problems...'
                rows={1}
                onChange={(e) => setText(e.target.value)}
                disabled={isLoading}
              ></textarea>
            </div>
            <div className='iconsuploads flex w-full justify-between pt-2 items-center'>
              <Inputfeild file={file} setFile={setFile} disabled={isLoading} />
              <div title={isLoading ? 'Loading...' : 'Send'} className="submitbtndiv flex items-center justify-center rounded-md md:hover:bg-white/20">
                <Button onClick={sendMessage} disabled={isLoading}>
                  <RiSendPlaneFill size={20} className={isLoading ? 'opacity-50' : ''} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;