import React from "react";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";

const Holiday = () => {
  return (
    <section>
      <CSSLink />
      <div class="page-8">
        <Header />
        <main>
          <div class="contents">
            <div class="content">
              <div class="img-txt">
                <div class="immg">
                  <img src={require("../assets/images/image4.png")} alt="" />
                </div>
                <div class="txt">
                  <h1>Holiday Notice</h1>
                  <div class="para-1">
                    <h5>
                      While wishing all our esteemed members Happy Holidays, we
                      wish to inform you that our worldwide support centers will
                      be closed on
                    </h5>
                  </div>
                  <div class="dates">
                    <h5>- 24th December, 2021</h5>
                    <h5>- 25th December, 2021</h5>
                    <h5>- 31st December, 2021</h5>
                    <h5>- 1st Jan, 2022</h5>
                  </div>
                  <div class="para-2">
                    <h4>Our Istanbul centre will be further closed on</h4>
                    <h5>- 3rd Jan, 2022</h5>
                  </div>
                  <div class="para-3">
                    <p>
                      for urgent matters please call on +1-437-214-7577 or write
                      to info@prolognet.com
                    </p>
                    <h5>- The Prolog Family</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Holiday;
