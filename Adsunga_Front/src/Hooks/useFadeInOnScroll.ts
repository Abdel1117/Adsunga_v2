import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useFadeInOnScroll(
  ref: React.RefObject<HTMLElement>,
  delay = 0,
  duration = 1
) {
  useEffect(() => {
    if (!ref.current) return;
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      onEnter: () =>
        gsap.fromTo(
          ref.current,
          { y: -500, opacity: 0 },
          { y: 0, opacity: 1, delay, duration }
        ),
      once: true,
    });
  }, [ref, delay, duration]);
}
