import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import SingleBlog from "../pages/SingleBlog";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Gallery2 from "../pages/Gallery2";
import Holiday from "../pages/Holiday";
import Index from "../pages/Index";
import Menu from "../pages/Menu";
import News from "../pages/News";
import ProAdvantage from "../pages/ProAdvantage";
import Shipping from "../pages/Shipping";
import Test from "../pages/Test";
import Testimonial from "../pages/Testimonial";
import RequestDemo from "../pages/RequestDemo";
import { useLocation } from "react-router";
import Gal from "../pages/Gal";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const Navigation = () => {
  return (
    <Router scrollBehavior="auto">
      <div
        style={{
          backgroundColor: "#25d366",
          position: "fixed",
          bottom: "20%",
          right: 50,
          zIndex: 9999999,
          height: "40px",
          width: "125px",
          borderRadius: "50px",
          border: "none",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          boxShadow: "2px 2px 3px #999",
          cursor: "pointer",
        }}
        onClick={() =>
          window.open("https://u.wechat.com/kBQdwyjcDK8YiApn89whXXo", "_blank")
        }
      >
        <p
          style={{
            color: "white",
            fontSize: "12px",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          WeChat
        </p>
        <img
          src={require("../assets/images/wechat.png")}
          style={{ height: "20px", width: "20px" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#25d366",
          position: "fixed",
          bottom: "10%",
          right: 50,
          zIndex: 9999999,
          height: "40px",
          width: "125px",
          borderRadius: "50px",
          border: "none",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          boxShadow: "2px 2px 3px #999",
          cursor: "pointer",
        }}
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=14372147577&text=Hello%2C+I+saw+the+network+website.+I+have+a+few+questions+about+it%2C+are+you+available+to+chat%3F&type=phone_number&app_absent=0",
            "_blank"
          )
        }
      >
        <p
          style={{
            color: "white",
            fontSize: "12px",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          WhatsApp
        </p>
        <img
          src={require("../assets/images/whatsapp.png")}
          style={{ height: "20px", width: "20px" }}
        />
      </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/news/:id" element={<SingleBlog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gal />} />
        <Route path="/conference-gallery/:id" element={<Gallery />} />
        <Route path="/all-gallery/:id" element={<Gallery2 />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pro-advantage" element={<ProAdvantage />} />
        <Route path="/blog/:slug" element={<Shipping />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/news" element={<News />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
