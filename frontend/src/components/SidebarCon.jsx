import { BsThreeDots } from 'react-icons/bs';
import Button from './Buttons';
import { useEffect, useRef, useState } from 'react';


const SidebarCon = ({ chats, chatId, onSelect, onRename, onDelete }) => {
    const menuref = useRef(null);

    const [openMenuId, setOpenMenuId] = useState(null);
    const toggleMenu = (id) => {
        setOpenMenuId(prev => (prev === id ? null : id));
    }

    useEffect((e) => {
        const handleOutClick = (e) => {
            if (menuref.current && !menuref.current.contains(e.target)) {
                setOpenMenuId(null);
            }
        };
        document.addEventListener('click', handleOutClick);
        return () => document.removeEventListener('click', handleOutClick);
    }, []);


    return (
        <div className='sidebar-content2 pt-5 px-2 min-h-0 pb-10 flex flex-col'>
            <h2 className="text-xs font-semibold font-mainFont text-gray-500 mb-4 ml-2 shrink-0">Recent</h2>
            <div className="chat-list overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-950/20 pr-1 min-h-0">
                {chats.length === 0 ? (
                    <div className='nopastchat text-gray-400 italic'>No History</div>
                ) : (
                    chats.map(chat => (
                        <div
                            key={chat._id}
                            onClick={() => onSelect(chat._id)}
                            className={`chat-item p-2 mr-2 flex relative ${openMenuId === chat._id ? "bg-blue-300/20" : ''} text-gray-200 text-sm justify-between items-center group font-mainFont rounded-xl
                                ${chat._id === chatId ? "bg-blue-300/10 md:hover:bg-blue-300/20" : "md:hover:bg-blue-300/20"}
                                 cursor-pointer`}
                        >
                            <span className="truncate pl-1">{chat.title}</span>

                            {/*here we will create the 3dot hover effect */}
                            <div className={`flex opacity-100  ${openMenuId === chat._id ? 'opacity-100' : 'md:opacity-0 md:group-hover:opacity-100'} pr-2 items-center transition-opacity duration-75`}>
                                <Button onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMenu(chat._id)
                                }}>
                                    <BsThreeDots />
                                </Button>
                            </div>
                            {/*the menu toggle will open on the basis of the openmenuID mechanism */}
                            {openMenuId === chat._id &&
                                <div ref={menuref} className='absolute flex flex-col justify-center right-1 top-10 bg-gray-950 border border-white/20 text-base font-mainFont rounded-lg p-1 z-10'>
                                    <button className='block hover:bg-gray-800 p-1 rounded-md px-3 text-gray-300'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onRename(chat._id)
                                            setOpenMenuId(null);
                                        }}
                                    >
                                        rename
                                    </button>
                                    <div className='w-full border border-white/10 my-1'></div>
                                    <button className='block text-red-400 p-1 rounded-md hover:bg-orange-950 '
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onDelete(chat._id)
                                            setOpenMenuId(null);
                                        }}
                                    >
                                        delete
                                    </button>
                                </div>
                            }
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SidebarCon;

