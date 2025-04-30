import React from 'react'
import { useRef, useState } from 'react'
import { ImAttachment } from "react-icons/im";
import { X } from 'lucide-react'


const Inputfeild = ({file , setFile ,  className }) => {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => fileInputRef.current.click();

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        console.log("selected file", selected);
        if (selected) setFile(selected);
    };

    const handleRemove = () => setFile(null)

    return (
        <div>
            {file && (
                <div className="absolute -top-14 left-2 flex items-center gap-2 bg-[#2b2b3d] px-4 py-2 rounded-full shadow border border-white/20">
                    <p className='text-sm text-white truncate max-w-[200px]'>{file.name}</p>
                    <button onClick={handleRemove} className='text-gray-400 hover:text-white'>
                        <X size={16} />
                    </button>
                </div>
            )}

            <div title='upload' className={`flex items-center rounded-md md:hover:bg-white/10 ${className || ''}`}>
                <button onClick={handleUploadClick} className="text-white w-full h-full p-2">
                    <ImAttachment size={18} />
                </button>
                <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
            </div>
        </div>
    );
};

export default Inputfeild;
