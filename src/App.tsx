import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Channels from "./components/Channel";
import Programs from "./components/Program";
import Profile from "./components/Profile";
import Root from "./components/Root";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/channels" element={<Channels />} />
      <Route  path="/programs" element={<Programs />} />
      <Route  path="/profile" element={<Profile />} />
    </Route>
  )
);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
