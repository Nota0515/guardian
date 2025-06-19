import {BsThreeDots} from 'react-icons/bs';
import Button from './Buttons';
import { useState } from 'react';


const SidebarCon = ({ chats, chatId, onSelect , onRename , onDelete }) => {
    const [openMenuId , setOpenMenuId ] = useState(null);
    const toggleMenu = (id) => {
        setOpenMenuId(prev => (prev === id ? null : id));
    }
    return (
        <div className='sidebar-content w-64 pt-16 px-2 h-full flex flex-col'>
            <h2 className="text-xl font-mainFont font-medium mb-4 shrink-0">Recent Chats</h2>
            <div className="chat-list h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-950/20 pr-1 min-h-0">
                {chats.length === 0 ? (
                    <div className='nopastchat text-gray-400 italic'>No History</div>
                ) : (
                    chats.map(chat => (
                        <div
                            key={chat._id}
                            onClick={() => onSelect(chat._id)}
                            className={`chat-item p-2 mr-4 flex relative justify-between items-center group font-mainFont font-extralight rounded-xl
                                ${chat._id === chatId ? "bg-blue-300/20" : "md:hover:bg-blue-300/10" }
                                 cursor-pointer`}
                        >
                            <span onClick={() => onSelect(chat._id)} className="truncate">{chat.title}</span>

                            {/*here we will create the 3dot hover effect */}
                            <div className='flex opacity-100 md:opacity-0 md:group-hover:opacity-100 pr-2 items-center transition-opacity duration-75'>
                                <Button onClick={(e)=>{
                                    e.stopPropagation();
                                    toggleMenu(chat._id)}}>
                                    <BsThreeDots />
                                </Button>
                            </div>
                            {/*the menu toggle will open on the basis of the openmenuID mechanism */}
                            {openMenuId === chat._id &&
                            <div className='absolute flex flex-col items-center justify-center gap-y-2  right-2 top-10 w-20 h-20 bg-black border border-white/20 text-sm rounded-md z-10 py-1 px-2 space-y-1'>
                                <button className='block hover:bg-gray-700 text-gray-500'
                                onClick={()=>{
                                    onRename(chat._id)
                                    setOpenMenuId(null);
                                }}
                                >
                                    rename
                                </button>
                                <button className='block text-red-600 hover:bg-red-600/10 '
                                onClick={()=>{
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

export default SidebarCon ;

