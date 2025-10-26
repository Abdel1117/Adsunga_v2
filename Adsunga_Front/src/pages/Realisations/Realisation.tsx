import House from "../../assets/images/house.jpg";
import Drone from "../../assets/images/drone.jpg";
export const Realisation = () => {
  const arrayImage = [House, House, House];

  return (
    <>
      {/* Title Block */}
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto">
        <div>
          <div>
            <h1 className="text-primary text-xl md:text-3xl font-bold text-center mt-15 ">
              Nos réalisations : L’expertise Adsunga au service de votre
              sécurité
            </h1>
          </div>
        </div>
      </section>
      {/* End of Title Block */}
      {/* Block  */}
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-20 px-2 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="flex flex-col justify-between  gap-10">
            <div>
              <h2 className="text-primary font-bold text-xl md:text-2xl lg:texy-3xl">
                Drones
              </h2>
              <h3 className="text-black font-bold text-lg md:text-1xl lg:texy-2xl">
                Au-delà de l'imaginable
              </h3>
              <p className="my-5">Thermographie, capteurs intelligents.</p>
            </div>
            <div className="">
              <img className="w-full rounded-lg" src={House} alt="House" />
            </div>
          </div>

          <img
            className="rounded-lg h-full w-full object-cover"
            src={Drone}
            alt="Drone de présentation"
          />
        </div>
      </section>
      {/* End of Block */}
      {/* Block with 3 images */}

      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
          {arrayImage.map((image, index) => (
            <img
              className="w-full h-auto rounded-lg"
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* End of Block with 3 images */}
      {/* Illustration */}
      <section className="my-20 bg-illustration bg-contain bg-no-repeat relative min-h-[50px] md:min-h-[100px] lg:min-h-[200px]"></section>
      {/* End of Illustration */}
      {/* Block  */}
      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-20 px-2 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="flex flex-col justify-between  gap-10">
            <div>
              <h2 className="text-primary font-bold text-xl md:text-2xl lg:texy-3xl">
                BTP
              </h2>
              <h3 className="text-black font-bold text-lg md:text-1xl lg:texy-2xl">
                Un domaine à sécuriser{" "}
              </h3>
              <p className="my-5">Thermographie, capteurs intelligents.</p>
            </div>
            <div className="">
              <img className="w-full rounded-lg" src={House} alt="House" />
            </div>
          </div>

          <img
            className="rounded-lg h-full w-full object-cover"
            src={Drone}
            alt="Drone de présentation"
          />
        </div>
      </section>
      {/* End of Block */}
      {/* Block with 3 images */}

      <section className="container lg:max-w-4xl xl:max-w-7xl mx-auto mt-8  mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
          {arrayImage.map((image, index) => (
            <img
              className="w-full h-auto rounded-lg"
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* End of Block with 3 images */}
    </>
  );
};
