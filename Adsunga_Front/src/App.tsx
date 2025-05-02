import { Routes, Route } from "react-router";
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

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen ">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
