import { Backdrop, Drawer, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { BASE_URL } from "../constants/config";
import Menu from "./Menu";

const Shipping = () => {
  const { slug } = useParams();

  const [blogData, setblogData] = useState([]);

  const [loading, setloading] = useState(false);

  const getBlogBySlug = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/blogs/getBlogBySlug?slug=${slug}`)
      .then((res) => {
        setblogData(res.data.blogs);
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
  };

  useEffect(() => {
    getBlogBySlug();
  }, []);

  const [openMenu, setopenMenu] = useState(false);

  const largeDisplay = useMediaQuery("(min-width:1000px)");
  const headingResponsive = useMediaQuery("(min-width:480px)");

  return (
    <section>
      <CSSLink />
      <div class="page-5">
        <Header open={openMenu} setOpen={setopenMenu} main={false} />
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
        <main>
          <div class="contents" key={blogData?.id}>
            <div class="heading">
              <h1
                style={{
                  maxWidth: "50%",
                  fontSize: largeDisplay ? "42px" : "30px",
                  textAlign: headingResponsive ? "left" : "",
                }}
              >
                {blogData?.title}
              </h1>
              {/* <img src={blogData?.image} alt="" /> */}
            </div>

            <div
              class="content"
              style={{ color: "#fff !important", padding: "75px" }}
              dangerouslySetInnerHTML={{ __html: blogData.description }}
            ></div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Shipping;
