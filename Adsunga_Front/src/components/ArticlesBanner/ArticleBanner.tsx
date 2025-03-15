import { Card } from "../Card/Card";

export const ArticleBanner = () => {
  return (
    <section className="w-[80%] my-20 mx-auto ">
      <h2 className="text-2xl text-primary font-semibold text-center my-20">
        Des articles réguliers pour vous accompagner
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mx-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
