import { Drawer, useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { testimonials } from "../assets/data";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import Menu from "./Menu";

const Testimonial = () => {
  const [openMenu, setopenMenu] = useState(false);

  const largeDisplay = useMediaQuery("(min-width:1000px)");

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <section>
      <CSSLink />
      <div class="page-10">
        <Header open={openMenu} setOpen={setopenMenu} main={false} />
        <Drawer
          anchor={"left"}
          open={openMenu}
          PaperProps={{
            sx: { width: "100%" },
          }}
          onClose={() => setopenMenu(false)}
        >
          <Menu open={openMenu} setOpen={setopenMenu} />
        </Drawer>

        <main>
          <div class="contents">
            <div class="heading">
              <h1 style={{ fontSize: largeDisplay ? "42px" : "30px" }}>
                Testimonial
              </h1>
              <img src={require("../assets/images/stars.png")} alt="" />
            </div>

            <div class="content">
              <Slider
                {...settings}
                className="testimonial"
                ref={sliderRef}
                style={{ width: "80% !important" }}
              >
                {testimonials.map((item, index) => {
                  return (
                    <div style={{ width: "100%", position: "relative" }}>
                      <div class="img-txt">
                        <h2>From The Members</h2>
                        <img
                          src={item.logo}
                          alt=""
                          style={{
                            width: "208px",
                            height: "174px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div class="para">
                        <p>{item.comment}</p>
                      </div>
                      <div class="content-bottom">
                        <img
                          class="starr"
                          src={require("../assets/images/stars2.png")}
                          alt=""
                        />
                        <div class="name">
                          <h2>{item.author}</h2>
                          <h3>{item.designation}</h3>
                          <img
                            src={item.flag}
                            alt=""
                            style={{
                              width: "58px",
                              height: "39px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      {/* <img
                        className="conference"
                        src={require("../assets/images/1st pro.png")}
                        alt=""
                        style={{
                          zIndex: "999",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "250px",
                        }}
                      /> */}
                    </div>
                  );
                })}
              </Slider>

              <div class="bttns">
                <img
                  src={require("../assets/images/arrow-left.png")}
                  alt=""
                  onClick={() => sliderRef.current.slickPrev()}
                />
                <img
                  src={require("../assets/images/arrow-right.png")}
                  alt=""
                  onClick={() => sliderRef.current.slickNext()}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Testimonial;
