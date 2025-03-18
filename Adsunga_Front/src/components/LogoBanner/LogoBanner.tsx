interface LogoBannerProps {
  arrayImage: string[];
}

export const LogoBanner = (arrayImage: LogoBannerProps) => {
  return (
    <section className="container mx-auto my-40">
      <h2 className="text-primary font-semibold text-xl md:text-2xl text-center my-14">
        Il nous ont fait confiance
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center mx-auto">
        {arrayImage.arrayImage.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt="logo"
              className="w-[200px] h-[200px] object-contain"
            />
          );
        })}
      </div>
    </section>
  );
};
