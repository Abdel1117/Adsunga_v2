import Drone from "../../assets/images/Drone.jpg";
import { ArticleBanner } from "../../components/ArticlesBanner/ArticleBanner";

import { Block } from "../../components/Block/Block";

export const Blog = () => {
  return (
    <>
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto">
        <h1 className="text-primary text-xl md:text-3xl font-bold text-center mt-15 ">
          Blog - Adsunga
        </h1>
      </section>
      {/* Begin of the blog  */}
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-20 px-2 sm:px-0">
        <Block
          title={"Inspection et prévention des risques industriels"}
          date={"Vendredi 20 octobre 2023"}
          author={"Asdsunga"}
          content={
            "Réduisez les accidents et sécurisez vos infrastructures L'inspection des bâtiments et chantiers est cruciale pour garantir la sécurité des travailleurs et respecter les réglementations en vigueur. Des solutions comme l'inspection par drone permettent d'identifier les anomalies, d'assurer la conformité des infrastructures et d'optimiser la gestion des risques professionnels. Dans des environnements à haut risque, comme les sites industriels et les chantiers de construction, l'utilisation de technologies avancées, telles que les drones et les capteurs intelligents, permet de détecter les dangers invisibles à l'œil nu. Une étude menée par la DGAC (Direction Générale de l'Aviation Civile) souligne que les inspections par drone réduisent de 30 % le temps d’intervention et améliorent la précision des analyses. Source : DGAC - Drones et Sécurité En savoir plus sur l'inspection industrielle : Grâce aux nouvelles technologies, la prévention des risques industriels est plus efficace que jamais !"
          }
          images={[Drone, Drone]}
        />

        <Block
          title={"Inspection et prévention des risques industriels"}
          date={"Vendredi 20 octobre 2023"}
          author={"Asdsunga"}
          content={
            "Réduisez les accidents et sécurisez vos infrastructures L'inspection des bâtiments et chantiers est cruciale pour garantir la sécurité des travailleurs et respecter les réglementations en vigueur. Des solutions comme l'inspection par drone permettent d'identifier les anomalies, d'assurer la conformité des infrastructures et d'optimiser la gestion des risques professionnels. Dans des environnements à haut risque, comme les sites industriels et les chantiers de construction, l'utilisation de technologies avancées, telles que les drones et les capteurs intelligents, permet de détecter les dangers invisibles à l'œil nu. Une étude menée par la DGAC (Direction Générale de l'Aviation Civile) souligne que les inspections par drone réduisent de 30 % le temps d’intervention et améliorent la précision des analyses. Source : DGAC - Drones et Sécurité En savoir plus sur l'inspection industrielle : Grâce aux nouvelles technologies, la prévention des risques industriels est plus efficace que jamais !"
          }
          images={[Drone, Drone]}
        />
      </section>
      {/* End of the blog  */}
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-15">
        <h2 className="text-primary text-xl md:text-3xl font-bold text-center  ">
          Autre articles publiés récemment
        </h2>
        <ArticleBanner />
      </section>
      {/* Other Article Liste */}
    </>
  );
};
