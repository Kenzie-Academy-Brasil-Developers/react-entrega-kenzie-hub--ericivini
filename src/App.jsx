import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/globalStyles';
import { UserProvider } from './contexts/UserContext/UserContext';
import { MainRoutes } from './routes/MainRoutes';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </div>
  )
}

export default App
