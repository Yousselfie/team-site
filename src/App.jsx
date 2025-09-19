import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as React from 'react';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import MeetTheTeam from "./pages/MeetTheTeam"
import Products from "./pages/Products"



function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/team":
      component = <MeetTheTeam />
      break
    case "/products":
      component = <Products />
      break
    }
  return (
    <>
      <Navbar />
      <div class='text-center m-[1rem]'>
        {component}
      </div>
    </>
  )
}

export default App
