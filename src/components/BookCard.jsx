import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, updateBook } from '../reduxSlice/addBookslice'

const BookCard = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.addBook.books)
  const [expandedCards, setExpandedCards] = useState({})
  const [editId, setEditId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    title: '',
    isbn: '',
    publicationDate: '',
    authorName: '',
    dob: '',
    bio: ''
  })
  const toggleShowMore = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  const handleEditClick = (book) => {
    setEditId(book.id)
    setEditFormData(book)
  }
  const handleChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value })
  }
  const handleUpdate = (id) => {
    dispatch(updateBook({ ...editFormData, id }))
    setEditId(null)
  }
  if (books.length === 0) {
    return <p style={{ color: '#fff', textAlign: 'center', marginTop: '20px' }}>No books added yet.</p>
  }
  return (
    <div className='card'>
      {books.map((book) => {
        const isEditing = editId === book.id
        const isExpanded = expandedCards[book.id]
        return (
          <div className='card-details' key={book.id} style={{ marginBottom: '20px' }}>
            <div className='firstcard'>
              <div className='books'>
                {isEditing ? (
                  <>
                    <input 
                      type='text' 
                      name='title' 
                      value={editFormData.title} 
                      onChange={handleChange} 
                      placeholder='Book Title'
                    />
                    <input 
                      type='number' 
                      name='isbn' 
                      value={editFormData.isbn} 
                      onChange={handleChange} 
                      placeholder='ISBN Number'
                    />
                    <input 
                      type='date' 
                      name='publicationDate' 
                      value={editFormData.publicationDate} 
                      onChange={handleChange} 
                    />
                  </>
                ) : (
                  <>
                    <p>Book Name: {book.title}</p>
                    <p>ISBN number: {book.isbn}</p>
                    <p>Publication Date: {book.publicationDate}</p>
                  </>
                )}
              </div>
              <div className='buttons'>
                <button className='showbtn' onClick={() => toggleShowMore(book.id)}>
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
                <div className='editbtn'>
                  {isEditing ? (
                    <button className='edit' onClick={() => handleUpdate(book.id)}>Update</button>
                  ) : (
                    <button className='edit' onClick={() => handleEditClick(book)}>Edit</button>
                  )}
                  <button className='delete' onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
                </div>
              </div>
            </div>
            {(isExpanded || isEditing) && (
              <div className='secondcard'>
                <p><strong>Author Details</strong></p>
                {isEditing ? (
                  <>
                    <input 
                      type='text' 
                      name='authorName' 
                      value={editFormData.authorName} 
                      onChange={handleChange} 
                      placeholder='Author Name'
                    />
                    <input 
                      type='date' 
                      name='dob' 
                      value={editFormData.dob} 
                      onChange={handleChange} 
                    />
                    <textarea 
                      name='bio' 
                      value={editFormData.bio} 
                      onChange={handleChange}
                      placeholder='Short Biography'
                    ></textarea>
                  </>
                ) : (
                  <>
                    <p>Author Name: {book.authorName}</p>
                    <p>Date of Birth: {book.dob}</p>
                    <p>Biography: {book.bio}</p>
                  </>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default BookCard