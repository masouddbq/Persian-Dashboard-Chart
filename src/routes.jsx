import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products";
import User from "./pages/Users/User";
import ProductDetail from "./pages/Products/ProductDetail";
import Members from "./pages/Members/Members";
import Plans from "./pages/Plans/Plans";
import Analytics from "./pages/Analytics/Analytics";
import Discounts from "./pages/Discounts/Discounts";
import CommonGoods from "./pages/CommonGoods/CommonGoods";
import Comments from "./pages/Comments/Comments";
import Breakdowns from "./pages/Breakdowns/Breakdowns";
import Cooperation from "./pages/Cooperation/Cooperation";
import NewOrder from "./pages/NewOrder/NewOrder";
import Logout from "./pages/Logout/Logout";

let routes = [
    {path : '/' , element: <Home /> },
    {path : '/users' , element: <User /> },
    {path : '/products' , element: <Products /> },
    {path : '/product/:id', element: <ProductDetail /> },
    {path : '/members', element: <Members /> },
    {path : '/plans', element: <Plans /> },
    {path : '/analytics', element: <Analytics /> },
    {path : '/discounts', element: <Discounts /> },
    {path : '/common-goods', element: <CommonGoods /> },
    {path : '/comments', element: <Comments /> },
    {path : '/breakdowns', element: <Breakdowns /> },
    {path : '/cooperation', element: <Cooperation /> },
    {path : '/new-order', element: <NewOrder /> },
    {path : '/logout', element: <Logout /> },
]

export default routes;