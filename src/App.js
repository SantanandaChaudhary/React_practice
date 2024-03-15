import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index  element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
           <Route path='about' element={<About />} />
           <Route path='*' element={<NotFound />} />
        </Route>
        
        
      </Routes>
    </>
  )
}

export default App;
