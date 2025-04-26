import React from "react";
import DrawIo from "../../assets/images/DrawIo.jpg";
interface CardProps {
  imageSrc: string;
  alternativeText: string;
  titleArticle: string;
  sousArticle: string;
  descriptionArticle: string;
}
export const Card = ({
  imageSrc = DrawIo,
  alternativeText = "Mon Image",
  titleArticle = "Mon Titre",
  sousArticle = "Sous titre",
  descriptionArticle = "Lorem",
}: CardProps) => {
  return (
    <article className="max-w-sm bg-white  rounded-lg shadow-lg ">
      <a href="#">
        <img className="rounded-t-lg" src={imageSrc} alt={alternativeText} />
      </a>
      <p className="px-3 text-primary">Il y a XXX jours</p>
      <div className="px-3 py-3">
        <a href="#">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-primary ">
            {titleArticle}
          </h3>
        </a>

        <h4 className="mt-2 text-orange-600">{sousArticle}</h4>
        <p className="mb-3 font-normal text-black ">{descriptionArticle}</p>
        <button className="block ml-auto mr-0 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer ">
          Voir plus
        </button>
      </div>
    </article>
  );
};
