import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import Home from "./pages/home.jsx";

function App() {


    const router = createBrowserRouter(createRoutesFromElements(
        <Route path={"/"} element={<RootLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
    ))
    return <RouterProvider router={router}/>
}

export default App
