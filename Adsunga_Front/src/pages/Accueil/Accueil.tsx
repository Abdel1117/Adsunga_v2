import { BlocPlaceHolder } from "../../components/BlocPlaceHolder/BlocPlaceHolder";
import { WhoAreWe } from "../../components/WhoAreWe/WhoAreWe";
import { CertificationsBanner } from "../../components/CertificationsBanner/CertificationsBanner.tsx";
import { LogoBanner } from "../../components/LogoBanner/LogoBanner.tsx";
import { ArticleBanner } from "../../components/ArticlesBanner/ArticleBanner.tsx";
import sevenPizza from "../../assets/icons/7pizza.jpg";
import Logo_JO from "../../assets/icons/Logo_JO.png";
import LogoEngie from "../../assets/icons/Logo-engie.svg.png";
import LRI from "../../assets/icons/LRI.png";
import aviv from "../../assets/icons/aviv.png";

export const Accueil = () => {
  const imagesLogo = [Logo_JO, LogoEngie, LRI, aviv, sevenPizza];
  return (
    <div>
      <BlocPlaceHolder />
      <WhoAreWe />
      <CertificationsBanner />
      <ArticleBanner />
      <LogoBanner arrayImage={imagesLogo} />
    </div>
  );
};
