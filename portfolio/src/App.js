import Homepage from './Components/Homepage';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import ErrorPage from './Components/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <Homepage title="Jordan S | Portfolio"/>},
  { path: "/resume", element: <Resume title="Resume"/>},
  { path: "/projects", element: <Projects title="Projects"/>},
  { path: "*", element: <ErrorPage title="404 Error"/>}
])

export default function App() {
  return <RouterProvider router={router}/>
}


