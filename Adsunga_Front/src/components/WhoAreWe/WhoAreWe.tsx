import Drone from "../../assets/images/drone.png";
export const WhoAreWe = () => {
  return (
    <section className="container mt-10 md:mt-50 mb-10  mx-auto ">
      <div className=" relative  min-h-[500px] flex items-center justify-center p-1 md:p-0">
        <div className="lg:absolute lg:left-[0%] xl:left-[14%] w-[600px] h-auto rounded-lg shadow-lg p-1 md:p-5  z-50   bg-white ">
          <h2 className="text-primary font-semibold text-xl md:text-2xl">
            Qui sommes-nous ?{" "}
          </h2>
          <p className="text-sm md:text-base my-5 md:pr-[20%]">
            Adsunga est une entreprise spécialisée dans les technologies
            innovantes pour l'inspection et la maintenance des infrastructures.
          </p>
          <p className="text-sm md:text-base my-3 md:pr-[20%]">
            Grâce à des solutions avancées, nous aidons les gestionnaires de
            parcs solaires, couvreurs, gestionnaires immobiliers et PME à
            garantir la sécurité, la conformité et l’optimisation des coûts de
            maintenance.
          </p>
          <p className="text-sm md:text-base my-3 md:pr-[20%]">
            Notre mission : offrir des données précises et exploitables pour une
            gestion proactive, réduisant les risques et améliorant la
            performance des infrastructures.
          </p>

          <button className="px-5 my-5 ml-auto mr-0 rounded-md block bg-secondary text-primary py-2 cursor-pointer ">
            A propos
          </button>
        </div>
        <img
          className="hidden md:block md:absolute lg:right-[0%] xl:right-[10%] 2xl:right-[16%] lg:-top-[20%] w-[500px] h-[400px]  clip-hexagon z-10"
          src={Drone}
        />
      </div>
    </section>
  );
};
