import { Element } from "react-scroll";
import { Maps } from "../components/Section-7";
import { Section1 } from "../components/section-1";
import { Section2 } from "../components/section-2";
import { Section3 } from "../components/section-3";
import { Section4 } from "../components/section-4";
import { Section5 } from "../components/section-5";
import { Section6 } from "../components/section-6";
import { Whatsapp } from "../components/whatsapp";

import ScrollButton from "../components/top";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";



export function App() {
  useGSAP(() => {
    gsap.to(".header", {x:0})
  }, []);

  return (
    <>
      <Element name="header">
        <Section1 />
      </Element>
      <Element name="sobre-nos">
        <Section2/>
      </Element>
      <Element name="nossos-servicos">
        <Section3 />
      </Element>
      <Section4 />
      <Element name="duvidas">
        <Section5 />
      </Element>
      <Element name="contato">
        <Section6 />
      </Element>
      <Maps />
      <Whatsapp />
      <ScrollButton />
    </>
  );
}




