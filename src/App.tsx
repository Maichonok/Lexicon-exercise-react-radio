import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import  Header   from "./components/Header";
import Home from './components/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
    </Route>
  )
)

export function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

