import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to stop loading once everything is loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if the document is already fully loaded
    if (document.readyState === "complete") {
      // If the page is already loaded, stop the loading state
      setIsLoading(false);
    } else {
      // Listen for the window load event to ensure all resources are fully loaded
      window.addEventListener("load", handleLoad);
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      {isLoading ? (
        // Loading spinner or placeholder while resources are loading
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-green-500"></div>
        </div>
      ) : (
        // Main content once loading is done
        <main className="min-h-screen font-serif">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
}
