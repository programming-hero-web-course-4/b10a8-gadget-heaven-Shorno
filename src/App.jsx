import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import {Dashboard, Home, ProductDetails, Statistics} from "./pages/index.jsx";

function App() {


    const router = createBrowserRouter(createRoutesFromElements(
        <Route path={"/"} element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path={"statistics"} element={<Statistics/>}/>
            <Route path={"dashboard"} element={<Dashboard/>}/>
            <Route path={"product/:productName"} element={<ProductDetails/>}/>

        </Route>
    ))
    return <RouterProvider router={router}/>
}

export default App
