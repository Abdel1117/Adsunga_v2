import AdsungaLogoBlanc from "../../assets/icons/IconeLogoBlanc.png";
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
              href="#"
              className="text-white hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
