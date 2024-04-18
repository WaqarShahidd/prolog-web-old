import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { BASE_URL } from "../constants/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Backdrop, Box, Drawer, useMediaQuery } from "@mui/material";
import Menu from "./Menu";
import { membersOf, partners } from "../assets/data";
import { Carousel } from "react-responsive-carousel";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:850px)");
  const largest = useMediaQuery("(min-width:1750px)");

  const [count, setCount] = useState([]);
  const [members, setMembers] = useState([]);
  const [newsPress, setNewsPress] = useState([]);

  const [loading, setloading] = useState(false);

  const getCountOfCompanies = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/companies/count`)
      .then((res) => {
        setCount(res.data);
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
  };

  const getMemberNews = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/newsandpress/get_all_member_press`)
      .then((res) => {
        setMembers(res.data.member_press);
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
  };

  const getNewsPress = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/newsandpress/get_all_news_press`)
      .then((res) => {
        setNewsPress(res.data.news_press);
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
  };

  useEffect(() => {
    getCountOfCompanies();
    getMemberNews();
    getNewsPress();
  }, []);

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className="slide-arrow prev-arrow" onClick={onClick} />;
  };
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return <div className="slide-arrow next-arrow" onClick={onClick} />;
  };

  const settings = {
    slidesToShow: largest ? 5 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
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

  const settingsNews = {
    slidesToShow: 2,
    rows: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
    // responsive: [
    //   {
    //     breakpoint: 850,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 520,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  const [openMenu, setopenMenu] = useState(false);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const autoplaySlider = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
  };

  const handleClick = (div) => {
    setTimeout(() => {
      const targetDiv = document.getElementById(`${div}`);
      if (targetDiv) {
        // const headerHeight = document.querySelector('header').offsetHeight;
        targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
        window.scrollTo(0, targetDiv.offsetTop - 100);
      }
    }, 100);
  };

  return (
    <section style={{ backgroundColor: "#01041E" }}>
      <CSSLink />

      <Header open={openMenu} setOpen={setopenMenu} main={true} />

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        {/* <CircularProgress color="inherit" /> */}
        <img
          src={require("../assets/images/loader.gif")}
          style={{ height: "175px", width: "175px" }}
        />
      </Backdrop>

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

      <Slider {...autoplaySlider} className="sec-1">
        <div class="slide slide_1" alt="">
          <img src={require("../assets/images/banner1.png")} alt="" />
          <div
            class="buttons"
            style={{
              zIndex: "9999999",
              position: "absolute",
              inset: 0,
              top: isMobile ? "-25%" : "50%",
              fontSize: isMobile && "85%",
            }}
          >
            <button
              id="btn2"
              onClick={() => window.open("http://app.prolognet.com", "_blank")}
            >
              Apply Now
            </button>
            <button id="btn3" onClick={() => navigate("/request-demo")}>
              Request Demo
            </button>
          </div>
        </div>
        {/* <div class="slide slide_2">
          <img src={require("../assets/images/propay.png")} alt="" />
          <div
            class="buttons"
            style={{
              zIndex: "9999999",
              position: "absolute",
              bottom: "10%",
              right: isMobile ? "30%" : "35%",
            }}
          >
            <button
              id="btn3"
              onClick={() =>
                (window.location.href =
                  "http://propay.staging.com.s3-website-us-east-1.amazonaws.com")
              }
            >
              Propay
            </button>
          </div>
        </div> */}
        <div class="slide slide_3">
          <img src={require("../assets/images/App.png")} alt="" />
          <div
            style={{
              zIndex: "9999999",
              position: "absolute",
              bottom: "17.5%",
              left: "6%",
              width: "13.5%",
              height: "6.5%",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/professional-logistics-network/id6446221546?platform=iphone",
                "_blank"
              )
            }
          />
          <div
            style={{
              zIndex: "9999999",
              position: "absolute",
              bottom: "17.5%",
              left: "21%",
              width: "13.5%",
              height: "6.5%",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.nucleus.prolognet",
                "_blank"
              )
            }
          />
        </div>
        {/* <div class="slide slide_3">
         
          <div
            class="buttons"
            style={{
              zIndex: "9999999",
              position: "absolute",
              bottom: "10%",
              left: isMobile ? "30%" : "35%",
              fontSize: isMobile && "50%",
            }}
          >
            <button
              id="btn3"
              onClick={() =>
                window.open("https://conference.prolognet.com/", "_blank")
              }
            >
              Visit Conference
            </button>
          </div>
        </div> */}
      </Slider>

      <main>
        <section class="sec-2">
          <div class="portion-1" data-aos="fade-down">
            <div class="heading" data-aos="fade-right">
              <h1 style={{ textAlign: "left", fontSize: "55px" }}>
                Our Network
              </h1>
              <hr />
              <h4
                style={{
                  maxWidth: "75%",
                  textAlign: "justify",
                  fontSize: "22px",
                }}
              >
                PROFESSIONAL LOGISTICS NETWORK is a digitally advanced Next GEN
                alliance of freight forwarders and logistics providers. The top
                of the line network with some unparalleled benefits and features
                that NO other network has as of today. <br />
                We have only the best of the global small and medium sized
                members in our network who are experts in their domain.
                {/* <br />
                Come and explore our world today. Contact us for a demo <br />
                <div
                  className="buttons"
                  style={{
                    marginTop: "10%",
                    width: isMobile && "100%",
                    fontSize: isMobile && "inherit",
                  }}
                >
                  <button id="btn3" onClick={() => navigate("/request-demo")}>
                    Request Demo
                  </button>
                </div> */}
              </h4>
            </div>
            <img
              src={require("../assets/images/globe.png")}
              alt=""
              data-aos="fade-left"
            />
          </div>
          <div class="portion-2" data-aos="fade-up" data-aos-offset="150">
            <div class="counts">
              <div class="offices">
                <span class="num" data-value="2578">
                  {count.members}
                </span>
                <p>Members Offices</p>
              </div>
              <div class="cities">
                <span class="num" data-value="580">
                  {count.city}
                </span>
                <p>Cities</p>
              </div>
              <div class="countries">
                <span class="num" data-value="183">
                  {count.country}
                </span>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </section>
        <section class="sec-3">
          <div class="heading" style={{ marginTop: "0px" }}>
            <h1 data-aos="zoom-in-right" data-aos-offset="200">
              Business At Your
              <br />
              Fingertips
            </h1>
            <img
              src={require("../assets/images/chip.png")}
              width="90%"
              alt=""
              data-aos="zoom-in-left"
              data-aos-offset="200"
            />
          </div>
          <div class="methods">
            <div class="method">
              <div
                class="img-txt"
                data-aos="fade-up-right"
                data-aos-offset="200"
              >
                <img
                  class="question-mark"
                  src={require("../assets/images/question.png")}
                  width="45%"
                  alt=""
                />
                <h2 class="heading-1" style={{ maxWidth: "220px" }}>
                  Send and receive money between PRO members with negligible
                  transfer fees
                </h2>
              </div>
            </div>
            <img
              class="bordr"
              src={require("../assets/images/border.png")}
              alt=""
              data-aos="fade-down"
            />
            <div class="method">
              <div class="img-txt" data-aos="fade-up">
                <img
                  src={require("../assets/images/cell.png")}
                  width="45%"
                  alt=""
                />
                <h2 class="heading-2" style={{ maxWidth: "220px" }}>
                  Strategic partners with amazing discounts helping forwarders
                  excel further
                </h2>
              </div>
            </div>
            <img
              class="bordr"
              src={require("../assets/images/border.png")}
              alt=""
              data-aos="fade-down"
            />
            <div class="method">
              <div class="img-txt" data-aos="fade-up">
                <img
                  class="truck"
                  src={require("../assets/images/truck.png")}
                  width="70%"
                  alt=""
                />
                <h2 class="heading-3" style={{ maxWidth: "220px" }}>
                  Able to generate leads and grab potential business
                </h2>
              </div>
            </div>
            <img
              class="bordr"
              src={require("../assets/images/border.png")}
              alt=""
              data-aos="fade-down"
            />
            <div class="method">
              <div class="img-txt" data-aos="fade-up-left">
                <img
                  class="person"
                  src={require("../assets/images/person.png")}
                  width="70%"
                  alt=""
                />
                <h2 style={{ maxWidth: "220px" }}>
                  Send and receive RFQs to and from multiple forwarders in 3
                  simple steps
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section class="sec-4">
          <div class="arrow">
            <h1 data-aos="fade-right" data-aos-offset="100">
              Unique Features
            </h1>
            <img
              class="arrow-down"
              src={require("../assets/images/arrow-down.png")}
              alt=""
              data-aos="fade-down"
              data-aos-offset="150"
            />
          </div>
          <div class="portion">
            <div class="nested-spans">
              <div data-aos="fade-right">
                <span>
                  Mobile App for faster and efficient service to fellow members
                </span>
                <span>Personalized service to each member</span>
              </div>
              <div data-aos="fade-left">
                <span>Who viewed my profile feature</span>
                <span>
                  Smart search function with multiple real time filters
                </span>
              </div>
              <div data-aos="fade-right">
                <span>
                  Get noticed for your expertise and not your alphabetical name
                </span>
                <span>Evolving Benefits</span>
              </div>
              <div data-aos="fade-left">
                <span>A completely menuless smart dashboard</span>
                <span>Fully customizable dashboard</span>
              </div>
              <div
                data-aos="fade-right"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <span>Self serve smart portal</span>
              </div>
            </div>
            <img
              class="triangle"
              src={require("../assets/images/features.png")}
              alt=""
              data-aos="fade-left"
            />
          </div>
        </section>
        <section class="sec-5">
          <img
            class="pro"
            src={require("../assets/images/pro.png")}
            alt=""
            data-aos="fade-down"
            data-aos-offset="150"
          />
          <div class="portion">
            <div class="stacks">
              <div class="stack">
                <div
                  onClick={() => {
                    handleClick("semi-exclusive");
                    navigate("/pro-advantage#semi-exclusive");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-right"
                  />
                  <span data-aos="fade-down">Semi Exclusive</span>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick("financial");
                    navigate("/pro-advantage#financial");
                  }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-right"
                  />
                  <span data-aos="fade-down">Financial Protection</span>
                </div>
              </div>
              <div class="stack">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick("mobile-app");
                    navigate("/pro-advantage#mobile-app");
                  }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-left"
                  />
                  <span data-aos="fade-right">Mobile App</span>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick("strategic-partners");
                    navigate("/pro-advantage#strategic-partners");
                  }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-left"
                  />
                  <span data-aos="fade-left">
                    Access to Top Class Strategic Partners
                  </span>
                </div>
              </div>
              <div class="stack">
                <div
                  onClick={() => {
                    handleClick("social-media");
                    navigate("/pro-advantage#social-media");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-right"
                  />
                  <span data-aos="fade-up" data-aos-offset="200">
                    Compete Social media exposure for maximum visibility
                  </span>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick("networking");
                    navigate("/pro-advantage#networking");
                  }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-right"
                  />
                  <span data-aos="fade-up" data-aos-offset="200">
                    Networking right from the first month of membership
                  </span>
                </div>
              </div>
              <div class="stack">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick("support-device");
                    navigate("/pro-advantage#support-device");
                  }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-right"
                  />
                  <span data-aos="fade-up" data-aos-offset="200">
                    Round the clock support service
                  </span>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick("member-to-member");
                    navigate("/pro-advantage#member-to-member");
                  }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-right"
                  />
                  <span data-aos="fade-up" data-aos-offset="200">
                    Member to Member Payment system
                  </span>
                </div>
              </div>
              <div
                class="stack"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleClick("many-more");
                    navigate("/pro-advantage#many-more");
                  }}
                >
                  <img
                    src={require("../assets/images/frame-1.png")}
                    alt=""
                    data-aos="flip-right"
                  />
                  <span data-aos="fade-up" data-aos-offset="200">
                    and many more…
                  </span>
                </div>
              </div>
            </div>
            <img
              class="chip-2"
              src={require("../assets/images/chip-2.png")}
              alt=""
              data-aos="fade-left"
            />
          </div>
        </section>
        <section class="sec-6">
          <div class="heading" style={{ marginTop: "0px" }}>
            <img
              src={require("../assets/images/frame-2.png")}
              alt=""
              data-aos="flip-right"
              data-aos-offset="150"
            />
            <h1 data-aos="fade-right" data-aos-offset="100">
              News & Press
            </h1>
          </div>
          <div class="portion">
            <Slider className="part" {...settingsNews} ref={sliderRef}>
              {newsPress.map((item) => {
                return (
                  <div
                    className="img-txt"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3fr, 1)",
                    }}
                  >
                    <div class="imgs">
                      <img
                        class="b-g"
                        src={require("../assets/images/bg-frame.png")}
                        alt=""
                        data-aos="zoom-in"
                        // style={{ height: "150px" }}
                      />
                      <img
                        class="overlay"
                        src={item.image}
                        alt=""
                        data-aos="fade-right"
                      />
                      <button
                        class="play"
                        data-aos="fade-right"
                        onClick={() =>
                          navigate(`/news/${item.id}`, {
                            state: {
                              slug: item.slug,
                            },
                          })
                        }
                      >
                        <span class="material-icons">play_arrow</span>
                      </button>
                    </div>
                    <div class="txt">
                      <h2 data-aos="fade-right">{item.title}</h2>
                      <p
                        data-aos="fade-left"
                        style={{
                          maxHeight: "77px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          wordWrap: "break-word",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>

            <div class="buttns" data-aos="fade-up">
              <span
                class="material-icons"
                onClick={() => sliderRef.current.slickPrev()}
              >
                arrow_left
              </span>
              <span
                class="material-icons"
                onClick={() => sliderRef.current.slickNext()}
              >
                arrow_right
              </span>
            </div>
          </div>
        </section>
        <section class="sec-7">
          <div class="heading">
            <img
              src={require("../assets/images/frame-2.png")}
              alt=""
              data-aos="flip-right"
              data-aos-offset="100"
            />
            <h1 data-aos="fade-right" data-aos-offset="100">
              Our Members
            </h1>
          </div>
          <div class="carousel-1" style={{ margin: !isMobile && "70px" }}>
            <Slider {...settings} className="custom-logos slider">
              {members
                .sort((a, b) => 0.5 - Math.random())
                .map((item) => {
                  return (
                    <div
                      class="slide"
                      key={item.id}
                      style={{ marginRight: "20px", cursor: "pointer" }}
                      onClick={() =>
                        window.open(
                          `https://app.prolognet.com/profile/${item.companyId}`,
                          "_blank"
                        )
                      }
                    >
                      <img
                        src={item.image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "75px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  );
                })}
            </Slider>
            {/* <div class="buttns" data-aos="fade-up">
              <span
                class="material-icons"
                onClick={() => sliderRef.current.slickPrev()}
              >
                arrow_left
              </span>
              <span
                class="material-icons"
                onClick={() => sliderRef.current.slickNext()}
              >
                arrow_right
              </span>
            </div> */}
          </div>
        </section>
        <section class="sec-8" id="partner">
          <div class="heading">
            <img
              src={require("../assets/images/frame-2.png")}
              alt=""
              data-aos="flip-right"
              data-aos-offset="100"
            />
            <h1 data-aos="fade-left" data-aos-offset="100">
              Our Partners
            </h1>
          </div>
          <Slider {...settings} className="logos-0 custom-logos">
            {partners.map((item) => {
              return (
                <div
                  class="frames"
                  key={item.id}
                  onClick={() => window.open(`${item.link}`, "_blank")}
                >
                  <img
                    class="frme"
                    src={require("../assets/images/frame-3.png")}
                    alt=""
                    data-aos="flip-left"
                  />
                  <img
                    class="overlay"
                    src={item.image}
                    alt=""
                    data-aos="fade-up"
                  />
                </div>
              );
            })}
          </Slider>
        </section>
        <section class="sec-8" id="members-of">
          <div class="heading">
            <img
              src={require("../assets/images/frame-2.png")}
              alt=""
              data-aos="flip-right"
              data-aos-offset="100"
            />
            <h1 data-aos="fade-left" data-aos-offset="100">
              Members of
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            {membersOf.map((item, index) => {
              return (
                // <div
                //   class="frames"
                //   key={item.id}
                //   style={{
                //     display: "flex",
                //     position: "relative",
                //     marginRight: "20px",
                //     marginLeft: "20px",
                //   }}
                // >
                //   <img
                //     class="frme"
                //     src={require("../assets/images/frame-3.png")}
                //     alt=""
                //     data-aos="flip-left"
                //   />
                //   <img
                //     class="overlay"
                //     src={item.image}
                //     alt=""
                //     data-aos="fade-up"
                //     style={{
                //       position: "absolute",
                //       top: "50px",
                //       left: "30px",
                //       height: "100px",
                //       width: "300px",
                //     }}
                //   />
                // </div>
                <div
                  class="slide"
                  key={item.id}
                  style={{
                    marginRight: "20px",
                    padding: "2rem 1rem",
                    border: "2px solid #005dff",
                    borderRadius: "35px",
                    backgroundImage:
                      "radial-gradient(at top, #182977 1%, #182977 15%, #0f1637 80%)",
                    margin: "1rem",
                    boxShadow: "0px 0px 12px 7px #0d2987",
                    width: "300px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "75px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>
        <section class="sec-9">
          <h2>Contact Detail</h2>
          <div class="main-sec-9">
            <div class="flex-sec-9">
              <div class="flex-1-sec-9">
                <h3>professional logistics network</h3>
                <h4>
                  <img
                    src={require("../assets/images/list-right.png")}
                    alt=""
                  />
                  Support services from:
                </h4>
                <a href="#" style={{ cursor: "default" }}>
                  <img
                    src={require("../assets/images/list-right.png")}
                    alt=""
                  />{" "}
                  North America
                </a>
                <a href="#" style={{ cursor: "default" }}>
                  <img
                    src={require("../assets/images/list-right.png")}
                    alt=""
                  />{" "}
                  Indian sub continent
                </a>
                <a href="#" style={{ cursor: "default" }}>
                  <img
                    src={require("../assets/images/list-right.png")}
                    alt=""
                  />{" "}
                  Africa
                </a>
                <a href="#" style={{ cursor: "default" }}>
                  <img
                    src={require("../assets/images/list-right.png")}
                    alt=""
                  />{" "}
                  Far East
                </a>

                <p>...More centre's opening up soon</p>
              </div>
              <div class="flex-2-sec-9">
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/about")}
                >
                  About Us
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/news")}
                >
                  Member and Press
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/blogs")}
                >
                  Blog
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/pro-advantage")}
                >
                  Pro-Advanatges
                </a>
                <a href="#partner">Our Partners</a>
                <a href="#members-of">Members of</a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div class="num-mail">
              <p>+1 (437) 214-7577 - 24 x 7 at your service</p>
              <p>info@prolognet.com</p>
            </div>
            <div class="follow">
              <p>Follow Us</p>
              <div class="brands">
                <img
                  src={require("../assets/images/facebook.png")}
                  style={{
                    marginRight: "7.5px",
                    height: "16px",
                    width: "16px",
                    cursor: "pointer",
                  }}
                />
                <img
                  src={require("../assets/images/instagram.png")}
                  style={{
                    marginRight: "7.5px",
                    height: "16px",
                    width: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open("https://www.instagram.com/prolog_net/")
                  }
                />
                <img
                  src={require("../assets/images/youtube.png")}
                  style={{
                    marginRight: "7.5px",
                    height: "16px",
                    width: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/channel/UC9Wt7aC4fYO7FQPBfdjnKhg"
                    )
                  }
                />
                <img
                  src={require("../assets/images/linkedin.png")}
                  style={{
                    marginRight: "7.5px",
                    height: "16px",
                    width: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/professional-logistics-network-inc-prolog/"
                    )
                  }
                />
                {/* <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ marginRight: "7.5px", cursor: "pointer" }}
                /> */}

                {/* <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ marginRight: "7.5px", cursor: "pointer" }}
                  href="https://www.instagram.com/prolog_net/"
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ marginRight: "7.5px", cursor: "pointer" }}
                  href="https://www.youtube.com/channel/UC9Wt7aC4fYO7FQPBfdjnKhg"
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ marginRight: "7.5px", cursor: "pointer" }}
                  href="https://www.linkedin.com/company/professional-logistics-network-inc-prolog/"
                /> */}
                {/* <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin-in"></i> */}
              </div>
              <p>Prolog app </p>
              <p style={{ marginBottom: "10px", fontFamily: "montserrat" }}>
                now available on
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={require("../assets/images/play-store.png")}
                  style={{
                    height: "50px",
                    width: "150px",
                    marginBottom: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.nucleus.prolognet",
                      "_blank"
                    )
                  }
                />
                <img
                  src={require("../assets/images/app-store.png")}
                  style={{ height: "50px", width: "150px", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/us/app/professional-logistics-network/id6446221546?platform=iphone",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Index;
