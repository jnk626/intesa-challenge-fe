import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './dist/output.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Root from './routes/root.tsx'
import ErrorPage from './routes/error-page.tsx'
import Index from './routes/index.tsx'
import Profile from './components/profile/Profile.tsx'
import MovementsList from './components/movements-list/MovementList.element.tsx'
import movementListLoader from './components/movements-list/MovementList.loader.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <MovementsList />,
            loader: movementListLoader
          }
        ]
      }
    ]
  
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
