import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes , Route} from "react-router";
import About from './pages/About.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';

createRoot(document.getElementById('root')!).render(
  
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>


)
