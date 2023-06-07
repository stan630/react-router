import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, {
  loader as vanDetailLoader
} from "./pages/Vans/VanDetail";
import Dashboard, {loader as dashboardLoader}from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans, { loader as hostVansLoader} from "./pages/host/HostVans";
import HostVanDetail, {loader as hostVanDetailLoader} from "./pages/host/HostVanDetail";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanInfo from "./pages/host/HostVanInfo";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";
import { requireAuth } from "./utils";
import AuthRequired from "./components/AuthRequired";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="vans" 
        element={<Vans />} 
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" 
      element={<VanDetail />} 
      loader={vanDetailLoader}
      />

      <Route element={<AuthRequired />}>
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={dashboardLoader }
        />
        <Route path="income" 
            element={<Income />} 
            loader={async () => await requireAuth()}
        />
        <Route path="reviews" 
            element={<Reviews />} 
            loader={async () => await requireAuth()}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={ hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={ hostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />}/>
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => await requireAuth()}
      />

      <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;