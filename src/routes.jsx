import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products";
import User from "./pages/Users/User";
import ProductDetail from "./pages/Products/ProductDetail";

let routes = [
    {path : '/' , element: <Home /> },
    {path : '/users' , element: <User /> },
    {path : '/products' , element: <Products /> },
    {path : '/product/:id', element: <ProductDetail /> },
]

export default routes;