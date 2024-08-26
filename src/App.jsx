import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from './pages/login.jsx';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Tes Home</div>
    },
    {
      path: "/login",
      element: <LoginPage/>
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;