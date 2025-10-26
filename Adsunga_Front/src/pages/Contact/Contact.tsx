import { useState } from "react";
import Phone from "../../assets/icons/phone-bleu.png";
import { MapsBanner } from "../../components/MapsBanner/MapsBanner";
import { checkIfEmpty, checkRegex } from "../../utils/formValidation/formUtils";
import { Loader } from "../../components/Loader/Loader";
export const Contact = () => {
  /* ENV CONST */
  const API_URL = import.meta.env.VITE_API_URL;
  /* UseState */
  /* UseState Field Form */
  const [name, setName] = useState<string>("");
  const [prenom, setPrenom] = useState<string>("");
  const [entreprise, setEntreprise] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  /* ========================= */
  /* UseState of the errorFiel Message */
  const [nameError, setNameError] = useState<string>("");
  const [prenomError, setPrenomError] = useState<string>("");
  const [entrepriseError, setEntrepriseError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  /* ======== */
  /* UseState for the Loading State  */
  const [loading, setLoading] = useState<boolean>(false);
  /* ================================ */
  /* Success Message */
  const [success, setSuccess] = useState<boolean>(false);
  /* ================= */
  /* Const for regex */
  const nameAndPrenomRegex: RegExp = /^[a-zA-ZÀ-ÿ\s-]+$/;
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex: RegExp = /^0\d{9}$/;
  /* ===================================================================== */
  /* const for disabling button */

  const fieldsValid =
    name.trim().length > 0 &&
    prenom.trim().length > 0 &&
    entreprise.trim().length > 0 &&
    email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
    phone.match(/^0\d{9}$/);

  const hasErrors = [
    nameError,
    prenomError,
    entrepriseError,
    emailError,
    phoneError,
  ].some(Boolean);

  const isFormValid = fieldsValid && !hasErrors;
  /* ===================================================================== */
  /**
   * Function to handle the form submission
   * @param {React.FormEvent<HTMLFormElement>} e
   * @returns {void}
   * @description This function handles the form submission. It prevents the default behavior of the form, gets the form data, and checks if the entries are empty. If they are empty, it alerts the user to fill in all the fields.
   * @example handleSubmit(e: React.FormEvent<HTMLFormElement>)
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    /* Check if entrie are empty */
    console.log("data", data);
    if (
      checkIfEmpty(name) &&
      checkIfEmpty(prenom) &&
      checkIfEmpty(entreprise) &&
      checkIfEmpty(email) &&
      checkIfEmpty(phone)
    ) {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/contact/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.log("response", response);
        if (response.ok) {
          setSuccess(true);
        }
      } catch (error) {
        console.error("Error:", error);
        alert(
          "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer plus tard."
        );
      } finally {
        setLoading(false);
      }
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };
  /* ===================================================================== */

  /**
   * Description
   * @param {React.FocusEvent<HTMLInputElement>} e:React.FocusEvent<HTMLInputElement>
   * @param { React.Dispatch<React.SetStateAction<string>>} setter:React.Dispatch<React.SetStateAction<string>>
   * @param {RegExp | null} regex:RegExp|null=null
   * @param {any} errorMessage:string
   * @returns {string }
   */
  const checkValidationOfFields = (
    e: React.FocusEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    regex: RegExp | null = null,
    errorMessage: string
  ) => {
    setter("");
    const value = e.target.value.trim();
    const fieldName = e.target.name;
    /* Here to erase space in phone */
    const cleanedValue =
      fieldName === "phone" ? value.replace(/\s+/g, "") : value;
    /* ======= */
    if (!checkIfEmpty(cleanedValue)) {
      /* If Field empty */
      setter("Ce champ est requis");
    } else if (regex != null && checkRegex(cleanedValue, regex) === false) {
      /* If Field not validating regex */
      setter(errorMessage);
    }
  };
  /* ===================================================================== */

  return (
    <>
      <section className="container lg:max-w-4xl xl:max-w-10/12 mx-auto overflow-hidden">
        <div className="flex flex-col justify-start items-start mt-20 mb-10 px-4 lg:px-0">
          <button className="py-1 px-2 mb-3 bg-white rounded-md text-primary hover:text-white hover:bg-primary border border-primary w-fit-content text-center cursor-pointer">
            Tel : +33 7 44 44 48 03
          </button>
          <button className="py-1 px-2 mb-3 bg-white rounded-md text-primary hover:text-white hover:bg-primary border border-primary w-fit-content text-center cursor-pointer">
            Mail : contact@adsunga.com
          </button>
        </div>

        {/* Container of the form with the image in background */}

        <div className="mb-12">
          <div className="z-50 shadow-lg bg-white w-full lg:w-8/12 px-1 py-1 relative">
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
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                    onChange={(e) => setName(e.target.value)}
                    onBlur={(e) => {
                      checkValidationOfFields(
                        e,
                        setNameError,
                        nameAndPrenomRegex,
                        "Le nom ne doit pas contenir de caractères spéciaux ou de chiffres"
                      );
                    }}
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
                    onBlur={(e) => {
                      checkValidationOfFields(
                        e,
                        setPrenomError,
                        nameAndPrenomRegex,
                        "Le nom ne doit pas contenir de caractères spéciaux ou de chiffres"
                      );
                    }}
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
                    onBlur={(e) => {
                      checkValidationOfFields(
                        e,
                        setEntrepriseError,
                        null,
                        "N/A"
                      );
                    }}
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
                    onBlur={(e) => {
                      checkValidationOfFields(
                        e,
                        setEmailError,
                        emailRegex,
                        "Veuillez entrer une adresse email valide"
                      );
                    }}
                  />
                  <p className="text-red-500 text-sm mb-2">{emailError}</p>

                  <label className="mr-2 mb-1 text-primary " htmlFor="phone">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full "
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={(e) => {
                      checkValidationOfFields(
                        e,
                        setPhoneError,
                        phoneRegex,
                        "Veuillez entrer un numéro de téléphone valide ex (06 06 06 06 06)"
                      );
                    }}
                  />
                  <p className="text-red-500 text-sm mb-2">{phoneError}</p>
                  <label className="mr-2 mb-1 text-primary " htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full  h-32"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button
                    disabled={!isFormValid}
                    className="rounded-md py-2 px-4 border bg-primary text-white hover:bg-white hover:text-primary border-primary cursor-pointer w-[150px] disabled:bg-gray-300 
             disabled:text-gray-500 
             disabled:cursor-not-allowed 
             disabled:opacity-70"
                  >
                    Être contacté(e)
                  </button>
                </div>
              </form>
            )}
          </div>
          <div>
            <img
              className="hidden md:block w-[200px] lg:w-[500px] h-[200px] lg:h-[500px] absolute top-[25%] left-[59%] rotate-[27deg] opacity-60"
              src={Phone}
              alt="Telephone Bleu"
            />
            {success /* If success is true */ && (
              <p className="w-full lg:w-[300px] xl:w-[400px] static lg:absolute lg:left-[65%] xl:left-[70%] bottom-1 text-primary text-xl lg:text-2xl font-bold text-center lg:text-left ">
                Vous serez bientôt recontacté(e) ! Merci pour votre confiance
              </p>
            )}
          </div>
        </div>
      </section>
      <MapsBanner />
    </>
  );
};
