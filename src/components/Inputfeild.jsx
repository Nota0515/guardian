import React from 'react'
import Button from './Buttons'
import { useState } from 'react';
import { IoCodeSlashOutline } from "react-icons/io5";


const Inputfeild = ({className }) => {
  const [inputValue, setInputValue] = useState('')

  const handleClick = ()  =>{
    console.log(`your message was ${inputValue}`)
  }

  return (
    <div className='flex flex-row items-center w-full h-full'>
      <div className='inputfeild flex relative flex-1 rounded-2xl overflow-hidden border border-white/20'>
      <input
      type='text'
      onChange={(e)=> setInputValue(e.target.value)}
      value={inputValue}
      placeholder='Ask Any DSA Question'
      className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      </div>
      <div className='Btn w-7 h-7'>
        <Button children="p-1 rounded-full bg-white hover:bg-white/90 " onClick={handleClick}><IoCodeSlashOutline /></Button>
      </div>
    </div>
  )
}

export default Inputfeild
