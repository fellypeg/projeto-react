import React from 'react'
import Inicial from './pages/Inicial'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavBar'
import Faculdade from './pages/Faculdade'
import Footer from './components/Footer'
import Dpo from './pages/Dpo'
import './App.css'
import Noticias from './pages/Noticias'

const App = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <CustomNavbar />

        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/a-faculdade" element={<Faculdade />} />
            <Route path="/dpo-lgpd" element={<Dpo/>}/>
            <Route path="/noticias" element={<Noticias/>}/>
          </Routes>
        </Container>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
