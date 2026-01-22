import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice.js'

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e)=>{
      e.preventDefault()
      console.log(text);
      dispatch(setQuery(text))
      setText('')
    }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-5 p-10 bg-(--c2)'>
        <input 
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
        }}
        required
        className='w-full border-2 px-4 py-2 text-xl  rounded-4xl outline-none'
        type="text" 
        placeholder="Search anything..." />
        <button  className='active:scale-0.95 cursor-pointer border-2 px-4 py-2 text-xl rounded-4xl outline-none'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar