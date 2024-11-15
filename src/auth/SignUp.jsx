import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput( data => ({
      ...data, [name]: value
    }))
  }
  
  const handleLogin = async(event) => {
    event.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((userDetails) => {
        toast.success( userDetails?.email + " logged in successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/movies/nowplaying")
      })
      .catch((error) => {
        const errorDetails = error?.message
        toast.error(errorDetails, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      // alert("Account created successfully");
      
    }
    catch{ 
        toast.error("Invalid Creedentails", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      alert("invalid credentials")
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="flex gap-y-4 justify-center flex-col items-center mx-auto border border-[#1a34d3] rounded-[10px] p-[30px] px-[35px] w-[400px]">
          <div className='w-full'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" name="email" onChange={handleChange} required />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" name="password"  onChange={handleChange} required />
          </div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-blue-300 to-blue-200 group-hover:from-red-200 group-hover:via-blue-300 group-hover:to-blue-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Sign Up
            </span>
          </button>
          <div>
            Already have an account ? <NavLink to="/" className="text-blue-600">SignIn</NavLink>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp