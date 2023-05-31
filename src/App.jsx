import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetail, {
  loader as vanDetailLoader,
} from "./pages/host/HostVanDetail";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans, { loader as hostVansLoader} from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanInfo from "./pages/host/HostVanInfo";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Error from "./components/Error";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route path="host" element={<HostLayout />}>
        loader={async () => {}}
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={async () => {
            return null;
          }}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="price"
            element={<HostVanPricing />}
            loader={async () => {
              return null;
            }}
            return
            null
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => {}}
            return
            null
          />
        </Route>
      </Route>
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => {}}
        return
        null
      />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
