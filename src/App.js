import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Test from "./Test";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/movie/:id",
      element: <Detail />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
