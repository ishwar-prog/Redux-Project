
const ResultCard = ({item}) => {
  const addToCollection = (item)=>{
    
    const oldData = JSON.parse(localStorage.getItem('collection')) || []
    
    const newData = [...oldData,item]

    localStorage.setItem('collection',JSON.stringify(newData))
    
  }
  return (
    <div className='w-[18vw] h-80 relative bg-white rounded-3xl overflow-hidden'>
       <a target="_blank" className="h-full "href={item.url}>
        {item.type =='photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
        {item.type =='video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} alt="" /> : ''}
        {item.type =='GIF' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
       </a>
        <div id='bottom' className='flex justify-between gap-3 items-center px-17 py-5 absolute bottom-0 text-white'>
            <h2 className='text-xl font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
            <button className='bg-lime-500 active:scale-95 text-white rounded px-3 py-2 cursor-pointer font-medium'
            onClick={()=>{
              addToCollection(item)
            }}
            >
              Save
            </button>
        </div>
    </div>
  )
}

export default ResultCard