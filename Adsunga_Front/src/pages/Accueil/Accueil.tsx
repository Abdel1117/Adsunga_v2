import React from "react";
import { BlocPlaceHolder } from "../../components/BlocPlaceHolder/BlocPlaceHolder";
import { WhoAreWe } from "../../components/WhoAreWe/WhoAreWe";
import { CertificationsBanner } from "../../components/CertificationsBanner/CertificationsBanner.tsx";
import { LogoBanner } from "../../components/LogoBanner/LogoBanner.tsx";
import { ArticleBanner } from "../../components/ArticlesBanner/ArticleBanner.tsx";
export const Accueil = () => {
  return (
    <div>
      <BlocPlaceHolder />
      <WhoAreWe />
      <CertificationsBanner />
      <ArticleBanner />
      <LogoBanner />
    </div>
  );
};
