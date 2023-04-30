import { useState } from "react";
import { useRoutes } from "react-router-dom";
import BaseLayout from "../layouts/base-layout";
import AddMFA from "../pages/add-mfa/add-mfa";
import MFAListing from "../pages/mfa-listing/mfa-listing";

export function RouterProvider() {
  let element = useRoutes([
    {
      element: <BaseLayout />,
      children: [
        { path: "/", element: <MFAListing /> },
        { path: "/add-new", element: <AddMFA /> },
      ],
    },
  ]);
  return element;
};