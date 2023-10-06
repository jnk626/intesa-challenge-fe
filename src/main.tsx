import React from 'react'
import ReactDOM from 'react-dom/client'
import './dist/output.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Root from './routes/root.tsx'
import ErrorPage from './routes/error-page.tsx'
import Index from './routes/index.tsx'
import Profile from './components/profile/Profile.tsx'
import { BankAccount } from './components/bank-account/BankAccount.tsx'
//import MovementsList from './components/movements-list/MovementList.element.tsx'
//import movementsLoader from './components/movements-list/MovementList.loader.ts'
import { accountLoader } from './components/profile/Profile.loader.ts'
import { TalkToUs } from './components/talk-to-us/TalkToUs.tsx'
import { MovementsList } from './components/movements-list/MovementList.element.tsx'

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
        loader: accountLoader,
        children: [
          {
            path: "/profile/conto",
            element: <BankAccount />,
          },
          {
            path: "/profile/conto/movimenti",
            element: <MovementsList />
          }
        ]
      },
      {
        path: "/talk-to-us",
        element: <TalkToUs />
      }
    ]
  
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
