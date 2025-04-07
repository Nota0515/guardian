import React from 'react'
import Button from '../components/Buttons'

const Pricing = () => {
  return (
    <div className='flex w-screen min-h-screen py-10 px-5 sm:px-10 lg:py-5 justify-center items-center'>
      <div className='price-content flex p-1 flex-col md:flex-row lg:flex-row w-[70rem] gap-x-8 gap-y-8 mx-auto min-h-full'>
        <div className='mainpricecontent1 flex flex-col relative w-auto bg-gradient-to-r from-slate-950 to-black rounded-xl border border-slate-200/20 ml-0 md:ml-auto my-auto h-auto p-4'>
          <div className="heading flex text-2xl font-bold">
            <h1>🔒Free Tier(API-Based Hints)</h1>
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
            <Button className="w-24 h-10 rounded-full text-white/50 line-through bg-zinc-700">0$/month</Button>
          </div>
        </div>
        <div className='mainpricecontent2 flex flex-col relative w-auto shadow-2xl bg-gradient-to-r from-cyan-100 via-blue-300 to-indigo-400 rounded-xl border border-blue-500/20 mr-0 md:mr-auto my-auto h-auto p-4'>
          <div className="heading flex text-black text-2xl font-bold"> 
            <h1>🔓 Paid Tier (Custom Trained Model)</h1>
          </div>
          <div className='IMPnotice px-2  absolute flex justify-center items-center top-7 right-10 bg-white/30 border border-black/20 py-1 rounded-md'>
            <span className='text-sm text-black font-semibold'>🎉Most popular</span>
          </div>
          <div className='bulletspoints flex mt-4 p-1 text-black text-sm'>
            <ul className='list-disc pl-5 space-y-3'>
              <li>Access to Guardian’s own fine-tuned model trained on all DSA patterns.</li>
              <li>Provides intelligent, pattern-based hints (e.g., "Try prefix sum," "Looks like a two-pointer problem").</li>
              <li>Faster, offline-capable, and more reliable.</li>
              <li>Deep personalization and better context handling.</li>
              <li>No third-party dependency — fully in your control.</li>
              <li>Potential for custom difficulty levels or problem-specific guidance.</li>
            </ul>
          </div>
          <div className="yourplan flex flex-col gap-y-2 items-start justify-start text-black mt-4 h-auto w-auto">
            <div className="userplan mt-1"><p className='text-base text-gray-700'>&nbsp;Price are marked in USD</p></div>
            <Button className="w-auto h-10 px-4 rounded-full bg-black hover:bg-black/90 text-white">4.99$/month</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Pricing
