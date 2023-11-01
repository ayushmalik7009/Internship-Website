import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home } from './Components/Home.jsx'
import { Contact } from './Components/Contact.jsx'
import Layout from './Components/Layout/Layout.jsx'

const router = createBrowserRouter([
  {
    path:"/Internship-Website/",
    element: <Layout/>,
    children:[
      {
        path:"/Internship-Website/",
        element:<Home/>
      },
      {
        path:"/Internship-Website/Contact",
        element:<Contact/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
