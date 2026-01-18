import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComp from './components/NavbarComp' 
import HeroComp from './components/HeroComp'
import AccordianComp from './components/AccordianComp'
import FooterComp from './components/FooterComp'
function App() {
  

  return (
    <>

<NavbarComp/>

<br></br>

    <h1>MENU  </h1>

<HeroComp/> 
<br></br>
<h1>WANT TO KNOW MORE</h1>
<AccordianComp/>
<FooterComp/>

    </>
  )
}

export default App
