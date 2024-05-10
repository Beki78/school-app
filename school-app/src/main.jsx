import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Error from './components/Error.jsx'
import Admission from "./pages/Admission.jsx"
import Facilities from "./pages/Facilities.jsx"
import Event from "./pages/Event.jsx";
import Gallery from "./pages/Gallery.jsx"
import Activity from "./pages/Activity.jsx";
import Contact from "./pages/Contact.jsx";
import Portal from "./pages/Portal.jsx";
import SchoolHistory from "./pages/SchoolHistory.jsx";
import Achievements from "./pages/Achievements.jsx";
import News from "./pages/News.jsx";
import PhotoPage from './pages/PhotoPage.jsx'









const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/admission",
    element: <Admission />,
  },
  {
    path: "/facilities",
    element: <Facilities />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/gallery/:id",
    element: <PhotoPage />,
  },
  {
    path: "/activity",
    element: <Activity />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/portal",
    element: <Portal />,
  },
  {
    path: "/about-kms",
    element: <SchoolHistory />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
