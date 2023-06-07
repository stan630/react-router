import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Dashboard, { loader as dashboardLoader } from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans"
import HostVanDetail, { loader as hostVansDetailLoader } from "./pages/host/HostVanDetail"
import HostVanInfo from "./pages/host/HostVanInfo"
import HostVanPricing from "./pages/host/HostVanPricing"
import HostVanPhotos from "./pages/host/HostVanPhotos"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Error from "./components/Error"
import AuthRequired from "./components/AuthRequired"

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
     
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route
      path="vans/:id"
      element={<VanDetail />}
      errorElement={<Error />}
      loader={vanDetailLoader}
    />

    <Route element={<AuthRequired />}>
      <Route path="host" element={<HostLayout />} >
        <Route
          index
          element={<Dashboard />}
          errorElement={<Error />}
          loader={dashboardLoader}
        />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={hostVansDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);