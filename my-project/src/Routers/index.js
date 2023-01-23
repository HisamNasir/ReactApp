import React from "react";
import "../index.css";
import { Route, Routes } from "react-router-dom";
const LazyHome = React.lazy(() => import("../pages/Home/index"));
const LazyApprovals = React.lazy(() => import("../pages/Approvals/index"));
const LazyBlog = React.lazy(() => import("../pages/Blog/index"));
const LazyCareers = React.lazy(() => import("../pages/Careers/index"));
const LazyContact = React.lazy(() => import("../pages/Contact/index"));
const LazyProjects = React.lazy(() => import("../pages/Projects/index"));
const LazyServices = React.lazy(() => import("../pages/Services/index"));
const LazyAbout = React.lazy(() => import("../pages/About/index"));
function Routers() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/Approvals"
          element={
            <React.Suspense fallback="Loading...">
              <LazyApprovals />
            </React.Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route
          path="/Blog"
          element={
            <React.Suspense fallback="Loading...">
              <LazyBlog />
            </React.Suspense>
          }
        />
        <Route
          path="/Careers"
          element={
            <React.Suspense fallback="Loading...">
              <LazyCareers />
            </React.Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <React.Suspense fallback="Loading...">
              <LazyContact />
            </React.Suspense>
          }
        />
        <Route
          path="/Projects"
          element={
            <React.Suspense fallback="Loading...">
              <LazyProjects />
            </React.Suspense>
          }
        />
        <Route
          path="/Services"
          element={
            <React.Suspense fallback="Loading...">
              <LazyServices />
            </React.Suspense>
          }
        />
      </Routes>
    </main>
  );
}

export default Routers;
