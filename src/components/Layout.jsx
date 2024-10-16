import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="min-h-screen font-serif">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
