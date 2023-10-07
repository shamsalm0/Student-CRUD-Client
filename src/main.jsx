import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AddStudents from './components/AddStudents.jsx'
import Main from './components/Main.jsx'
import Update from './components/Update.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<App></App>,
        loader:()=>fetch('http://localhost:2000/student')
      },
      {
        path:'/addstudent',
        element:<AddStudents></AddStudents>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:2000/student/${params.id}`)
      }
    ]
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
