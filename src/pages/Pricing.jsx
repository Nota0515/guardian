import React from 'react'
import Button from '../components/Buttons'

const Pricing = () => {
  return (
    <div className='flex w-screen min-h-screen py-10 px-5 sm:px-10 lg:py-5 justify-center items-center'>
      <div className='price-content flex p-1 flex-col md:flex-row lg:flex-row w-[70rem] gap-x-8 gap-y-8 mx-auto min-h-full'>
        <div className='mainpricecontent flex flex-col relative w-auto bg-black rounded-xl border border-white/20 ml-0 md:ml-auto my-auto h-auto p-4'>
          <div className="heading flex text-2xl font-sans font-extrabold">
            <h1>🔒Free Tier (API-Based Hints)</h1>
          </div>
          <div className='bulletspoints flex mt-4 p-1 text-sm'>
            <ul className='list-disc pl-5 space-y-3'>
              <li>Uses third-party API (e.g., OpenAI) to provide hints.</li>
              <li>Limited usage per day (e.g., 3–5 hints).</li>
              <li>General-purpose hints, not deeply personalized.</li>
              <li>Slower response times due to external API latency.</li>
              <li>Great for trying out the platform.</li>
            </ul>
          </div>
          <div className="yourplan flex flex-col gap-y-2 items-start justify-start text-black mt-4 h-auto w-auto">
            <div className="userplan mt-1"><p className='text-base text-gray-700'>&nbsp;your current plan</p></div>
            <Button className="w-24 h-10 rounded-full line-through bg-zinc-700">0$/month</Button>
          </div>
        </div>
        <div className='mainpricecontent flex flex-col relative w-auto bg-black rounded-xl border border-white/20 mr-0 md:mr-auto my-auto h-auto p-4'>
          <div className="heading flex text-2xl font-sans font-extrabold"> 
            <h1>🔒Free Tier (API-Based Hints)</h1>
          </div>
          <div className='bulletspoints flex mt-4 p-1 text-sm'>
            <ul className='list-disc pl-5 space-y-3'>
              <li>Uses third-party API (e.g., OpenAI) to provide hints.</li>
              <li>Limited usage per day (e.g., 3–5 hints).</li>
              <li>General-purpose hints, not deeply personalized.</li>
              <li>Slower response times due to external API latency.</li>
              <li>Great for trying out the platform.</li>
            </ul>
          </div>
          <div className="yourplan flex flex-col gap-y-2 items-start justify-start text-black mt-4 h-auto w-auto">
            <div className="userplan mt-1"><p className='text-base text-gray-700'>&nbsp;your current plan</p></div>
            <Button className="w-24 h-10 rounded-full line-through bg-zinc-700">0$/month</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Pricing
