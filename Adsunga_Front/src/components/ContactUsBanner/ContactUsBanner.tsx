import { useNavigate } from "react-router";

export const ContactUsBanner = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-illustration bg-contain bg-no-repeat relative min-h-[200px] p-1 md:p-0 ">
      <h2 className="text-[#EF7700] font-normal text-xl md:text-2xl text-center my-14">
        Besoin d'informations supplémentaires ?
      </h2>

      <button
        onClick={() => {
          navigate("/contact");
        }}
        className="bg-[#FFE6C0] text-[#EF7700] font-semibold py-2 px-4 rounded-sm mx-auto block cursor-pointer hover:bg-[#EF7700] hover:text-[#FFE6C0] transition duration-300 ease-in-out "
      >
        Contactez-nous !
      </button>
    </section>
  );
};
