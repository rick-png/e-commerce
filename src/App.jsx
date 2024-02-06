import Home from "./pages/Home/Home";
import Categorias from "./pages/Categorias/Categorias";
import Produto from "./pages/Produto/Produto";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";



const Layout = () => {
return (
  <div className="app">
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>
)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/categorias/:id", 
        element: <Categorias/>
      },
      {
        path: "/produto/:id",
        element: <Produto/>
      }
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
