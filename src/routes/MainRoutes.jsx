
import { Routes, Route } from "react-router-dom"
import { TechProvider } from "../contexts/TechContext";
import { LoginPage } from "../pages/LoginPage";
import { Home } from "../pages/Home";
import { RegisterPage } from "../pages/RegisterPage";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = () => {
    return (
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />
          <Route path='/Home' element={
            <TechProvider>
              <Home/>
            </TechProvider>} 
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
}