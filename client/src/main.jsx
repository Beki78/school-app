import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Admission from "./pages/Admission.jsx";
import Facilities from "./pages/Facilities.jsx";
import Event from "./pages/Event.jsx";
import Gallery from "./pages/Gallery.jsx";
import Activity from "./pages/Activity.jsx";
import Contact from "./pages/Contact.jsx";
import Portal from "./pages/Portal.jsx";
import SchoolHistory from "./pages/SchoolHistory.jsx";
import Achievements from "./pages/Achievements.jsx";
import News from "./pages/News.jsx";
import PhotoPage from "./pages/PhotoPage.jsx";
import SportDay from './components/SportDay';
import Cultureday2016 from './components/Cultureday2016';
import Chrismass2014 from './components/Chrismass2014';
import CultureDay2022 from './components/CultureDay2022';
import {Mycontext} from './context/Mycontext';


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
    path: "/events",
    element: <Event />,
  },
  {
    path: "/newsletter",
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
  {
    path: "/sportday",
    element: <SportDay />,
  },
  {
    path: "/cultureday-2016",
    element: <Cultureday2016 />,
  },
  {
    path: "/chrismass-2014",
    element: <Chrismass2014 />,
  },
  {
    path: "/cultureday-2022",
    element: <CultureDay2022/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Mycontext>
    <RouterProvider router={router} />
  </Mycontext>
);

