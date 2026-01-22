import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center py-6 px-10 bg-(--c1)">
           <h2 className="text-2xl font-medium">Media Search</h2>
           <div className="flex gap-5 items-center">
            <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded-2xl px-4 py-2' to='/'>Search</Link>
            <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded-2xl px-4 py-2' to='/collection'>Collection</Link>
           </div>
        </div>
    </div>
  )
}

export default Navbar