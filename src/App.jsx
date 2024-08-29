import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import HomePage from './pages/home.jsx'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Tes Home</div>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/register",
      element: <RegisterPage/>
    },
    {
      path: "/home",
      element: <HomePage/>
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;