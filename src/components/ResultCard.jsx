import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] h-80 relative bg-white rounded'>
       <a target="_blank" className="h-full "href={item.url}>
        {item.type =='photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
        {item.type =='video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} alt="" /> : ''}
        {item.type =='GIF' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
       </a>
        <div id='bottom' className='flex justify-between gap-2 items-center px-6 py-10 absolute bottom-0 text-white'>
            <h2 className='text-xl font-semibold capitalize'>{item.title}</h2>
            <button className='bg-lime-500 text-white rounded px-3 py-2 cursor-pointer font-medium'>Save</button>
        </div>
    </div>
  )
}

export default ResultCard