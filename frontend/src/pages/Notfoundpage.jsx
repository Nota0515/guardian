import { Heading } from 'lucide-react'
import React from 'react'

const Notfoundpage = () => {
  return (
    <div className='w-screen h-screen flex flex-col space-y-4 py-10 justify-center items-center bg-black'>
        <div className='img of notfound w-[10rem] border-4 border-red-600 '>
            <img src='/public/developer.gif' className='object-cover' />
        </div>
        <div className='flex flex-col justify-center items-center w-full h-auto text-nowrap font-mainFont font-semibold'>
            <h2>Maybe I am just developing this page :)</h2>
            <h1 className='text-9xl'>404!</h1>
        </div>
    </div>
  )
}

export default Notfoundpage