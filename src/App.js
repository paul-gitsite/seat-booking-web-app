import React from 'react'
import { DataProvider } from './Context/DataContext'
import { Routes, Route } from 'react-router-dom'

//Components
import Form from './components/Form'
import Home from './components/Home'

const App = () => {

  return (
    <main className='min-h-screen bg-slate-900' >
      <DataProvider>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </DataProvider>
    </main>
  )
}

export default App