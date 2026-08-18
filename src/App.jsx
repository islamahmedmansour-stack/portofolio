import React from 'react'
import MasterLayout from './components/MasterLayout/MasterLayout'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Experience from './components/Experience/Experience.jsx'
import Work from './components/Work/Work.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
export default function App() {
    const routes = createBrowserRouter([{
    path: '/',
    element: <MasterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'experience', element: <Experience /> },
      { path: 'work', element: <Work /> }
    ],
  },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
