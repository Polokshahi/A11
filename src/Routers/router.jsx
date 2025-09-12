import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Rooms from "../Rooms/Rooms";
import RoomDetails from "../Rooms/RoomDetails";
import ErrorPage from "../Page/ErrorPage";
import MyBookings from "../MyBooking/MyBookings";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register></Register>,
      },

      {
                path: '/rooms',
                element: <Rooms></Rooms>
            },

             {
                path: "/rooms/:id",
                element: <RoomDetails></RoomDetails>,
              },


               {
                path: '/bookings',
                element: (

                  <PrivateRoute>
                     <MyBookings></MyBookings>
                  </PrivateRoute>
                
                ),
                // loader: () =>fetch('http://localhost:5000/bookings')
            },

           

          

            {
                path: '*',
                element: <ErrorPage></ErrorPage>,
            }

    ],
  },
]);

export default router;
