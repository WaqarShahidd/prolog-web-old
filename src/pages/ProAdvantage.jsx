import { Drawer, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import Menu from "./Menu";

const ProAdvantage = () => {
  const [openMenu, setopenMenu] = useState(false);

  const largeDisplay = useMediaQuery("(min-width:1000px)");

  const { id } = useParams();
  return (
    <section>
      <CSSLink />
      <div class="page-2">
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
          <div class="content">
            <div class="heading" data-aos="fade-up">
              <h1
                data-aos="fade-right"
                style={{ fontSize: largeDisplay ? "42px" : "30px" }}
              >
                Pro-Advantages
              </h1>
              {/* <img
                src={require("../assets/images/person2.png")}
                alt=""
                data-aos="fade-left"
              /> */}
            </div>
            <div class="para" data-aos="fade-down">
              <h5>
                Our aim is to ensure that you continue to grow as we grow. This
                can only happen when professional logistics providers like you,
                who are already strong within their own local market or
                specialization become a part of our already strong team, thus
                increasing our global footprint... With a set Code of Conduct
                and Dispute Arbitration system in place, you are assured that
                you are with the best. When you get your PRO badge, you can
                avail of the following benefits:
              </h5>
            </div>
            <div class="section">
              <div class="portion" id="semi-exclusive">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-4"
                      src={require("../assets/images/frame-4.png")}
                      alt=""
                      data-aos="fade-right"
                    />
                    <h1 class="caption" data-aos="fade-left">
                      Semi Exclusive
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      We understand the need to have choices. With a few options
                      you are assured that you can align with the right partner
                      with the same mindset and ethics like yourself. Being a
                      Semi-Exclusive network ensures that you get to choose from
                      amongst the best. With a transparent view of your
                      partners’ certifications and their expiry, you know the
                      expertise you are tying up with. Similarly anyone
                      searching for a forwarder in your domain is assured that
                      he is partnering with the best.
                    </h5>
                  </div>
                </div>
                <img
                  class="imgs-triangle"
                  src={require("../assets/images/semi-exclusive.png")}
                  width="25%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
              <div class="portion" id="financial">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-5"
                      src={require("../assets/images/frame-4.png")}
                      alt=""
                      data-aos="fade-right"
                    />
                    <h1 class="caption" data-aos="fade-left">
                      Financial Protection
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      Work in a safe and secure environment where your
                      transactions between PRO members are protected. Your
                      membership comes preloaded with Pro-shield – our top of
                      the line financial protection program at no additional
                      cost to you. On par with the best in the industry, when
                      you bear this mark and we bear your risk.
                    </h5>
                  </div>
                </div>
                <img
                  class="imgs"
                  src={require("../assets/images/shield.png")}
                  width="40%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
              <div class="portion" id="mobile-app">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-5"
                      src={require("../assets/images/frame-5.png")}
                      alt=""
                      data-aos="fade-right"
                    />
                    <h1 class="caption-2" data-aos="fade-left">
                      Mobile App
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      In tune with the times, and allowing you to be more
                      efficient than before, our Mobile App packs the most
                      powerful features of our state of the art dashboard into
                      your handheld. With the mobile app you can now perform
                      smart search, view and respond to inquiries and also raise
                      new inquiries. Experience the power of true networking
                      with our app available on the Google Play Store and the
                      Apple App Store.
                    </h5>
                  </div>
                </div>
                <img
                  class="imgs"
                  src={require("../assets/images/phone.png")}
                  width="40%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
              <div class="portion" id="strategic-partners">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-8"
                      src={require("../assets/images/frame-5.png")}
                      alt=""
                      data-aos="fade-right"
                    />
                    <h1 class="caption-2" data-aos="fade-left">
                      Access to Top Class Strategic Partners
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      Everything you need to know about your partner is right
                      where you want it to be – on one screen. As a Pro member
                      you can view your partner’s profile, specialty, service,
                      contacts, accreditation, certifications, branches and even
                      reach out to them with just a click of your mouse. What
                      better way to network than this.
                    </h5>
                  </div>
                </div>
                <img
                  class="imgs"
                  src={require("../assets/images/container.png")}
                  width="40%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
              <div class="portion" id="social-media">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-8"
                      src={require("../assets/images/frame-5.png")}
                      alt=""
                      data-aos="fade-right"
                    />
                    <h1 class="caption-2" data-aos="fade-left">
                      Complete Social media exposure
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      Why do you join a network? To network, to be visible and
                      that’s exactly what we help you achieve. Our social media
                      is your podium. We are happy to announce all your
                      achievements… right from your enrolment with us and then
                      we repost this onto the several groups we are part of. We
                      also help you with an email blast that announces your
                      arrival with a bang across the tens of thousands of
                      forwarders across the globe.
                    </h5>
                  </div>
                </div>
                <img
                  class="imgs"
                  src={require("../assets/images/watch.png")}
                  width="40%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
              <div class="portion" id="networking">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-7"
                      src={require("../assets/images/frame-5.png")}
                      alt=""
                      data-aos="fade-right"
                    />
                    <h1
                      class="caption-2"
                      data-aos="fade-left"
                      style={{ top: "0.25rem" }}
                    >
                      Networking right from the first month of membership
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      When you join Professional Logistics Network, you are
                      joining a network that does what the name suggests
                      Professionally helps you Network. You are invited to join
                      our monthly mini networking webinar where you get to
                      introduce your company, meet with fellow forwarders from
                      across the globe 1-1 in our own version of networking. You
                      start networking right from the word Go Unbelievable, but
                      true. This has proved to be a great success and you have
                      to be a part of it to experience it.
                    </h5>
                  </div>
                </div>
                <img
                  class="imgs"
                  src={require("../assets/images/networking-right.png")}
                  width="45%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
              <div class="portion" id="support-device">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-8"
                      src={require("../assets/images/frame-5.png")}
                      alt=""
                      data-aos="fade-right"
                      style={{ width: "500px" }}
                    />
                    <h1 class="caption-2" data-aos="fade-left">
                      Round the clock support service
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      With support centers across timezones, we are able to
                      provide you with the much required and timely support as
                      you need it and when you need it. We are available round
                      the clock, even on holidays. You can reach us directly
                      onto our Whatsapp right from the website. No more waiting
                      for interactive chats with a bot.. you will be connected a
                      human who will respond to you in real time. Now that’s
                      true support!!!
                    </h5>
                  </div>
                </div>

                <img
                  class="imgs"
                  src={require("../assets/images/support-service.png")}
                  width="45%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
              <div class="portion" id="member-to-member">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-8"
                      src={require("../assets/images/frame-5.png")}
                      alt=""
                      data-aos="fade-right"
                    />
                    <h1 class="caption-2" data-aos="fade-left">
                      Member to Member Payment system
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      Pro-pay – our unparalleled premium member to member
                      payment system with less or no transaction fees is a
                      unique feature that saves you thousands of dollars
                      annually just by saving on banking fees. Every penny saved
                      is a penny earned in the true spirit. With multi factor
                      authentications, Pro Pay ensures that your money is safe
                      until you authorize it to be transacted.
                    </h5>
                  </div>
                </div>

                <img
                  class="imgs"
                  src={require("../assets/images/member-to-member.png")}
                  width="45%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
              <div class="portion" id="many-more">
                <div class="heading-para">
                  <div class="heading-1">
                    <img
                      class="frame-8"
                      src={require("../assets/images/frame-5.png")}
                      alt=""
                      data-aos="fade-right"
                    />
                    <h1 class="caption-3" data-aos="fade-left">
                      And many more benefits
                    </h1>
                  </div>
                  <div class="txt" data-aos="flip-up">
                    <h5>
                      Strategic Partnerships with Cargowise, Zybotech,
                      InspeXion, Xchange containers, Shipnext, Ratesland
                      <br />
                      Annual conferences in top class venues and 5 star
                      properties
                      <br />
                      Self serve portal permitting you to upload your documents
                      and download your membership certificates and Personalised
                      PRO Logo
                      <br />
                      Constantly evolving features and benefits…
                    </h5>
                  </div>
                </div>
                <img
                  class="imgs"
                  src={require("../assets/images/benefits.png")}
                  width="45%"
                  alt=""
                  data-aos="flip-right"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProAdvantage;
