import { fetchPhotos, fetchVideos, fetchGIF } from "./api/mediaApi"


const  App = () => {


  return (
    <div className="h-screen text-white w-full bg-neutral-900">
      <button className='bg-blue-400 px-5 py-3 m-5'onClick={async ()=>{
        const data = await fetchPhotos('dog')
        console.log(data.results)
      }}>Get Photos</button>

      <button className='bg-blue-400 px-5 py-3 m-5'onClick={async ()=>{
        const data = await fetchVideos('dog')
        console.log(data.videos)
      }}>Get Videos</button>

      <button className='bg-blue-400 px-5 py-3 m-5'onClick={async ()=>{
        const data = await fetchGIF('dog')
        console.log(data)
      }}>Get GIF</button>
 
    </div>
  )
}

export default App