import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useFadeInFromX(
  ref: React.RefObject<HTMLElement>,
  delay = 0,
  duration = 1,
  x = -500,
  finalX = 0
) {
  useEffect(() => {
    if (!ref.current) return;
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      onEnter: () =>
        gsap.fromTo(
          ref.current,
          { x: x, opacity: 0 },
          { x: finalX, opacity: 1, delay, duration }
        ),
      once: true,
    });
  }, [ref, delay, duration, x, finalX]);
}
