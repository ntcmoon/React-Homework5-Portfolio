import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import About from './component/about.jsx'
import Job from './component/job.jsx'
import Portfolio from './component/portfolio.jsx'
import Skill from './component/skill.jsx'
import Todo from './component/todo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/job",
        element: <Job/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
      {
        path: "/skill",
        element: <Skill/>
      },
      {
        path: "/todo",
        element: <Todo/>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
