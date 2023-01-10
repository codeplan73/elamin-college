import React from 'react'
import loading from '../assets/loading.gif'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <img src={loading} alt="" className='h-20 md:h-40 my-10 md:my-20'/>
    </div>
  )
}

export default Loading