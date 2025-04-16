import React from 'react'
import Button from '../components/Buttons'
import Squares from '../components/BgAnimate'

const Pricing = () => {


  const handleClick = () => {
    console.log("user try to go to checkout")
  }


  return (
    <div className='flex w-screen h-full flex-col gap-5 md:gap-10 py-10 px-2 sm:px-4 md:px-10 lg:py-5 justify-center items-center'>
     { /*<div className='bganimation absolute top-0 left-0 opacity-5'>
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>*/}
      <div className='Headline flex flex-col items-center gap-2 mx-auto w-auto py-10'>
        <div className='Logotext flex gap-2'>
          <img
            src="/logoimg.png"
            alt="Logo"
            className=":w-10 h-10 object-contain"
          />
          <h1 className='text-4xl md:text-5xl font-pixelify'>Guardian</h1>
        </div>
        <div className="text-center text-base md:text-lg max-w-[20.438rem] ">
          <p>Boost your DSA skills with Guardian Pro today.</p>
        </div>
      </div>
      <div className='price-content flex p-1 flex-col-reverse md:flex-row lg:flex-row gap-x-8 gap-y-8 mx-auto min-h-full'>
        <div className='mainpricecontent1 flex flex-col pt-10 pr-0 md:pr-20 bg-gradient-to-r from-slate-950 to-black rounded-xl border border-slate-200/20 ml-0 md:ml-auto my-auto h-auto p-4'>
          <div className="heading flex text-white/80 text-2xl font-semibold">
            <h1>🔒Free Tier(API-Based Hints)</h1>
          </div>
          <div className='bulletspoints flex mt-4 p-1 text-sm text-white/60'>
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
            <Button disabled className="w-24 h-10 rounded-full text-white/50 line-through bg-zinc-700" >0$/month</Button>
          </div>
        </div>
        <div className='mainpricecontent2 flex flex-col relative w-auto shadow-2xl bg-gradient-to-r from-cyan-100 via-blue-300 to-indigo-400 rounded-xl border border-blue-500/20 mr-0 md:mr-auto my-auto h-auto p-4 pt-20 md:y-10'>
          <div className="heading flex text-black text-2xl font-semibold">
            <h1>🚀 Paid Tier (Custom Trained Model)</h1>
          </div>
          <div className='IMPnotice px-2  absolute flex justify-center items-center top-7 left-5 bg-white/30 border border-black/20 py-1 rounded-md'>
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
            <Button className="w-auto h-10 px-4 rounded-full bg-black hover:bg-black/90 text-white" onClick={handleClick}>4.99$/month</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Pricing
