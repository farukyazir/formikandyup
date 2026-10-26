import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook, toggleModal } from '../reduxSlice/addBookslice'

const BookDetails = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: '',
    isbn: '',
    publicationDate: '',
    authorName: '',
    dob: '',
    bio: ''
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addBook(formData)) 
    setFormData({
      title: '',
      isbn: '',
      publicationDate: '',
      authorName: '',
      dob: '',
      bio: ''
    })
        dispatch(toggleModal())     
  }
  return (
    <div className='details-container'>
      <form className='book-details' onSubmit={handleSubmit}>
        <h2>Book Details</h2>
        <input 
          type='text' 
          name='title' 
          placeholder='Book Title' 
          value={formData.title} 
          onChange={handleChange} 
        />
        <input 
          type="number" 
          name='isbn' 
          placeholder='ISBN Number' 
          value={formData.isbn} 
          onChange={handleChange} 
        />
        <label>Publication Date:</label>
        <input 
          type="date" 
          name='publicationDate' 
          value={formData.publicationDate} 
          onChange={handleChange} 
        />

        <h2>Author Details</h2>
        <input 
          type="text" 
          name='authorName' 
          placeholder='Author Name' 
          value={formData.authorName} 
          onChange={handleChange} 
        />
        <label>Date Of birth:</label>
        <input 
          type="date" 
          name='dob' 
          value={formData.dob} 
          onChange={handleChange} 
        />
        <textarea 
          name='bio' 
          placeholder='Short Biography' 
          value={formData.bio} 
          onChange={handleChange}
        ></textarea>

        <button type='submit' className='add'>Add Book</button>
      </form>
    </div>
  )
}

export default BookDetails