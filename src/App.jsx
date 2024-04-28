import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'

import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Thankyou from './Components/Thankyou'
import Footer from './Components/Footer'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer/></>
    },
    {
      path: "/about",
      element:  <><Navbar /><About /><Footer/></>
    },
    {path: "/contact",
    element:  <><Navbar /><Contact /><Footer/></>
  },
    {path: "/thank-you",
    element:  <><Navbar /> <Thankyou/><Footer/> </>
  }
  ])

  return (
    <>
  
   <RouterProvider router={router} />
  
    </>
  )
}

export default App
