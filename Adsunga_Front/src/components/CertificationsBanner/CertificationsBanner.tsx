import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import QualiopiLogo from "../../assets/icons/qualiopi.png";
import DgacLogo from "../../assets/icons/dgac.png";

export const CertificationsBanner = () => {
  const firstCard = useRef<HTMLDivElement | null>(null);
  const secondCard = useRef<HTMLDivElement | null>(null);
  const thirdCard = useRef<HTMLDivElement | null>(null);
  const fadeIn = (
    elem: HTMLDivElement,
    delay: number,
    duration: number
  ): void => {
    gsap.fromTo(
      elem,
      { y: -500, opacity: 0 },
      { y: 0, opacity: 1, delay: delay, duration: duration }
    );
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: firstCard.current,
      start: "top 80%",
      onEnter: () => fadeIn(firstCard.current!, 0, 1),
      once: true,
    });

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: secondCard.current,
      start: "top 80%",
      onEnter: () => fadeIn(secondCard.current!, 0.4, 1),
      once: true,
    });

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: thirdCard.current,
      start: "top 80%",
      onEnter: () => fadeIn(thirdCard.current!, 0.8, 1),
      once: true,
    });
  }, []);
  return (
    <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto my-20">
      <h2 className="text-2xl text-primary font-semibold text-center my-20">
        Nos savoirs faire et certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          ref={firstCard}
          className="opacity-0 shadow-lg rounded-lg flex flex-col items-center p-10"
        >
          <img
            className="w-[150] h-[150px]"
            src={QualiopiLogo}
            alt="Qualiopi Logo"
          />
          <p className="text-center mt-16 text-gray-600">
            Piloter un drone dans le secteur du BTP et du génie civil.
          </p>
        </div>
        <div
          ref={secondCard}
          className="opacity-0 shadow-lg rounded-lg flex flex-col items-center p-10"
        >
          <img
            className="w-[150px] h-[150px]"
            src={DgacLogo}
            alt="Telepilote Logo"
          />
          <p className="text-center mt-16 text-gray-600">
            Certificat d'aptitude théorique télépilote (CATT) Drone
          </p>
        </div>
        <div
          ref={thirdCard}
          className="opacity-0 col-span-1 md:col-span-2 lg:col-span-1  shadow-lg rounded-lg flex flex-col items-center p-10"
        >
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
