import React from 'react'


const SidebarCon = ({ chats, activeChatid, onSelect }) => {
    return (
        <div className='sidebar-content w-64 pt-16 px-2'>
            <h2 className="text-xl font-medium mb-4">Recent Chats</h2>
            <div className="chat-list space-y-2">
                {chats.length === 0 ? (
                    <div className='nopastchat text-gray-400 italic'>No History</div>
                ) : (
                    chats.map(chat => (
                        <div
                            key={chat._id}
                            onClick={() => onSelect(chat._id)}
                            className={`chat-item p-2 mr-4 rounded 
                                ${chat._id === activeChatid ? "bg-white/20" : "hover:bg-white/10" }
                                 cursor-pointer`}
                        >
                            {chat.title}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SidebarCon ;

