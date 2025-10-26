import { useFadeInOnScroll } from "../../Hooks/useFadeInOnScroll";
import { useRef } from "react";
export const BlocPlaceHolder = () => {
  const card = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(card as React.RefObject<HTMLElement>, 0.2, 1);
  return (
    <div className="bg-hero-building bg-center bg-no-repeat p-0 sm:px-20 sm:py-10 h-[400px]">
      <div className="flex justify-center items-center h-full ">
        <div
          ref={card}
          className="flex flex-col items-center justify-center h-full bg-gray-200/80 rounded-lg p-1 md:p-40"
        >
          <h1 className="text-xl md:text-3xl font-bold text-center my-3">
            Sécuriser et conformer vos infrastructures
          </h1>
          <p className="text-primary text-center my-3">
            Assurez la sécurité et le respect des normes réglementaires
          </p>
          <p className="text-center">
            Adsunga aide les entreprises à prévenir les risques et garantir la
            conformité de leurs infrastructures grâce à des solutions
            innovantes.
          </p>
        </div>
      </div>
    </div>
  );
};
