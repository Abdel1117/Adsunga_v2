import QualiopiLogo from "../../assets/icons/Qualiopi.png";
import DgacLogo from "../../assets/icons/Dgac.png";

export const CertificationsBanner = () => {
  return (
    <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto my-20">
      <h2 className="text-2xl text-primary font-semibold text-center my-20">
        Nos savoirs faire et certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="shadow-lg rounded-lg flex flex-col items-center p-10">
          <img
            className="w-[150] h-[150px]"
            src={QualiopiLogo}
            alt="Qualiopi Logo"
          />
          <p className="text-center mt-16 text-gray-600">
            Piloter un drone dans le secteur du BTP et du génie civil.
          </p>
        </div>
        <div className="shadow-lg rounded-lg flex flex-col items-center p-10">
          <img
            className="w-[150px] h-[150px]"
            src={DgacLogo}
            alt="Telepilote Logo"
          />
          <p className="text-center mt-16 text-gray-600">
            Certificat d'aptitude théorique télépilote (CATT) Drone
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1  shadow-lg rounded-lg flex flex-col items-center p-10">
          <img className="w-[150px] h-[150px]" src={DgacLogo} alt="Dgac logo" />
          <p className="text-center mt-16 text-gray-600">
            Déclaration d'exploitant drone n° ED 18416 auprès de la DGAC
            (Direction de Général de l'Aviation Civil).
          </p>
        </div>
      </div>
    </section>
  );
};
