import React from "react";
import Drone from "../../assets/icons/drone-noir.png";
export const NotFound = () => {
  return (
    <section>
      <div className="h-screen w-screen bg-#FFFFFF  flex items-center justify-center">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold ">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal ">
              Désolé nous n'avons pas réussi à trouvé votre page Web.
            </p>
            <p className="mb-8 ">
              Mais ne vous inquiétez pas Adsunga a plein d'autre choses à vous
              faire découvrir.
            </p>

            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              {" "}
              <a href="/">Revenir à la page d'Accueil</a>
            </button>
          </div>
          <div className="max-w-lg ">
            <img className="animate-pulse" src={Drone} alt="adsunga logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
