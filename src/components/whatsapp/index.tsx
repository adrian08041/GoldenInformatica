import { WrapperWpp } from "./styles";

import { MdWhatsapp } from "react-icons/md";
export function Whatsapp() {
  return (
    <WrapperWpp>
      <a href="https://wa.me//5592995175830" target="_blank">
        <MdWhatsapp size={44} color="white" />
      </a>
    </WrapperWpp>
  );
}
