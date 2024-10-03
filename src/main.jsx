import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import Provider from './Provider/Provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <div className='bg-[#fff9f9]'>
        <RouterProvider router={router} />
      </div>
    </Provider>
  </StrictMode>,
)
