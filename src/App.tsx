import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
<<<<<<< HEAD
import LivingBackground from "./components/LivingBackground";
=======
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import VerifiedOwnersPage from "./pages/VerifiedOwnersPage";
import PricingPage from "./pages/PricingPage";
import ListingsPage from "./pages/ListingsPage";
import VerificationPage from "./pages/VerificationPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
<<<<<<< HEAD
        <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary relative">
          <LivingBackground />
=======
        <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/verified-owners" element={<VerifiedOwnersPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/verify" element={<VerificationPage />} />
          </Routes>
          <Footer />
          <ThemeSwitcher />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
