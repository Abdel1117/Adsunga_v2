interface BlockWithGridImageProps {
  firstTitle?: string | undefined;
  subTitle?: string | undefined;
  para?: string;
  imageGrid: string[];
  direction?: "row" | "row-reverse";
}
export const BlockWithGridImage = ({
  firstTitle,
  subTitle,
  para,
  imageGrid,
  direction = "row",
}: BlockWithGridImageProps) => {
  return (
    <section>
      <div className=" max-w-screen mx-auto my-40 ">
        <div className="mb-10 ">
          <h1 className="text-primary text-xl md:text-3xl font-bold text-left mt-15 ">
            {firstTitle}
          </h1>
          <h2 className="text-black text-lg md:text-2xl font-bold text-left">
            {subTitle}
          </h2>
        </div>
        <div
          className={`flex flex-col md:flex-${direction} items-start  gap-y-20 sm:gap-y-10 md:gap-y-0`}
        >
          <div className="flex flex-col gap-5 max-w-full lg:max-w-5/12">
            <p className="text-black text-sm font-normal text-left md:max-w-[70%]">
              {para?.split(".").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-8 place-items-left justify-items-left w-full ">
            {imageGrid.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`grid-image-${index}`}
                className="w-full max-w-[300px] object-cover aspect-square rounded-lg "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
