import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products";
import User from "./pages/Users/User";

let routes = [
    {path : '/' , element: <Home /> },
    {path : '/users' , element: <User /> },
    {path : '/products' , element: <Products /> },
]

export default routes;