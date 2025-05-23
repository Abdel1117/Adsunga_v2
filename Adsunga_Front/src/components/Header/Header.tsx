import { useNavigate } from "react-router";
import Logo from "../../assets/icons/IconeLogo.png";
import { useState } from "react";
export const Header = () => {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const toogleMenu = (): void => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="bg-[#ffffff] shadow-lg">
      <div className="mx-2 lg:mx-4 md:px-2 px-4">
        <div className="flex justify-between">
          <div className="flex lg:space-x-4">
            <div>
              <a
                href="#"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <img src={Logo} alt="Logo Adsunga" className="w-12 h-12" />
                <span className="font-bold">Adsunga</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a
                onClick={() => navigate("/")}
                className="md:mr-2 lg:mr-6 xl:mr-12  px-1 lg:px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                Accueil
              </a>
              <a
                onClick={() => navigate("/prestations")}
                className="md:mr-2 lg:mr-6 xl:mr-14  px-1 lg:px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                Prestations
              </a>
              <a
                onClick={() => navigate("/realisation")}
                className="md:mr-2 lg:mr-6 xl:mr-14  px-1 lg:px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                Realisation
              </a>
              <a
                onClick={() => navigate("/blog")}
                className="md:mr-2 lg:mr-6 xl:mr-14  px-1 lg:px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                Blog
              </a>
              <a
                onClick={() => navigate("/about")}
                className="md:mr-2 lg:mr-6 xl:mr-14  px-1 lg:px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                A Propos
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a
              onClick={() => navigate("/contact")}
              className="p-2 bg-primary rounded-md text-white w-[80px] text-center cursor-pointer"
            >
              Contact
            </a>
            <a
              onClick={() => navigate("/devis")}
              className="py-2 px-3 bg-secondary  text-primary rounded  cursor-pointer"
            >
              Devis en ligne
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toogleMenu} className="mobile-menu-button">
              <svg
                className="w-6 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu ${mobileMenu ? "block" : "hidden"}  md:hidden`}
      >
        <a
          onClick={() => {
            navigate("/");
          }}
          className="block py-2 px-4 text-sm hover:bg-gray-200 cursor-pointer text-center"
        >
          Accueil
        </a>
        <a
          onClick={() => {
            navigate("/prestations");
          }}
          className="block py-2 px-4 text-sm hover:bg-gray-200 cursor-pointer text-center"
        >
          Prestations
        </a>
        <a
          onClick={() => {
            navigate("/realisaation");
          }}
          className="block py-2 px-4 text-sm hover:bg-gray-200 cursor-pointer text-center"
        >
          Realisaation
        </a>
        <a
          onClick={() => {
            navigate("/blog");
          }}
          className="block py-2 px-4 text-sm hover:bg-gray-200 cursor-pointer text-center"
        >
          Blog
        </a>
        <a
          onClick={() => {
            navigate("/about");
          }}
          className="block py-2 px-4 text-sm hover:bg-gray-200 cursor-pointer text-center"
        >
          A propos
        </a>
        <a
          onClick={() => {
            navigate("/contact");
          }}
          className="block py-2 px-4 text-sm  hover:bg-gray-200 cursor-pointer text-center"
        >
          Contact
        </a>
        <a
          onClick={() => {
            navigate("/devis");
          }}
          className="block py-2 px-4 text-sm hover:bg-gray-200 cursor-pointer text-center"
        >
          Devis En ligne
        </a>
      </div>
    </nav>
  );
};
