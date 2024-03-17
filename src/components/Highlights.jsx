import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 1,
      ease: "power2.out",
    });
    gsap.to(".link", {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.25,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full overflow-hidden common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="items-end justify-between w-full mb-12 md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="Watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="Right arrow" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;
