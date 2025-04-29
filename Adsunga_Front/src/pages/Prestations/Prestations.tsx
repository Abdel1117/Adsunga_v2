import { LogoBanner } from "../../components/LogoBanner/LogoBanner";
import { BlockWithGridImage } from "../../components/BlockWithGridImage/BlockWithGridImage";
import DroneImage from "../../assets/icons/DroneFlying.png";
import BouclierNoir from "../../assets/icons/bouclier noir.png";
import TelephoneNoir from "../../assets/icons/Phone noir.png";

export const Prestations = () => {
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
  /*
   * imageGrid est un tableau d'images à afficher dans la grille.
   */
  const imageGrid = [
    "https://organilog-chantier.com/wp-content/uploads/2024/01/iStock-1267010934.webp",
    "https://organilog-chantier.com/wp-content/uploads/2024/01/iStock-1267010934.webp",
    "https://organilog-chantier.com/wp-content/uploads/2024/01/iStock-1267010934.webp",
    "https://organilog-chantier.com/wp-content/uploads/2024/01/iStock-1267010934.webp",
  ];

  return (
    <section className="lg:px-40 sm:px-5 p-1">
      <div>
        <h1 className="text-primary text-xl md:text-3xl font-bold text-center mt-15 ">
          Travailler avec Adsunga, c'est...
        </h1>
      </div>
      <LogoBanner arrayImage={iconesImages} isWithSubTitle={true} />
      <BlockWithGridImage
        firstTitle={"HSE: Hygiène, Sécurité et Environnement"}
        subTitle={"Un coordinateur HSE à votre service"}
        para={
          "La santé et la sécurité au travail à travers le domaine HSE sont des obligations de l’employeur afin de garantir un environnement de travail décent, respectable et sécurisé à ses collaborateurs, d'où l'importance de suivre la réglementation HSE. Il s’agit d’évaluer, d’anticiper et de limiter tous les risques qui pourraient nuire à la santé des employés dans le milieu du travail à travers la réalisation d'un audit HSE. Le code du travail est formel : toutes les entreprises, peu importe leur taille et leur secteur d’activité, se doivent de respecter des règles en termes de santé et sécurité. Adsunga se positionne comme un appui aux entreprises de toute taille voulant résoudre leurs problématiques HSE : que ce soit pour réaliser des études de postes, études ergonomiques d'un poste de travail, plan de prévention ou ppsps (plan de prévention des risques, plan de prévention. pour une entreprise extérieure...), Document Unique et Evaluation des Risques (DUER), Retour d'expérience (REX).... Faîtes appel à un ingénieur HSE Adsunga pour répondre aux exigences de santé et sécurité dans le milieu du travail."
        }
        imageGrid={imageGrid}
        direction={"row"}
      />
    </section>
  );
};
