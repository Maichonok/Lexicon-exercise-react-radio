import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Channels from "./components/Channel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route index element={<Channels />} />
    </Route>
  )
);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Channels />
    </>
  );
}
