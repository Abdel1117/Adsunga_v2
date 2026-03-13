import { MapsBanner } from "../../components/MapsBanner/MapsBanner";
import { useEffect, useState } from "react";
import {
  checkIfDateIsValid,
  checkValidationOfFields,
} from "../../utils/formValidation/formUtils";
import { Loader } from "../../components/Loader/Loader";
export const Devis = () => {
  /* Const for API URL */
  const API_URL = import.meta.env.VITE_API_URL;

  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [entreprise, setEntreprise] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [choice, setChoice] = useState<string[]>([]);
  const [firstChecked, setFirstChecked] = useState<boolean>(false);

  const [other, setOther] = useState<string>("");
  const [localisation, setLocalisation] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [taille, setTaille] = useState<string>("");

  /* ErrorState */
  const [nameError, setNameError] = useState<string>("");
  const [prenomError, setPrenomError] = useState<string>("");
  const [entrepriseError, setEntrepriseError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [choiceError, setChoiceError] = useState<string>("");
  const [localisationError, setLocalisationError] = useState<string>("");
  const [dateError, setDateError] = useState<string>("");
  const [tailleError, setTailleError] = useState<string>("");
  /* ====================================================================== */

  /* Const for regex */
  const nameAndPrenomRegex: RegExp = /^[a-zA-ZÀ-ÿ\s-]+$/;
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex: RegExp = /^0\d{9}$/;
  const tailleRegex: RegExp = /^\d+$/;
  /* ===================================================================== */
  /* const for disabling button */

  const fieldsValid =
    name.trim().length > 0 &&
    prenom.trim().length > 0 &&
    entreprise.trim().length > 0 &&
    email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
    phone.match(/^0\d{9}$/) &&
    choice.length > 0 &&
    localisation.trim().length > 0 &&
    date.trim().length > 0 &&
    taille.trim().length > 0;

  const hasErrors = [
    nameError,
    prenomError,
    entrepriseError,
    emailError,
    phoneError,
    choiceError,
    localisationError,
    dateError,
    tailleError,
  ].some(Boolean);

  const isFormValid = fieldsValid && !hasErrors;
  /* ===================================================================== */

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFirstChecked(true);
    if (checked) {
      setChoice((prev) => [...prev, value]);
    } else {
      setChoice((prev) => prev.filter((v) => v !== value));
    }
    setChoiceError("");
    // On enlève l'erreur dès qu'une checkbox est (dé)sélectionnée
  };
  const errorSetters: Record<
    string,
    React.Dispatch<React.SetStateAction<string>>
  > = {
    name: setNameError,
    prenom: setPrenomError,
    entreprise: setEntrepriseError,
    email: setEmailError,
    phone: setPhoneError,
    choice: setChoiceError,
    localisation: setLocalisationError,
    date: setDateError,
    taille: setTailleError,
  };

  interface BackendError {
    path: string;
    msg: string;
  }
  const applyBackendErrors = (backendErrors: BackendError[]): void => {
    // Réinitialise d'abord tous les messages d'erreur
    Object.values(errorSetters).forEach((setter) => setter(""));

    if (Array.isArray(backendErrors)) {
      backendErrors.forEach((err) => {
        const setError = errorSetters[err.path]; // Utilisation de "path" au lieu de "param"
        if (setError) {
          setError(err.msg);
        }
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    const formData = new FormData(form);
    console.log(formData);
    const data = {
      ...Object.fromEntries(formData.entries()),
      service: formData.getAll("service"),
    };
    console.log("data", data);

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/devis/devis`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("response", response);
      if (response.ok) {
        setSuccess(true);
      } else if (response.status === 422) {
        const { errors } = await response.json();
        console.log("errors", errors);
        applyBackendErrors(errors);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer plus tard.",
      );
    } finally {
      setLoading(false);
    }
  };

  /* UseEffect afin de gérer l'état des erreurs pour les cases à cocher */
  useEffect(() => {
    if (choice.length === 0 && firstChecked) {
      setChoiceError("Veuillez sélectionner au moins un service");
    } else {
      setChoiceError("");
    }
  }, [choice]);
  /* ====================================== */
  /* UseEffect afin de surveiller la date */
  useEffect(() => {
    const resultDate = checkIfDateIsValid(date);
    if (resultDate === false) {
      setDateError("Veuillez entrer une date valide");
    } else {
      setDateError("");
    }
  }, [date]);
  /* ====================================== */

  return (
    <>
      <section className="container lg:max-w-4xl xl:max-w-10/12 mx-auto overflow-hidden">
        <div>
          <h1 className="text-primary text-xl md:text-3xl font-bold text-center my-15">
            Obtenez votre devis en quelques clics. Simple, rapide et
            personnalisé !
          </h1>
        </div>

        <div>
          <div className="z-50 shadow-lg bg-white w-full md:w-10/12 px-1 py-1 relative mx-auto mb-12">
            {loading ? (
              <div className="h-[700px] flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mt-10 mb-10 pl-4 pr-8">
                  <label className="mr-2 mb-1 text-primary " htmlFor="name">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full "
                    onChange={(e) => setName(e.target.value)}
                    onBlur={(e) =>
                      checkValidationOfFields(
                        e,
                        setNameError,
                        nameAndPrenomRegex,
                        "Le nom ne doit pas contenir de caractères spéciaux ou de chiffres",
                      )
                    }
                  />

                  <p className="text-red-500 text-sm mb-2">{nameError}</p>
                  <label className="mr-2 mb-1 text-primary " htmlFor="prenom">
                    Prenom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full "
                    onChange={(e) => setPrenom(e.target.value)}
                    onBlur={(e) =>
                      checkValidationOfFields(
                        e,
                        setPrenomError,
                        nameAndPrenomRegex,
                        "Le prénom ne doit pas contenir de caractères spéciaux ou de chiffres",
                      )
                    }
                  />
                  <p className="text-red-500 text-sm mb-2">{prenomError}</p>
                  <label
                    className="mr-2 mb-1 text-primary "
                    htmlFor="entreprise"
                  >
                    Nom de l'entreprise
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full "
                    onChange={(e) => setEntreprise(e.target.value)}
                    onBlur={(e) =>
                      checkValidationOfFields(
                        e,
                        setEntrepriseError,
                        null,
                        "N/A",
                      )
                    }
                  />
                  <p className="text-red-500 text-sm mb-2">{entrepriseError}</p>
                  <label className="mr-2 mb-1 text-primary " htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full "
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) =>
                      checkValidationOfFields(
                        e,
                        setEmailError,
                        emailRegex,
                        "Veuillez entrer une adresse email valide",
                      )
                    }
                  />
                  <p className="text-red-500 text-sm mb-2">{emailError}</p>
                  <label className="mr-2 mb-1 text-primary " htmlFor="phone">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full "
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={(e) =>
                      checkValidationOfFields(
                        e,
                        setPhoneError,
                        phoneRegex,
                        "Veuillez entrer un numéro de téléphone valide",
                      )
                    }
                  />
                  <p className="text-red-500 text-sm mb-2">{phoneError}</p>
                  <fieldset className="mb-4">
                    <legend className="mr-2 mb-1 text-primary ">
                      Type de service souhaité
                    </legend>
                    <div className="mb-2">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name="service"
                        id="insp"
                        onChange={handleCheckboxChange}
                        value="Inspection / valorisation par drone"
                      />
                      <label htmlFor="insp">
                        Inspection / valorisation par drone
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name="service"
                        id="hse"
                        onChange={handleCheckboxChange}
                        value="Hygiene Sécurité et Environement (HSE)"
                      />
                      <label htmlFor="hse">
                        Hygiene Sécurité et Environement (HSE)
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name="service"
                        id="sps"
                        onChange={handleCheckboxChange}
                        value="Coordination Sécurité Protection de la Santé (SPS)"
                      />
                      <label htmlFor="sps">
                        Coordination Sécurité Protection de la Santé (SPS)
                      </label>
                    </div>
                    <p className="text-red-500 text-sm mb-2">{choiceError}</p>
                  </fieldset>

                  <label className="mr-2 mb-1 text-primary " htmlFor="other">
                    Autre (champ libre)
                  </label>
                  <input
                    type="text"
                    id="other"
                    name="other"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full "
                    onChange={(e) => setOther(e.target.value)}
                  />
                  <label className="mr-2 mb-1 text-primary " htmlFor="message">
                    Localisation de l'intervention
                  </label>
                  <input
                    type="text"
                    id="localisation"
                    name="localisation"
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                    onChange={(e) => setLocalisation(e.target.value)}
                    onBlur={(e) =>
                      checkValidationOfFields(
                        e,
                        setLocalisationError,
                        null,
                        "N/A",
                      )
                    }
                  />
                  <p className="text-red-500 text-sm mb-2">
                    {localisationError}
                  </p>
                  <label className="mr-2 mb-1 text-primary " htmlFor="message">
                    Date Souhaiter (JJ/MM/AAAA)
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                    onChange={(e) => setDate(e.target.value)}
                    onBlur={(e) =>
                      checkValidationOfFields(e, setDateError, null, "N/A")
                    }
                  />
                  <p className="text-red-500 text-sm mb-2">{dateError}</p>
                  <label className="mr-2 mb-1 text-primary " htmlFor="taille">
                    Taille du site concerne (en m²)
                  </label>
                  <input
                    type="text"
                    id="taille"
                    name="taille"
                    className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                    onChange={(e) => setTaille(e.target.value)}
                    onBlur={(e) =>
                      checkValidationOfFields(
                        e,
                        setTailleError,
                        tailleRegex,
                        "Veuillez entrer uniquement des chiffres",
                      )
                    }
                  />
                  <p className="text-red-500 text-sm mb-2">{tailleError}</p>
                  <button
                    disabled={!isFormValid}
                    type="submit"
                    className="
                  w-fit py-3 px-6 bg-primary text-white 
                  font-semibold rounded-md hover:bg-white hover:text-primary
                  border hover:border-primary hover:cursor-pointer
                  focus:outline-none focus:ring-2 focus:ring-primary 
                  focus:ring-opacity-50 transition duration-200 ease-in-out disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    Demander mon devis
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="m-5">
          <p className="text-center text-primary text-xl lg:text-2xl font-bold ">
            {success &&
              "Votre demande de devis a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais."}
          </p>
        </div>
      </section>
      <MapsBanner />
    </>
  );
};
