import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { staging, prod, redirect } from "../constants/config";
import CSSLink from "./CSSLink";
import GoogleTranslate from "./GoogleTranslate";

const Header = ({ open, setOpen, main, position }) => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const isMobile = useMediaQuery("(max-width:850px)");
  const isTablet = useMediaQuery("(max-width:1100px)");
  const screen4k = useMediaQuery("(min-width:1100px)");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
      <CSSLink />
      <GoogleTranslate />
      <header
        style={{
          height: main ? "" : "",
          backgroundColor: scrolled ? "#01041e" : "transparent",
          padding: "0rem 0rem",
          height: "12.5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: !scrolled && "20px",
        }}
        className={scrolled ? "sticky" : ""}
      >
        <img
          className="nav-menu"
          src={require("../assets/images/bx-align-middle.png")}
          alt=""
          data-aos="fade-up"
          data-aos-offset="50"
          onClick={() => {
            setOpen(!open);
          }}
          style={{
            height: scrolled ? (isMobile ? "20px" : "30%") : "25px",
            width: scrolled ? (isMobile ? "20px" : "1.5%") : "25px",
            paddingTop: isMobile ? "20px" : "0px",
            // margin: scrolled && "0px",
            // marginRight: isMobile && "12px",
          }}
        />
        <div
          className="logos"
          data-aos="fade-down"
          data-aos-offset="100"
          style={{ width: scrolled ? "60%" : "" }}
        >
          {!scrolled && (
            <img
              className="logo-bg"
              src={require("../assets/images/Component1.png")}
              alt=""
              style={{
                height: isMobile ? "0%" : !isTablet ? "190px" : "175px",
                width: isMobile ? "0%" : !isTablet ? "1000px" : "750px",
              }}
            />
          )}
          <img
            className="logo"
            src={require("../assets/images/logo-new.png")}
            alt=""
            onClick={() => navigate("/")}
            style={{
              height: scrolled
                ? isMobile
                  ? "65px"
                  : !isTablet
                  ? "62.5px"
                  : null
                : "100px",
              width: scrolled
                ? isMobile
                  ? "65px"
                  : !isTablet
                  ? "65px"
                  : "87px"
                : "100px",
              top: scrolled && "-10px",
            }}
          />
        </div>
        <a
          href={redirect}
          style={{
            zIndex: !open && "9999",
            paddingTop: isMobile ? "20px" : "0px",
          }}
        >
          <button
            id="btn1"
            data-aos="fade-up"
            data-aos-offset="50"
            style={{
              // margin: scrolled && "0px",
              fontSize: scrolled && !isMobile && "11px",
              width: scrolled && "",
              // marginRight: isMobile && "12px",
            }}
          >
            Member Area
          </button>
        </a>
      </header>
    </>
  );
};

export default Header;
