export const MapsBanner = () => {
  return (
    <section className=" grid grid-cols-1 sm:grid-cols-12 ">
      <div className="col-span-5 flex flex-col justify-center items-start bg-secondary p-4">
        <div className="mx-auto">
          <h2 className="text-primary font-semibold text-2xl mx-auto ">
            Adsunga - Bureau d'études
          </h2>
          <p className="text-primary mx-auto ">93120 La Courneuve</p>
          <p className="text-primary mx-auto ">
            1 centre commercial de la tour
          </p>
        </div>
      </div>
      <div className="col-span-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.357871155214!2d2.3764731964551555!3d48.927625160232104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e16aae56c9e7c1b%3A0xaf9e364edf3fbc94!2sAdsunga%20-%20Bureau%20d&#39;%C3%A9tudes%20et%20techniques%20sp%C3%A9cialis%C3%A9%20dans%20la%20pr%C3%A9vention%20et%20l&#39;inspection!5e0!3m2!1sfr!2sfr!4v1745702885572!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
