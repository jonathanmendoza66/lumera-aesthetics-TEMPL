import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/shared/layout";
import { Toaster } from "@/components/ui/sonner";
import { HomePage } from "@/pages/home";
import { TreatmentsPage } from "@/pages/treatments";
import { AboutPage } from "@/pages/about";
import { MembershipPage } from "@/pages/membership";
import { BookPage } from "@/pages/book";
import { GalleryPage } from "@/pages/gallery";
import { ResourcesPage } from "@/pages/resources";
import { PricingPage } from "@/pages/pricing";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
