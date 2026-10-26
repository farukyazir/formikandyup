import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../reduxSlice/addBookslice'
const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className='header-container'>
      <div className='heading'>
        <h1>Admin Dashboard</h1>
        <button onClick={() => dispatch(toggleModal())}>Add Book</button>
      </div>
    </div>
  )
}

export default Header