import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './page/Root';
import Homepage, {handleFormSubmit} from './page/HomePage';
import SecondaryPage, {handleLoading} from './page/SecondaryPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
        action: handleFormSubmit
      },
      {
        path: 'exercise/:pageId',
        element: <SecondaryPage />,
        loader: handleLoading,
      }
    ],
  }
]
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
