import Button from '../components/Buttons'
import { useEffect, useState, } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import API from '../api/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login' , {email , password})
      localStorage.setItem('token' , res.data.token ); // this will store the jwt token to frontend client in localstorage of browser
      navigate('/') // after succesfull login this will redirect to the main dashboard
    } catch (err) {
      alert(err.response?.data?.message || "login failed")
      console.error(err);
    }
    console.log("the Button was clicked")
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
        <div className='flex flex-col justify-center flex-wrap gap-y-5'>
          <div className='heading-log'>
            <h2 className='text-2xl font-semibold font-pixelify mb-2'>Login</h2>
            <h5 className='text-sm text-gray-500'>enter your email and password to login to your account</h5>
          </div>
          <div className='form-input'>
            <form name='usermail' method='post' onSubmit={handleSubmit}>
              <div className='email-input py-2 mb-2'>
                <label htmlFor="email" className="block text-sm font-medium = text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder='you@example.com'
                  onChange={(e)=>setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 bg-zinc-900 700 border border-gray-300/20 rounded-md"
                />
              </div>
              <div className='password-input'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-300 mb-2'>Password</label>
                <input
                  type='password'
                  id="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  className='mt-1 block w-full p-2 bg-zinc-900 700 border border-gray-300/20 rounded-md'
                />
              </div>
              <div className='flex justify-center items-center mt-2 py-2'>
                <Button type={'submit'} className={"text-zinc-900 font-medium mx-auto w-full bg-slate-100 hover:bg-slate-300 rounded-md"} >Login</Button>
              </div>
            </form>
          </div>
          <div className='siguproute relative'>
            <div className='absolute inset-0 flex items-center'><span className='w-full border-t border-n-1/20'></span></div>
            <div className='flex relative justify-center text-xs uppercase'>
              <span className='bg-black px-2 text-gray-300'>
                or&nbsp;<span><Link to="/signup">signup</Link></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
