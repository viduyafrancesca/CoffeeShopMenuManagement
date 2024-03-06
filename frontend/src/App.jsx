import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateMenu from './pages/CreateMenu';
import DeleteMenu from './pages/DeleteMenu';
import EditMenu from './pages/EditMenu';
import ShowMenu from './pages/ShowMenu';

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/menu/create' element={<CreateMenu />} />
      <Route path='/menu/details/:id' element={<ShowMenu />} />
      <Route path='/menu/edit/:id' element={<EditMenu />} />
      <Route path='/menu/delete/:id' element={<DeleteMenu />} />
    </Routes>
  )
}

export default App