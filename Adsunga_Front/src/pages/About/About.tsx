import { Block } from "../../components/Block/Block";
import DroneImage from "../../assets/icons/droneflying.png";
import BouclierNoir from "../../assets/icons/bouclier-noir.png";
import TelephoneNoir from "../../assets/icons/phone-noir.png";
import { LogoBanner } from "../../components/LogoBanner/LogoBanner";

export const About = () => {
  const iconesImages = [
    {
      image: DroneImage,
      subTitle:
        "Technologie innovantes, Drones, termographie, capteurs intelligents.",
    },
    {
      image: BouclierNoir,
      subTitle:
        "Sécurité et conformité: contrôle, gestion des risques, prevention.",
    },
    {
      image: TelephoneNoir,
      subTitle:
        "Accompagnement sur-mesure: Solutions adaptées, service réactif.",
    },
  ];

  return (
    <>
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-20 px-2 sm:px-0">
        {/* Title Block */}
        <h1 className="text-primary text-xl md:text-3xl font-bold text-center mt-15 ">
          A propos de Adsunga
        </h1>
        {/* End of title block  */}

        {/* About Block */}
        <h2 className="text-tertiary text-lg md:text-2xl font-bold text-center mt-15 ">
          Pourquoi Adsunga ?
        </h2>
        {/*  */}
        <p className="text-center mt-5 text-black w-full sm:w-8/12  mx-auto">
          Le nom Adsunga est né de la contraction du mot latin « Ad »
          (signifiant « aller vers ») et du terme kikongo « Sungamana »
          (signifiant « observer, voir »). L’observation est en effet le fil
          conducteur des trois pôles d’activités de notre bureau d’études.
        </p>
      </section>

      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-20 px-2 sm:px-0">
        <Block
          title="1. Innovation technologique"
          subTitle="Des solutions avancées pour une gestion efficace :"
          para="Nous exploitons des drones thermographiques et des outils d’inspection connectés pour améliorer la sécurité au travail et l’entretien des infrastructures. Ces technologies permettent d’obtenir des données précises, d’identifier les anomalies et de prévenir les risques industriels."
          list="Inspection de panneaux solaires : Détection de pannes thermiques via drones thermographiques, optimisant la performance énergétique., Contôle de structures industrielles : Inspection aérienne pour anticiper les travaux de rénovation sans interrompre l’activité., Surveillance de chantiers : Suivi en temps réel des travaux et détection des non-conformités."
          images="https://www.com-de-barg.com/wp-content/uploads/2023/04/IMG_3142-scaled.jpg"
          conslusionPara="Grâce à ces innovations, nos clients réduisent les risques et optimisent leurs coûts."
        />
      </section>

      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-20 px-2 sm:px-0">
        <Block
          title="2. Sécurité et conformité"
          subTitle="Prévention des risques et conformité réglementaire :"
          para="Nous accompagnons les entreprises dans la mise en conformité HSE, en réalisant des audits de sécurité et des diagnostics de conformité pour prévenir les risques et assurer une sécurité optimale."
          list="Audit pour gestionnaires immobiliers : Inspection de bâtiments en Île-de-France
          pour détecter les risques électriques et d’accès.,
          Inspection réglementaire industrielle : Détection des anomalies de stockage via
          caméras thermiques pour éviter les incendies.,
          Analyse des risques en chantiers urbains : Sécurisation des accès et respect des
          normes SPS."
          images="https://media.licdn.com/dms/image/v2/D4E22AQEEAWa9drVGGA/feedshare-shrink_800/feedshare-shrink_800/0/1698780163090?e=2147483647&v=beta&t=6sz5CiDi4vV50BM0pLBoG-VMIDsxfCa3ql2KaNO7Tq0"
          conslusionPara="Nos interventions garantissent une meilleure conformité et sécurité des sites."
        />
      </section>

      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-20 px-2 sm:px-0">
        <LogoBanner arrayImage={iconesImages} isWithSubTitle={true} />{" "}
      </section>
    </>
  );
};
