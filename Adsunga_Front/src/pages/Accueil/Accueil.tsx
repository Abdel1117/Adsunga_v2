import { BlocPlaceHolder } from "../../components/BlocPlaceHolder/BlocPlaceHolder";
import { WhoAreWe } from "../../components/WhoAreWe/WhoAreWe";
import { CertificationsBanner } from "../../components/CertificationsBanner/CertificationsBanner.tsx";
import { LogoBanner } from "../../components/LogoBanner/LogoBanner.tsx";
import { ArticleBanner } from "../../components/ArticlesBanner/ArticleBanner.tsx";
import sevenPizza from "../../assets/icons/7pizza.jpg";
import LogoEngie from "../../assets/icons/logo-engie.svg.png";
import LRI from "../../assets/icons/lri.png";
import aviv from "../../assets/icons/aviv.png";
import { ContactUsBanner } from "../../components/ContactUsBanner/ContactUsBanner.tsx";
import { MapsBanner } from "../../components/MapsBanner/MapsBanner.tsx";

export const Accueil = () => {
  const imagesLogo = [LogoEngie, LRI, aviv, sevenPizza];
  return (
    <>
      <BlocPlaceHolder />
      <WhoAreWe />
      <CertificationsBanner />
      <ArticleBanner from={0} limit={100} />
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto">
        <LogoBanner arrayImage={imagesLogo} />
      </section>
      <ContactUsBanner />
      <MapsBanner />
    </>
  );
};
