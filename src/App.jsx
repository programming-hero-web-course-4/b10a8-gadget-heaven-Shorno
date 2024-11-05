import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import {CategoryProducts, Dashboard, Home, ProductDetails, Statistics} from "./pages/index.jsx";

function App() {


    const router = createBrowserRouter(createRoutesFromElements(
        <Route path={"/"} element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path={"statistics"} element={<Statistics/>}/>
            <Route path={"dashboard"} element={<Dashboard/>}/>
            <Route path={"/:productName"} element={<ProductDetails/>}/>
            <Route path={"category/:category"} element={<CategoryProducts/>}/>
        </Route>
    ))
    return <RouterProvider router={router}/>
}

export default App
