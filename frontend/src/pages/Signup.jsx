import { useState } from 'react'
import Button from '../components/Buttons'
import { useEffect, } from 'react';
import API from '../api/index';
import { Link , useNavigate } from 'react-router-dom';

const Signup = () => {

  const [createPassword , setCreatePassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');
  const [ error , setError ] = useState('');
  const [email , setEmail] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const email = formdata.get('email');
    const password = formdata.get('createPassword');
    const confirmPassword = formdata.get('confirmPassword');
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /* 1st we will check the valid email */
    if(!emailregex.test(email)){
      setEmailerror("plz enter a valid email");
      return;
    }


    if (password.length < 8){
      setPasswordError("password must be atleast be 8 character long")
      return;
    }else{
      setPasswordError('')
    }

    if( createPassword !== confirmPassword){
      setError("password does not match");
      return;
    }

    try {
      const res = await API.post('/auth/signup' , {
        email,
        password: createPassword
      });
      localStorage.setItem('token' , res.data.token)
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed')
    }
    setError('');
    console.log('form submitted sucessfully')

  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scroll on unmount
    };
  }, []);


  return (
    <div className='flex items-center justify-center h-screen w-screen bg-gradient-radial from-black via-black to-blue-600/10'>
      <div className='flex w-[21.75rem] border-n-1/20  border rounded-lg items-start justify-center px-5 py-5 mx-10 md:mx-5 lg:mx-0 transition-shadow duration-300 hover:shadow-[0_0_50px_10px_rgba(37,99,235,0.1)]'>
        <div className='flex flex-col justify-center w-full flex-wrap gap-y-5'>
          <div className='heading-log'>
            <h2 className='text-2xl font-semibold font-pixelify mb-2'>Sign Up</h2>
            <h5 className='text-sm  text-gray-500'>Create a new account to get started</h5>
          </div>
          <div className='form-input'>
            <form name='usermail' method='post' onSubmit={handleSubmit}>
              <div className='email-input py-2 mb-2'>
                <label htmlFor="email" className="block text-sm font-medium  text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name='email'
                  id="email"
                  placeholder='you@example.com'
                  onChange={(e)=>setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 bg-zinc-900 700 border border-gray-300/20 rounded-md"
                />
                {emailerror && <p className="text-red-900 text-sm ">{emailerror}</p>}
              </div>
              <div className='password-input flex flex-col gap-y-2'>
                <label htmlFor='createPassword' className='block text-sm font-medium  text-gray-300 '>Create Password</label>
                <input
                  type='password'
                  name='createPassword'
                  id="createPassword"
                  onChange={(e)=> setCreatePassword(e.target.value)}
                  className=' block w-full p-2 bg-zinc-900 700 border border-gray-300/20 rounded-md'
                />
                {passwordError && <p className="text-red-900 text-sm ">{passwordError}</p>}
                <label htmlFor='confirmPassword' className='block text-sm font-medium  text-gray-300 '>Confirm password</label>
                <input
                  type='password'
                  name='confirmPassword'
                  id="confirmPassword"
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                  className=' block w-full p-2 bg-zinc-900 700 border border-gray-300/20 rounded-md'
                />
                {error && <p className="text-red-900 text-sm ">{error}</p>}
              </div>
              <div className='flex justify-center items-center mt-2 py-2'>
                <Button type={'submit'} className={"text-zinc-900  mx-auto w-full font-medium bg-slate-100 hover:bg-slate-300 rounded-md"} >Sign Up</Button>
              </div>
            </form>
          </div>
          <div className='siguproute relative'>
            <div className='absolute inset-0 flex items-center'><span className='w-full border-t border-n-1/20'></span></div>
            <div className='flex relative justify-center text-xs uppercase '>
              <span className='bg-black px-2 text-gray-300'>
                or&nbsp;<span><Link to="/login">login</Link></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup