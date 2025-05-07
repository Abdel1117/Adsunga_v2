import Phone from "../../assets/icons/Phone bleu.png";
export const Contact = () => {
  return (
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

      <div>
        <div className="z-50 shadow-lg bg-white w-full lg:w-8/12 px-1 py-1 relative">
          <form>
            <div className="flex flex-col mt-10 mb-10 pl-4 pr-8">
              <label className="mr-2 mb-1 text-primary " htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full "
              />

              <label className="mr-2 mb-1 text-primary " htmlFor="prenom">
                Prenom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full "
              />

              <label className="mr-2 mb-1 text-primary " htmlFor="entreprise">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full "
              />
              <label className="mr-2 mb-1 text-primary " htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full "
              />

              <label className="mr-2 mb-1 text-primary " htmlFor="phone">
                Téléphone
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full "
              />

              <label className="mr-2 mb-1 text-primary " htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded-md p-2 mb-4 w-full  h-32"
              ></textarea>
              <button className="rounded-md py-2 px-4 bg-primary text-white cursor-pointer w-[150px]">
                Être contacté(e)
              </button>
            </div>
          </form>
        </div>
        <div>
          <img
            className="hidden md:block w-[200px] lg:w-[500px] h-[200px] lg:h-[500px] absolute top-[25%] left-[59%] rotate-[27deg] opacity-60"
            src={Phone}
            alt="Telephone Bleu"
          />
          <p className="w-full lg:w-[300px] xl:w-[400px] static lg:absolute lg:left-[65%] xl:left-[70%] bottom-1 text-primary text-xl lg:text-2xl font-bold text-center lg:text-left  ">
            Vous serez bientôt recontacté(e) ! Merci pour votre confiance
          </p>
        </div>
      </div>
    </section>
  );
};
