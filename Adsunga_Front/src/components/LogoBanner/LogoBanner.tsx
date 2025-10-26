import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ArrayImageWithSub {
  image: string;
  subTitle: string;
}

interface LogoBannerPropsWithSub {
  isWithSubTitle: true;
  arrayImage: ArrayImageWithSub[];
}

interface LogoBannerPropsWithoutSub {
  isWithSubTitle?: false;
  arrayImage: string[];
}

type LogoBannerProps = LogoBannerPropsWithSub | LogoBannerPropsWithoutSub;

export const LogoBanner = (props: LogoBannerProps) => {
  const { arrayImage } = props;
  const isWithSubTitle: boolean = props.isWithSubTitle ?? false;
  const colCount: number = arrayImage.length <= 5 ? arrayImage.length : 5;
  const colCountClassMap: Record<number, string> = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };
  const colCountClass = colCountClassMap[colCount] || "lg:grid-cols-5";
  const firstLogo = useRef<HTMLDivElement | HTMLImageElement>(null);
  const secondLogo = useRef<HTMLDivElement | HTMLImageElement>(null);
  const thirdLogo = useRef<HTMLDivElement | HTMLImageElement>(null);
  const fourthLogo = useRef<HTMLDivElement | HTMLImageElement>(null);
  const fifthLogo = useRef<HTMLDivElement | HTMLImageElement>(null);
  const fadeIn = (
    elem: HTMLDivElement | HTMLImageElement,
    delay: number,
    duration: number
  ): void => {
    gsap.fromTo(
      elem,
      { y: -500, opacity: 0 },
      { y: 0, opacity: 1, delay: delay, duration: duration }
    );
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: firstLogo.current,
      start: "top 100%",
      onEnter: () => fadeIn(firstLogo.current!, 0, 1),
      once: true,
    });

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: secondLogo.current,
      start: "top 100%",
      onEnter: () => fadeIn(secondLogo.current!, 0.2, 1),
      once: true,
    });

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: thirdLogo.current,
      start: "top 100%",
      onEnter: () => fadeIn(thirdLogo.current!, 0.3, 1),
      once: true,
    });
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: fourthLogo.current,
      start: "top 100%",
      onEnter: () => fadeIn(fourthLogo.current!, 0.4, 1),
      once: true,
    });
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: fifthLogo.current,
      start: "top 100%",
      onEnter: () => fadeIn(fifthLogo.current!, 0.5, 1),
      once: true,
    });
  }, []);
  return (
    <section>
      <div
        className={`mx-auto my-40 grid grid-cols-1 md:grid-cols-2 ${colCountClass}  justify-items-center  gap-y-20 md:gap-y-0 gap-50 mx-auto`}
      >
        {isWithSubTitle
          ? // Dans ce cas, arrayImage est typé ArrayImageWithSub[]
            (arrayImage as ArrayImageWithSub[]).map((item, index) => (
              <div
                ref={
                  index === 0
                    ? firstLogo
                    : index === 1
                    ? secondLogo
                    : index === 2
                    ? thirdLogo
                    : index === 3
                    ? fourthLogo
                    : fifthLogo
                }
                key={index}
                className={`flex flex-col items-center justify-center gap-2 max-w-[300px] ${
                  index === arrayImage.length - 1
                    ? "col-span-1 md:col-span-2 lg:col-span-1 md:justify-self-end"
                    : index === 0
                    ? "md:justify-self-start"
                    : ""
                }`}
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-[200px] h-[200px] object-contain"
                />
                <p className="text-black text-sm font-normal text-center md:max-w-[100%]">
                  {item.subTitle}
                </p>
              </div>
            ))
          : // Here, arrayImage est typé string[]
            (arrayImage as string[]).map((item, index) => (
              <img
                ref={
                  index === 0
                    ? firstLogo
                    : index === 1
                    ? secondLogo
                    : index === 2
                    ? thirdLogo
                    : index === 3
                    ? fourthLogo
                    : fifthLogo
                }
                key={index}
                src={item}
                alt="logo"
                className="w-[200px] h-[200px] object-contain"
              />
            ))}
      </div>
    </section>
  );
};
