import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/layout/Applayout";
import { ErrorPage } from "./pages/Error";
import { Home } from "./pages/Home";
import { About } from "./pages/about";
import { Country } from "./pages/contry";
import { CountryDetails } from "./Components/UI/CountryDetail";
import { Contact } from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;