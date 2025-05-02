interface BlockWithGridImageProps {
  firstTitle?: string | undefined;
  subTitle?: string | undefined;
  para?: string;
  imageGrid: string[];
}
export const BlockWithGridImage = ({
  firstTitle,
  subTitle,
  para,
  imageGrid,
}: BlockWithGridImageProps) => {
  return (
    <section>
      <div className="max-w-screen mx-auto my-2 md:my-20">
        <div className="mb-10 ">
          <h1 className="text-primary text-xl md:text-3xl font-bold text-left mt-15 ">
            {firstTitle}
          </h1>
          <h2 className="text-black text-lg md:text-2xl font-bold text-left">
            {subTitle}
          </h2>
        </div>
        <div
          className={`flex flex-col md:flex-row items-start  gap-y-20 sm:gap-y-10 md:gap-y-0`}
        >
          <div className="flex flex-col gap-5 max-w-full lg:max-w-5/12">
            <p className="text-black text-sm font-normal text-left md:w-[90%] md:mr-[30px]">
              {para
                ?.split(/(?<!\.)\.(?!\.)/)
                .map((line) => line.trim())
                .filter((line) => line.length > 0)
                .map((line, index) => (
                  <>
                    {" "}
                    <p key={index}>{line}.</p> <br />
                  </>
                ))}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap- ">
            {imageGrid.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`grid-image-${index}`}
                className="w-full max-w-[100%] object-cover aspect-square rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
