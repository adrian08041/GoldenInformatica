import { SlArrowDown } from "react-icons/sl";
import { ReturnToTopButton } from "./styles";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export function ReturnToTop() {
  return (
    <ReturnToTopButton>
      <Link to="header" smooth={true} duration={800}>
        <MdOutlineKeyboardArrowUp size={50} color="white" />
      </Link>
    </ReturnToTopButton>
  );
}
