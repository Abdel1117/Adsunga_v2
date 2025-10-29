import AdsungaLogoBlanc from "../../assets/icons/iconelogoblanc.png";
import { useNavigate } from "react-router";
import { getCurrentYear } from "../../utils/date/DateFonction";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-[#1C1C1A] p-12">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#1C1C1A] text-center md:justify-between">
        <div className="flex flex-col items-center justify-center gap-y-2 gap-x-0 md:gap-x-0 md:items-start md:justify-start">
          <img className="w-12 h-12" src={AdsungaLogoBlanc} alt="" />
          <p className="block mb-1 text-md font-bold text-left text-white">
            Adsunga
          </p>
          <p className="block mb-1 text-sm text-center text-white md:mb-0 ">
            ©{getCurrentYear()} Adsunga. Tout droit réservés.
          </p>
        </div>
        <ul className="flex flex-col md:flex-row flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              onClick={() => navigate("/about")}
              className="text-white hover:cursor-pointer hover:underline focus:text-slate-500 text-sm"
            >
              A propos
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/politique-confidentialite")}
              className="text-white hover:cursor-pointer hover:underline focus:text-slate-500 text-sm"
            >
              Politique de confidentialité
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/mentions-legales")}
              className="text-white hover:cursor-pointer hover:underline focus:text-slate-500 text-sm"
            >
              Mentions légales
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/contact")}
              className="text-white hover:cursor-pointer hover:underline focus:text-slate-500 text-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
