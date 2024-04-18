import { Drawer, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { aboutUs } from "../assets/data";

import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import Menu from "./Menu";

const About = () => {
  const [openMenu, setopenMenu] = useState(false);

  const isMobile = useMediaQuery("(min-width:700px)");
  const isSmall = useMediaQuery("(max-width:500px)");

  const verySmall = useMediaQuery("(max-width:480px)");

  return (
    <section>
      <CSSLink />
      <div className="page-3">
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
            <div
              class="heading"
              data-aos="fade-up"
              style={{
                display: verySmall && "flex",
                justifyContent: verySmall && "center",
                alignItems: verySmall && "center",
                backgroundImage:
                  verySmall &&
                  "radial-gradient( at top, #182977 1%, #182977 15%, #0f1637 90% )",
                padding: verySmall && "3rem 0rem",
                position: verySmall && "relative",
              }}
            >
              <h1
                data-aos="fade-right"
                style={{
                  paddingLeft: verySmall && "0px",
                  marginTop: verySmall && "2rem",
                }}
              >
                About-us
              </h1>
              {/* <img
                src={require("../assets/images/business-meeting.png")}
                alt=""
                data-aos="fade-left"
                style={{
                  width: verySmall && "250px",
                  height: verySmall && "100px",
                  position: verySmall && "absolute",
                  top: verySmall && "-2.5rem",
                  right: verySmall && "auto",
                  paddingRight: verySmall && "0px",
                  borderRadius: verySmall && "20px",
                }}
              /> */}
            </div>
            <div
              class="content"
              data-aos="fade-down"
              style={{
                marginRight: !isMobile && "0px",
                marginLeft: !isMobile && "0px",
                paddingBottom: "10%",
              }}
            >
              <h1 data-aos="fade-down">About Us</h1>
              <div class="portion">
                {aboutUs.map((item, index) => {
                  return (
                    index % 2 === 0 && (
                      <>
                        <div
                          class=""
                          style={{
                            display: "flex",
                            flexDirection: isMobile ? "row" : "column",
                            justifyContent: !isMobile && "center",
                            alignItems: !isMobile && "center",
                            marginTop: "5%",
                          }}
                        >
                          <div
                            class=""
                            style={{ textAlign: "right", marginRight: "20px" }}
                          >
                            <h2
                              data-aos="fade-right"
                              style={{
                                color: "white",
                                fontSize: "32px",
                                fontFamily: "montserrat-bold",
                              }}
                            >
                              {item.title}
                            </h2>
                            <h5
                              data-aos="flip-up"
                              style={{
                                color: "white",
                                fontSize: "18px",
                                marginTop: "2.5%",
                              }}
                            >
                              {item.subtitle}
                            </h5>
                          </div>
                          <img
                            src={require("../assets/images/touch.png")}
                            alt=""
                            data-aos="fade-left"
                            style={{
                              width: isSmall ? "40%" : "20%",
                              height: isSmall ? "45%" : "25%",
                              marginTop: !isMobile && "5%",
                              boxShadow: "0px 0px 30px 4px #00267e",
                            }}
                          />
                        </div>
                        <hr data-aos="flip-right" style={{ width: "85%" }} />
                        {aboutUs?.length > index + 1 && (
                          <>
                            <div
                              class=""
                              style={{
                                display: "flex",
                                flexDirection: isMobile ? "row" : "column",
                                justifyContent: !isMobile && "center",
                                alignItems: !isMobile && "center",
                                marginTop: "5%",
                              }}
                            >
                              <img
                                src={require("../assets/images/touch.png")}
                                alt=""
                                data-aos="fade-right"
                                style={{
                                  width: isSmall ? "40%" : "20%",
                                  height: isSmall ? "45%" : "25%",
                                  marginTop: !isMobile && "5%",
                                  marginBottom: "2.5%",
                                  boxShadow: "0px 0px 30px 4px #00267e",
                                }}
                              />
                              <div
                                class=""
                                style={{
                                  textAlign: "left",
                                  marginLeft: "20px",
                                }}
                              >
                                <h2
                                  data-aos="fade-left"
                                  style={{
                                    color: "white",
                                    fontSize: "32px",
                                    fontFamily: "montserrat-bold",
                                  }}
                                >
                                  {aboutUs[index + 1].title}
                                </h2>
                                <h5
                                  data-aos="flip-up"
                                  style={{
                                    color: "white",
                                    fontSize: "18px",
                                    marginTop: "2.5%",
                                  }}
                                >
                                  {aboutUs[index + 1].subtitle}
                                </h5>
                              </div>
                            </div>
                            <hr
                              data-aos="flip-right"
                              style={{ width: "85%" }}
                            />
                          </>
                        )}
                      </>
                    )
                  );
                })}
                {/* <div class="img-txt">
                  <div class="txt" style={{ paddingTop: "3rem" }}>
                    <h2 data-aos="fade-right">What do you get?</h2>
                    <h5 data-aos="flip-up">
                      You can immediately communicate with fellow members
                      through our portal itself - submit enquiries, receive
                      inquiries, know what is floating around. No longer do you
                      need to deal with window shoppers cluttering your inbox.
                      You can now pick and choose from the series of serious
                      inquiries that you can find on our portal.
                    </h5>
                  </div>
                  <img
                    src={require("../assets/images/touch.png")}
                    alt=""
                    data-aos="fade-left"
                  />
                </div>
                <hr data-aos="flip-right" />
                <div class="img-txt-2">
                  <img
                    src={require("../assets/images/touch.png")}
                    alt=""
                    data-aos="fade-right"
                  />
                  <div class="txt">
                    <h2 data-aos="fade-left">What's in it for us?</h2>
                    <h5 data-aos="flip-up">
                      Nothing… your growth is our growth. Your success - ours.
                      It is all included when you go for your PRO badge*.
                    </h5>
                  </div>
                </div>
                <hr data-aos="flip-right" />
                <div class="img-txt">
                  <div class="txt" style={{ paddingTop: "3rem" }}>
                    <h2 data-aos="fade-right">What's next?</h2>
                    <h5 data-aos="flip-up">
                      The highlight: very soon you can convert your RFQ into a
                      firm quote and use our portal to send and receive payments
                      too. But that's the future we are the future.
                    </h5>
                  </div>
                  <img
                    src={require("../assets/images/touch.png")}
                    alt=""
                    data-aos="fade-left"
                  />
                </div>
                <hr data-aos="flip-right" />
                <div class="img-txt-2">
                  <img
                    src={require("../assets/images/touch.png")}
                    alt=""
                    data-aos="fade-right"
                  />
                  <div class="txt">
                    <h2 data-aos="fade-left">The power is in the number</h2>
                    <h5 data-aos="flip-up">
                      With a potential 14000 forwarders lined up to sign up - we
                      are ensuring that only the best of this 14000 get to the
                      Partner level. We want the best to partner with the best.
                      But there is a limit to how many can earn a PRO badge from
                      every city. Our stringent vetting process assures that
                      only the true professional becomes eligible to earn the
                      PRO badge. We make sure that you have multiple options to
                      select from globally. ProLog believes in the collective
                      power and dedicatedly serves its members towards growth
                      and success.
                    </h5>
                  </div>
                </div>
                <hr data-aos="flip-right" /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default About;
