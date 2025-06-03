import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Page/Home";

const router = createBrowserRouter([


    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            
                 {
                path: "/",
                element: <Home></Home>,
                
            },
           
        ]
    }


])


export default router;