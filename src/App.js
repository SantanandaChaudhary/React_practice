import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const App = () => {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index  element={<HomePage />} />
          <Route path='detail/:id'  element={<DetailPage />} />
           <Route path='about' element={<About />} />
           <Route path='*' element={<NotFound />} />
        </Route>
        
        
      </Routes>
    </>
  )
}

export default App;
