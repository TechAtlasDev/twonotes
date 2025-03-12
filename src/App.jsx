import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import DashboardView from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardView />,
  }
]);

function App() {
  return (
    <main className="w-screen h-screen relative">
      <RouterProvider router={router} />
      <footer className="absolute bottom-0 w-full text-center text-gray-500 text-sm py-3">
        Creado por <a href="https://github.com/techatlasdev/">TechAtlasDev</a>
      </footer>
    </main>
  )
}

export default App;
