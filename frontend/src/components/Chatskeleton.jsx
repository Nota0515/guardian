import React from 'react'

const Chatskeleton = () => {
    return (
        <div className="chatSkull flex flex-col h-full w-full  md:max-w-3xl space-y-11 bg-transparent p-5 md:p-10 animate-pulse duration-75">
            <div className="merabuble pl-40 h-20">
                <div className="bg-gray-800 h-full rounded-xl"></div>
            </div>
            <div className="merabuble pr-40 h-20">
                <div className="bg-gray-700 h-full rounded-xl"></div>
            </div>
            <div className="merabuble pl-40 h-20">
                <div className="bg-gray-600 h-full rounded-xl"></div>
            </div>
            <div className="merabuble h-full">
                <div className="bg-gray-500 h-full rounded-xl"></div>
            </div>
        </div>
    )
}

export default Chatskeleton
