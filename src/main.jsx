import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home } from './Components/Home.jsx'
import { Q1 } from './Components/One.jsx'
import { Q2 } from './Components/Two.jsx'
import { Q3 } from './Components/Three.jsx'
import { Q4 } from './Components/Four.jsx'
import { Q5 } from './Components/Five.jsx'
import { Q6 } from './Components/Six.jsx'
import { Q7 } from './Components/Seven.jsx'
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
        path:"/Internship-Website/One",
        element:<Q1/>
      },
      {
        path:"/Internship-Website/Two",
        element:<Q2/>
      },
      {
        path:"/Internship-Website/Three",
        element:<Q3/>
      },
      {
        path:"/Internship-Website/Four",
        element:<Q4/>
      },
      {
        path:"/Internship-Website/Five",
        element:<Q5/>
      },
      {
        path:"/Internship-Website/Six",
        element:<Q6/>
      },
      {
        path:"/Internship-Website/Seven",
        element:<Q7/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
