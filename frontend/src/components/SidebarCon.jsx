import {BsThreeDots} from 'react-icons/bs';
import Button from './Buttons';
import { useState } from 'react';


const SidebarCon = ({ chats, chatId, onSelect , onRename , onDelete }) => {
    const [openMenuId , setOpenMenuId ] = useState(null);
    const toggleMenu = (id) => {
        setOpenMenuId(prev => (prev === id ? null : id));
    }
    return (
        <div className='sidebar-content w-64 pt-16 px-2'>
            <h2 className="text-xl font-mainFont font-medium mb-4">Recent Chats</h2>
            <div className="chat-list space-y-2">
                {chats.length === 0 ? (
                    <div className='nopastchat text-gray-400 italic'>No History</div>
                ) : (
                    chats.map(chat => (
                        <div
                            key={chat._id}
                            onClick={() => onSelect(chat._id)}
                            className={`chat-item p-2 mr-4 flex relative justify-between items-center group font-mainFont font-extralight rounded-xl
                                ${chat._id === chatId ? "bg-white/20" : "hover:bg-white/10" }
                                 cursor-pointer`}
                        >
                            <span onClick={() => onSelect(chat._id)} className="truncate">{chat.title}</span>

                            {/*here we will create the 3dot hover effect */}
                            <div className='opacity-0 group-hover:opacity-100 pr-2 transition-opacity duration-75'>
                                <Button onClick={(e)=>{
                                    e.stopPropagation();
                                    toggleMenu(chat._id)}}>
                                    <BsThreeDots />
                                </Button>
                            </div>
                            {/*the menu toggle will open on the basis of the openmenuID mechanism */}
                            {openMenuId &&
                            <div className='absolute right-2 top-10 bg-gray-900 text-sm rounded-md z-10 py-1 px-2 space-y-1'>
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

