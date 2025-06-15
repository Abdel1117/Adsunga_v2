import { useState } from "react";

export const CookieBanner = () => {
  // This component can be used to display a cookie consent banner
  // You can implement cookie consent logic here
  // For example, you can use a state to track if the user has accepted cookies
  // and conditionally render the banner based on that state.
  // For now, it simply returns a placeholder div.
  // You can replace this with your actual implementation.

  const [bannerVisibility, setBannerVisibility] = useState<boolean>(
    localStorage.getItem("cookieConsent") === null
  );

  const handleCookieChose = (value: boolean) => {
    setBannerVisibility(false);
    localStorage.setItem("cookieConsent", JSON.stringify(value));
    setCookie("cookieConsent", value, {
      expires: new Date(Date.now() + 31536000000),
    }); // 1 année
  };
  return !bannerVisibility ? null : (
    <div className="bg-white border rounded-md shadow-xl min-w-[fit-content] mx-auto p-3 md:p-5 animate-fadeIn fixed bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] flex flex-col  items-center justify-center z-50 ">
      <div className="text-2xl flex flex-col pb-4">
        <span className="text-3xl font-bold">Les Cookies... </span>
      </div>
      <div className="pb-2 md:pb-4">
        <p>Acceptez-vous de nous laisser utiliser des cookies ?</p>
      </div>
      <div className="pb-2 md:pb-4">
        <small>
          Certains cookies sont nécessaires à des fins techniques, ils sont donc
          dispensés de consentement. D'autres, non obligatoires, peuvent être
          utilisés pour la personnalisation des annonces et du contenu, la
          mesure des annonces et du contenu, la connaissance de l'audience et le
          développement de produits, les données de géolocalisation précises et
          l'identification par le balayage de l'appareil, le stockage et/ou
          l'accès aux informations sur un appareil. Si vous donnez votre
          consentement, celui-ci sera valable sur l’ensemble des sous-domaines
          de Adsunga. Vous disposez de la possibilité de retirer votre
          consentement à tout moment en cliquant sur consent choices en bas à
          droite de la page. Pour en savoir plus, visitez notre privacy center.
        </small>
      </div>
      <div className="flex justify-between items-center w-full min-w-[280px] py-4 md:mt-5">
        <button
          onClick={(e) => {
            const button = e.currentTarget as HTMLButtonElement;
            // Ensure the value is boolean
            const value = button.value === "true";
            handleCookieChose(value);
          }}
          value={true}
          className="min-w-[100px] outline-none p-1 rounded-md text-white bg-blue-500 hover:bg-blue-600"
        >
          Accepter
        </button>
        <button
          onClick={(e) => {
            const button = e.currentTarget as HTMLButtonElement;
            // Ensure the value is boolean
            // Here we assume that the value is false for refusal
            // If you want to handle refusal differently, you can adjust this logic
            const value = button.value === "true";
            handleCookieChose(value);
          }}
          value={false}
          className="min-w-[100px] outline-none p-1 rounded-md text-white bg-red-600 hover:bg-red-700"
        >
          Refuser
        </button>
      </div>
    </div>
  );
};
