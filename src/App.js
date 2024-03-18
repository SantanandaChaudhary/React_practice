import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RootLayout from './components/RootLayout';
import AddForm from './components/AddForm';



const App = () => {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index  element={<AddForm />} />
           <Route path='about' element={<About />} />
           <Route path='*' element={<NotFound />} />
        </Route>
        
        
      </Routes>
    </>
  )
}

export default App;
