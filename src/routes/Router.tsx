import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import LazyLoader from "../components/LazyLoader";
const LandingPage = React.lazy(() => import("../pages/LandingPage/LandingPage"));

export const router = createBrowserRouter([
    {
        index: true,
        path: "/",
        element:
            <Suspense fallback={<LazyLoader />}>
                <LandingPage />
            </Suspense>
    },
])