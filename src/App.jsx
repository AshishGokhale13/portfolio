import { useState } from 'react'
import Container from './components/container/Container'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/slides/about/About';
import Experiences from './components/slides/experiences/Experiences';
import Skills from './components/slides/skills/Skills';
import Certificates from './components/slides/certificates/Certificates';
import Projects from './components/slides/projects/Projects';

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <Container />,
  children:[
    {
      path:"/",
      element:<About/>,
     
    },
    {
      path:"/about",
      element:<About/>,
      children:[
        {
          path:"/about/yo",
          element:<Experiences/>
        }
      ]
    },
    {
      path:"/experience",
      element:<Experiences/>
    }
    , {
      path:"/skills",
      element:<Skills/>
    },
    {
      path:"/certificates",
      element:<Certificates/>
    }
    ,{
      path:"/projects",
      element:<Projects/>
    }
  ]
}
]);


function App() {
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
