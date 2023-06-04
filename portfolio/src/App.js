import Homepage from './Components/Homepage';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <Homepage title="Portfolio"/>},
  { path: "/resume", element: <Resume title="Resume"/>},
  { path: "/projects", element: <Projects title="Projects"/>}
])

export default function App() {
  return <RouterProvider router={router}/>
}

export const baseURL = "/pictures";

