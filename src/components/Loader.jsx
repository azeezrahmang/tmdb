import React from 'react'
import loader from '../assets/loader.gif';

const Loader = () => {
  return (
    <div className='bg-[#000]/[.6] absolute bottom-0 left-0 top-0 right-0 flex justify-center items-center'>
        <img src={loader} alt="loader"/>
    </div>
  )
}

export default Loader