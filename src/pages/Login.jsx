import React from 'react'
import Button from '../components/Buttons'

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("the Button was clicked")
  };






  return (
    <div className='flex items-center justify-center'>
      <div className='flex w-[21.75rem] border-n-1/20 border rounded-lg items-start justify-center px-5 py-5'>
        <div className='flex flex-col justify-cente flex-wrap gap-y-5'>
          <div className='heading-log'>
            <h2 className='text-2xl font-semibold font-pixelify mb-2'>Login</h2>
            <h5 className='text-sm font-pixelify text-gray-500'>enter your email and password to login to your account</h5>
          </div>
          <div className='form-input'>
            <form name='usermail' method='post' onSubmit={handleSubmit}>
              <div className='email-input py-2 mb-2'>
                <label htmlFor="email" className="block text-sm font-medium font-pixelify text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder='you@example.com'
                  className="mt-1 block w-full p-2 bg-zinc-900 700 border border-gray-300/20 rounded-md"
                />
              </div>
              <div className='password-input'>
                <label htmlFor='password' className='block text-sm font-medium font-pixelify text-gray-300 mb-2'>Password</label>
                <input
                  type='password'
                  id="password"
                  className='mt-1 block w-full p-2 bg-zinc-900 700 border border-gray-300/20 rounded-md'
                />
              </div>
              <div className='flex justify-center items-center mt-2 py-2'>
                <Button type={'submit'} className={"text-zinc-900 font-pixelify mx-auto w-full bg-slate-100 hover:bg-slate-300 rounded-md"} >Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
