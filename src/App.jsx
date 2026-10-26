import React from 'react'
import './App.css'
import MyContext from './components/MyContext'
import Header from './components/Header'
import BookCard from './components/BookCard'
import BookDetails from './components/BookDetails'

const App = () => {
  return (
    <div>
      <MyContext.Provider>
        <Header/>
        <BookDetails/>
        <BookCard/>
      </MyContext.Provider>
    </div>
  )
}

export default App
