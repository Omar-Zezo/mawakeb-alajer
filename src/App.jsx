import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageByKey from "./pages/About Mwaqeb/PageByKey";
import OurServices from "./pages/About Mwaqeb/OurServices";
import ServicesDetails from "./pages/About Mwaqeb/ServicesDetails";
import SeasonalProject from "./pages/SeasonalProject";
import News from "./pages/Media Center/News";
import NewsDetails from "./pages/Media Center/NewsDetails";
import Photos from "./pages/Media Center/Photos";
import Videos from "./pages/Media Center/Videos";
import Contactus from "./pages/About Mwaqeb/Contactus";
import UseNotifications from "./hooks/UseNotifications";
import SeasonalProjects from "./pages/SeasonalProjects";
import Jobs from "./pages/Jobs";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    Component: Layout,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "get-to-know-us/who-are-we/:slug",
        element: <PageByKey/>,
      },
      {
        path: "/our-services",
        element: <OurServices/>,
      },
      {
        path: "/services/:slug",
        element: <ServicesDetails/>,
      },
      {
        path: "/our-seasonal-programs",
        element: <SeasonalProjects/>,
      },
      {
        path: "/our-seasonal-programs/:slug",
        element: <SeasonalProject/>,
      },
      {
        path: "/media-center/news",
        element: <News/>,
      },
      {
        path: "/media-center/news/:slug",
        element: <NewsDetails/>,
      },
      {
        path: "/media-center/photos",
        element: <Photos/>,
      },
      {
        path: "/media-center/videos",
        element: <Videos/>,
      },
      {
        path: "/contact-us",
        element: <Contactus/>,
      },
      {
        path: "/jobs",
        element: <Jobs/>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404/>
  }
]);

function App() {
  UseNotifications()
  return <RouterProvider router={router} />;
}

export default App;
