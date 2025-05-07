import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home'
import Login from './pages/Login'
import ListarOrganizacion from './pages/Organizaciones/ListarOrganizacion.jsx'
import Registro from './pages/Registro.jsx'
import Testimonios from './pages/Testimonios.jsx'
import Preguntas from './pages/Preguntas.jsx'


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/listarorg' element={<ListarOrganizacion/>}/>
        <Route path='/testimonios' element={<Testimonios/>}/>
        <Route path='/preguntas' element={<Preguntas/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
