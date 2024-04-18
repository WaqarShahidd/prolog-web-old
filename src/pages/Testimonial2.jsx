import React from "react";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";

const Testimonial2 = () => {
  return (
    <section>
      <CSSLink />
      <div class="page-10">
        <Header />
        <main>
          <div class="contents">
            <div class="heading">
              <h1>Testimonial</h1>
              <img src={require("../assets/images/stars.png")} alt="" />
            </div>
            <div class="content">
              <div class="testimonial">
                <div class="img-txt">
                  <h2>From The Members</h2>
                  <img src={require("../assets/images/logos-10.png")} alt="" />
                </div>
                <div class="para">
                  <p>
                    It was indeed a well-organized event with select partners
                    from all over the world. The boat trip and the historic Sait
                    Halim Paşa Manison were particularly and truly remarkable.
                    The meetings and the social events contributed to the closer
                    relations and cooperation in between the members and your
                    great network management team. It was a pleasure to be with
                    you, your family, and the members in Istanbul, thank you for
                    your great work for us all.
                  </p>
                </div>
                <div class="content-bottom">
                  <img
                    class="starr"
                    src={require("../assets/images/stars2.png")}
                    alt=""
                  />
                  <div class="name">
                    <h2>Turgut ERKESKIN</h2>
                    <h3>President & CEO - Genel Transport</h3>
                    <img src={require("../assets/images/flag2.png")} alt="" />
                  </div>
                </div>
                <img
                  class="conference"
                  src={require("../assets/images/1st pro.png")}
                  alt=""
                />
              </div>
              <div class="bttns">
                <img src={require("../assets/images/arrow-left.png")} alt="" />
                <img src={require("../assets/images/arrow-right.png")} alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Testimonial2;
