import Drone from "../../assets/images/drone.png";
import { useRef } from "react";
import { useFadeInFromX } from "../../Hooks/useFadeInFromX";

export const WhoAreWe = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useFadeInFromX(cardRef as React.RefObject<HTMLElement>, 0, 1, -500, 0);
  useFadeInFromX(imageRef as React.RefObject<HTMLElement>, 0, 1, 500, 0);
  return (
    <section className="container mt-10 md:mt-50 mb-10  mx-auto ">
      <div className=" relative  min-h-[500px] flex items-center justify-center p-1 md:p-0">
        <div
          ref={cardRef}
          className="lg:absolute lg:left-[0%] xl:left-[14%] w-[600px] h-auto rounded-lg shadow-lg   z-50 bg-white "
        >
          <div className="p-2 md:px-10 ">
            <h2 className="text-primary font-semibold text-xl md:text-2xl">
              Qui sommes-nous ?
            </h2>
            <p className="text-sm md:text-base my-5 md:pr-[20%]">
              Adsunga est une entreprise spécialisée dans les technologies
              innovantes pour l'inspection et la maintenance des
              infrastructures.
            </p>
            <p className="text-sm md:text-base my-3 md:pr-[20%]">
              Grâce à des solutions avancées, nous aidons les gestionnaires de
              parcs solaires, couvreurs, gestionnaires immobiliers et PME à
              garantir la sécurité, la conformité et l’optimisation des coûts de
              maintenance.
            </p>
            <p className="text-sm md:text-base my-3 md:pr-[20%]">
              Notre mission : offrir des données précises et exploitables pour
              une gestion proactive, réduisant les risques et améliorant la
              performance des infrastructures.
            </p>
          </div>
          <div className="m-4">
            <button className="px-5  ml-auto mr-0 rounded-md block bg-secondary text-primary py-2 cursor-pointer">
              A propos
            </button>
          </div>
        </div>
        <img
          ref={imageRef}
          className="hidden md:block md:absolute lg:right-[0%] xl:right-[10%] 2xl:right-[16%] lg:-top-[20%] w-[500px] h-[400px]  clip-hexagon z-10"
          src={Drone}
        />
      </div>
    </section>
  );
};
