import { useNavigate } from "react-router";
import DOMPurify from "dompurify";
import DrawIo from "../../assets/images/drawio.jpg";
interface CardProps {
  id?: number;
  imageSrc: string;
  alternativeText: string;
  date: string;
  titleArticle: string;
  category: string;
  descriptionArticle: string;
}
export const Card = ({
  id = 0,
  imageSrc = DrawIo,
  alternativeText = "Mon Image",
  date = "Il y a XXX jours",
  titleArticle = "Mon Titre",
  category = "Sous titre",
  descriptionArticle = "Lorem",
}: CardProps) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  // Ensure the imageSrc is sanitized and safe to use
  const sanitizedImageSrc = DOMPurify.sanitize(imageSrc);
  const safeContent = DOMPurify.sanitize(
    descriptionArticle.replace(/<img[^>]*>/g, "").substring(0, 200) + "...",
  );
  const timeStamp = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <article className="max-w-full min-h-[300px] bg-white  rounded-lg shadow-lg">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-[200px] object-contain"
          src={`${API_URL}/uploads/${sanitizedImageSrc}`}
          loading="lazy"
          alt={alternativeText}
        />
      </a>
      <p className="px-3 text-primary">{timeStamp}</p>
      <div className="px-3 py-3">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-primary ">
          {titleArticle}
        </h3>

        <h4 className="mt-2 text-orange-600">{category}</h4>

        <p
          className="prose mb-4 min-h-[100px]"
          dangerouslySetInnerHTML={{ __html: safeContent }}
        />

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
