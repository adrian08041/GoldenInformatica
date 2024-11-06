import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { ButtonMenu } from "./styles";

const ScrollButton: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <ButtonMenu
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "100px",

            fontSize: "16px",
            backgroundColor: "#daa520",
            color: "white",
            border: "none",
            borderRadius: "32px",
            cursor: "pointer",
            width: "60px",
            height: "60px",
          }}
        >
          <MdOutlineKeyboardArrowUp size={44} color="white" />
        </ButtonMenu>
      )}
    </>
  );
};

export default ScrollButton;
