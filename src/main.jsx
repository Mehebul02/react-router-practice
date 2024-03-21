import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/Header/about/About.jsx';

import Blog from './components/Header/blog/Blog.jsx';
import Users from './components/Header/users/Users.jsx';
const router = createBrowserRouter([
 {
  path:'/',
  element:<Home></Home>,
  children:[
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/users',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    }
  ]
 }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   <RouterProvider router={router}></RouterProvider>
  
  </React.StrictMode>
)
