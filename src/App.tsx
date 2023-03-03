import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { About, Header, Testimonials, Works, Footer, Skills } from './container';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar /> 
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;