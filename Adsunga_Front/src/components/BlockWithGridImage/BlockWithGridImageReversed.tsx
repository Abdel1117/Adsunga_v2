interface BlockWithGridImageProps {
  firstTitle?: string | undefined;
  subTitle?: string | undefined;
  para?: string;
  imageGrid: string[];
}
export const BlockWithGridImageReversed = ({
  firstTitle,
  subTitle,
  para,
  imageGrid,
}: BlockWithGridImageProps) => {
  return (
    <section>
      <div className="max-w-screen mx-auto my-2 md:my-20 ">
        <div className="mb-10 ml-auto">
          <h1 className="text-primary text-xl md:text-3xl font-bold md:text-right mt-15 mr-0">
            {firstTitle}
          </h1>
          <h2 className="text-black text-lg md:text-2xl font-bold md:text-right">
            {subTitle}
          </h2>
        </div>
        <div
          className={`flex flex-col md:flex-row items-start  gap-y-20 sm:gap-y-10 md:gap-y-0`}
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-2 ">
            {imageGrid.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                loading="lazy"
                alt={`grid-image-${index}`}
                className="w-full max-w-[100%] object-cover aspect-square rounded-lg"
              />
            ))}
          </div>
          <div>
            <div className="flex flex-col gap-5 max-w-full lg:max-w-full ">
              <p className="text-black text-sm font-normal text-left md:w-[90%] md:ml-[30px]">
                {para
                  ?.split(/(?<!\.)\.(?!\.)/)
                  .map((line) => line.trim())
                  .filter((line) => line.length > 0)
                  .map((line, index) => (
                    <>
                      <p key={index}>{line}.</p> <br />
                    </>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
