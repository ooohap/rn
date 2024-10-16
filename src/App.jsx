import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Layouts
import Layout from "./components/Layout";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} loader={async () => null} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="about-us" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="*" element={<NotFound />} loader={async () => null} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
