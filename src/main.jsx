import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Provider from './AuthProvider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from 'react-router-dom'
import router from './Routers/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
const queryClient = new QueryClient();
import "../src/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
    </QueryClientProvider>
   </Provider>
  </StrictMode>,
)
