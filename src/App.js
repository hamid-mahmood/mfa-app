import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "./router/router-provider";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <RouterProvider />
    </BrowserRouter>
  );
}