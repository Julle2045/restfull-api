import './App.css'


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Layout from './assets/layout/Layout'
import PageNotFound from './assets/pages/PageNotFound'
import Todos from './assets/pages/Todo/Todos'
import Forside from './assets/pages//Frontpage/Forside'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        errorElement: <PageNotFound />,
        children:
        [

          {
            index: true, element: <Forside />
          },
          {
            path: "/todos", element: <Todos />
          },
          {
            path: "*", element: <PageNotFound />
          }
        ]
      }
    ]
  )

  return (
    <section className="w-full">
      <RouterProvider router={ router } />
    </section>
  )
}

export default App
