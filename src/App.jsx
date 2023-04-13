import { useEffect, useState } from 'react'
import { api } from './services/api';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { RegisterPage } from './pages/RegisterPage';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/globalStyles';
import { UserProvider } from './contexts/UserContext/UserContext';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App
