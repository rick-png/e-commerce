import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <span>Home</span>
  },
  {
    path: "/produtos/:id", 
    element: <span>Categoria</span>
  },
  {
    path: "/produto/:id",
    element: <span>Produto</span>
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
