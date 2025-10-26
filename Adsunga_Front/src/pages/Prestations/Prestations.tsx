import { LogoBanner } from "../../components/LogoBanner/LogoBanner";
import { BlockWithGridImage } from "../../components/BlockWithGridImage/BlockWithGridImage";
import DroneImage from "../../assets/icons/droneflying.png";
import BouclierNoir from "../../assets/icons/bouclier-noir.png";
import TelephoneNoir from "../../assets/icons/phone-noir.png";
import { BlockWithGridImageReversed } from "../../components/BlockWithGridImage/BlockWithGridImageReversed";

/**
 * Prestations page component.
 *
 * This component renders the "Prestations" page for the Adsunga Front application.
 *
 * It is composed of multiple sections:
 *
 * - A header section with a main title introducing Adsunga's value proposition.
 * - A logo banner (using the LogoBanner component) that displays an array of icon images along with subtitles.
 * - A section rendered with the BlockWithGridImage component, describing "HSE: Hygiène, Sécurité et Environnement" with an accompanying
 *   grid of images and a detailed paragraph.
 * - A section rendered with the BlockWithGridImageReversed component for "CSPS: Sécurité et Protection de la Santé", providing details
 *   about the role of a security coordinator and including a grid of images.
 * - Two decorative sections with background illustrations and specified minimum heights.
 * - A dedicated section for "Inspection par Drone" that details the drone inspection service, including:
 *   - A header with titles and detailed descriptive paragraphs.
 *   - A list of service points under drone inspection.
 *   - A grid layout of images representing the drone inspection missions.
 *
 * The component utilizes arrays to store image sources and icon definitions, which are then passed as props to child components.
 *
 * @component
 * @example
 * // Example usage:
 * <Prestations />
 *
 * @returns {JSX.Element} The rendered Prestations page.
 */
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
    <>
      {/* First Section go Here */}
      <section className="lg:px-40 sm:px-5 p-1 relative">
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
        />
      </section>
      {/* End of the first Section */}
      {/* Illustration */}
      <section className="bg-illustration bg-contain bg-no-repeat relative min-h-[50px] md:min-h-[100px] lg:min-h-[200px]"></section>
      {/* End of Illustration */}
      {/* Second Section go Here */}
      <section className="lg:px-40 sm:px-5 p-1">
        <BlockWithGridImageReversed
          firstTitle={"CSPS : Sécurité et Protection de la Santé"}
          subTitle={"Un Coordinateur Sécurité à votre service."}
          para={
            "CSPS est l'acronyme de Coordination de la sécurité, protection de la santé. Le coordonnateur SPS ou coordinateur sécurité contribue à faire appliquer les principes généraux de prévention, aux côtés du maître d’ouvrage, du maître d’œuvre et des entreprises notamment sur les chantiers BTP. Il exerce ce rôle tout au long de l’opération depuis sa conception jusqu’à l’achèvement des travaux. Ses missions et les documents associés à l’exercice de celles-ci sont fonction de l’avancement du projet : phase de conception et phase de réalisation. En phase de conception, Il veille à ce que les différentes phases des travaux soient observées du point de vue de la coactivité qu’elles vont générer, en étant sur les lieux lors des réunions et visites du site. Dès la visite d’inspection commune et tout au long de la phase de réalisation, il prend en compte toutes les questions relatives à la coactivité et à la santé sécurité au travail en fonction de la nature des travaux à exécuter, des spécificités du lieu du chantier ou encore des contraintes techniques. Le coordonnateur SPS est associé aux réflexions de l’entreprise durant la phase de réalisation. Les missions peuvent être  | CSPS niveau 1 : opérations de plus de 10 000 hommes x jour (soit plus de 80 000 h) avec au moins 10 entreprises pour les opérations de bâtiment ou 5 pour les opérations de génie civil."
          }
          imageGrid={imageGrid}
        />
      </section>
      {/* End of the second Section */}
      {/* Illustration */}
      <section className="bg-illustrationInversed  bg-right bg-contain bg-no-repeat relative  min-h-[50px] md:min-h-[100px] lg:min-h-[200px]"></section>
      {/* End of Illustration */}
      {/* Third Section go Here */}
      <section className="lg:px-40 sm:px-5 p-1">
        <section>
          <div className="max-w-screen mx-auto my-2 md:my-20">
            <div className="mb-10 ">
              <h1 className="text-primary text-xl md:text-3xl font-bold text-left mt-15 ">
                Inspection par Drone
              </h1>
              <h2 className="text-black text-lg md:text-2xl font-bold text-left">
                Un pilote de drone professionnel à votre service
              </h2>
            </div>
            <div
              className={`flex flex-col md:flex-row items-start  gap-y-20 sm:gap-y-10 md:gap-y-0`}
            >
              <div className="flex flex-col gap-5 max-w-full lg:max-w-5/12">
                <p className="text-black text-sm font-normal text-left md:w-[90%] md:mr-[30px]">
                  Adsunga propose des prestations d'inspection par drone
                  réalisées par un pilote de drone professionnel. Nous mettons
                  nos drones et nos connaissances techniques à votre service
                  pour réaliser des inspections du bâti, dans les endroits
                  difficilement accessibles à l'homme (grandes hauteurs,
                  toitures, façades aveugles, panneaux solaires..)
                </p>
                <p className="text-black text-sm font-normal text-left md:w-[90%] md:mr-[30px]">
                  Les missions d'inspection par drone peuvent être
                </p>
                <ul className="list-disc list-inside text-black text-sm font-normal text-left md:w-[90%] md:mr-[30px]">
                  <li className="mb-1">Suivi et mise en valeur de chantier</li>
                  <li className="mb-1">
                    Inspection technique de bâtiments, monuments historiques,
                    ponts
                  </li>
                  <li className="mb-1">Vérification de toitur</li>
                  <li className="mb-1">Expertise immobilièr</li>
                  <li className="mb-1">Contrôle de démolition</li>
                  <li className="mb-1">
                    Contrôle de conformité & recherche de malfaçon
                  </li>
                  <li className="mb-1">Constatations pour assurance</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap- ">
                {imageGrid.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`grid-image-${index}`}
                    className="w-full max-w-[100%] object-cover aspect-square rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* End of the third Section */}
    </>
  );
};
