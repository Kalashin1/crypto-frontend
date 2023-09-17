import { createBrowserRouter } from "react-router-dom";
import APP_SCREENS from "./constants";
import Home from "../pages";
import About from "../pages/about";
import FaqPage from "../pages/faq";
import Services from "../pages/services";
import Features from "../pages/features";
import Contact from "../pages/contact";
import ErrorNotFound from "../pages/404";

const router = createBrowserRouter([
  {
    path: APP_SCREENS.HOME,
    element: (<Home />)
  },
  {
    path: APP_SCREENS.ABOUT,
    element: (<About />)
  },
  {
    path: APP_SCREENS.FAQ,
    element: (<FaqPage />)
  },
  {
    path: APP_SCREENS.SERVICES,
    element: (<Services />)
  },
  {
    path: APP_SCREENS.FEATURES,
    element: (<Features />)
  },
  {
    path: APP_SCREENS.CONTACT,
    element: (<Contact />)
  },
  {
    path: APP_SCREENS.ERROR404,
    element: (<ErrorNotFound />)
  },
])

export default router;