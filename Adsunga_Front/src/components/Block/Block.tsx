interface BlockProps {
  title: string;
  subTitle: string;
  para: string;
  list: string;
  images?: string;
  conslusionPara: string;
}

export const Block = ({
  title,
  subTitle,
  para,
  list,
  images,
  conslusionPara,
}: BlockProps) => {
  return (
    <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 p-1 md:p-8 bg-white rounded-lg shadow">
      <div>
        <h2 className="text-primary text-xl sm:text-2xl font-bold mb-4">
          {title}
        </h2>
        <h3 className="mb-4 text-sm sm:text-base">{subTitle}</h3>

        <p className="mb-4 text-sm sm:text-base">{para}</p>

        <h3 className="mb-4 text-sm sm:text-base">Exemple de projet :</h3>
        <ul className="list-item text-sm sm:text-base">
          {list.split(",").map((item, index) => (
            <li key={index} className="mb-4 ">
              ✓ {item.trim()}
            </li>
          ))}
        </ul>
        <div>
          <p className="text-sm sm:text-base">{conslusionPara}</p>
        </div>
      </div>
      <div className="">
        <img
          src={images}
          alt="Image"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </article>
  );
};
