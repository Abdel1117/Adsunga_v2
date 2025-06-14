import { useNavigate } from "react-router";
import DrawIo from "../../assets/images/DrawIo.jpg";
interface CardProps {
  id?: number;
  imageSrc: string;
  alternativeText: string;
  titleArticle: string;
  sousArticle: string;
  descriptionArticle: string;
}
export const Card = ({
  id = 0,
  imageSrc = DrawIo,
  alternativeText = "Mon Image",
  titleArticle = "Mon Titre",
  sousArticle = "Sous titre",
  descriptionArticle = "Lorem",
}: CardProps) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  return (
    <article className="max-w-sm bg-white  rounded-lg shadow-lg">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-[200px] object-contain"
          src={`${API_URL}/uploads/${imageSrc}`}
          alt={alternativeText}
        />
      </a>
      <p className="px-3 text-primary">Il y a XXX jours</p>
      <div className="px-3 py-3">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-primary ">
          {titleArticle}
        </h3>

        <h4 className="mt-2 text-orange-600">{sousArticle}</h4>
        <p className="mb-3 font-normal text-black ">{descriptionArticle}</p>
        <button
          onClick={() => {
            navigate(`article/${id}`);
          }} // Assuming API_URL is defined in your environment variables
          className="block ml-auto mr-0 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer "
        >
          Voir plus
        </button>
      </div>
    </article>
  );
};
