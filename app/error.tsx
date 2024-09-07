"use client"
import React from 'react'

interface Props {
    error: Error;
    reset: ()=> void;
}

const ErrorPage = ({error,reset}:Props) => {
    console.log("Error",error)
  return (
    <div className='flex flex-col justify-center items-center h-32'>
    <div className='p-5 m-5'>An unexpected error has occur</div>
    <button className='btn btn-primary' onClick={()=> reset() } >Retry</button>
    </div>
  )
}

export default ErrorPage