import { IconWpp, WrapperWpp } from "./styles";
import "./style.css"
export function Whatsapp() {
  return (
    <WrapperWpp>
      <IconWpp> </IconWpp>

      <div className="ButtonWpp">
        <a href="https://wa.me//5592995175830" target="_blank">
          <img src="/public/assets/whatsapp.png" alt="wpp"></img>
        </a>
      </div>
    </WrapperWpp>
  );
}
