import { Card } from "../Card/Card";

export const ArticleBanner = () => {
  return (
    <section className="container lg:max-w-4xl xl:max-w-7xl w-[100%] my-20 mx-auto ">
      <h2 className="text-2xl text-primary font-semibold text-center my-20">
        Des articles réguliers pour vous accompagner
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mx-auto">
        <div className="md:justify-self-start">
          <Card />
        </div>
        <div className="md:justify-self-center">
          <Card />
        </div>
        <div className="md:justify-self-end">
          <Card />
        </div>
      </div>
    </section>
  );
};
