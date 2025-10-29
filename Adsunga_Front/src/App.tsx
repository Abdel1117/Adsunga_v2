import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Accueil } from "./pages/Accueil/Accueil";
import { About } from "./pages/About/About";
import { Devis } from "./pages/Devis/Devis";
import { Realisation } from "./pages/Realisations/Realisation";
import { Prestations } from "./pages/Prestations/Prestations";
import { Contact } from "./pages/Contact/Contact";
import { Blog } from "./pages/Blog/Blog";
import { NotFound } from "./pages/NotFound/NotFound";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AjoutArticle } from "./pages/Dashboard/AjoutArticle/AjoutArticle";
import { Article } from "./pages/Article/Article.tsx";
import { CookieBanner } from "./components/CookieBanner/CookieBanner.tsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { EditArticle } from "./pages/Dashboard/EditArticle/EditArticle.tsx";

import { MentionsLegales } from "./pages/MentionsLegales/MentionsLegales.tsx";
import { PolitiqueConfidentialite } from "./pages/PolitiqueConfidentialite/PolitiqueConfidentialite.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />

      <Header />
      <main className="min-h-screen ">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route
            path="/politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ajout_article"
            element={
              <ProtectedRoute>
                <AjoutArticle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/modifier_article/:id"
            element={
              <ProtectedRoute>
                <EditArticle />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <CookieBanner />
      </main>
      <Footer />
    </>
  );
}

export default App;
