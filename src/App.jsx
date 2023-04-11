import { useEffect, useState } from 'react'
import { api } from './services/api';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { RegisterPage } from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get("/users");
        setUsers(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadUsers()
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/Register' element={<RegisterPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
