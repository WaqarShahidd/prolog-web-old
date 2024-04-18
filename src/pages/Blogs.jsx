import { Backdrop, Drawer, useMediaQuery } from "@mui/material";
import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { BASE_URL } from "../constants/config";
import Menu from "./Menu";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogData, setblogData] = useState([]);

  const [loading, setloading] = useState(false);

  const getAllBlogs = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/blogs/getAllBlogs`)
      .then((res) => {
        setblogData(res.data.blogs);
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
  };

  const getOneBlogs = () => {
    axios
      .get(`${BASE_URL}/api/blogs/getBlogById?id=${10}`)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const [openMenu, setopenMenu] = useState(false);

  const largeDisplay = useMediaQuery("(min-width:1000px)");

  return (
    <section>
      <CSSLink />
      <div class="page-4">
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
          <div class="contents">
            <div class="heading">
              <h1 style={{ fontSize: largeDisplay ? "42px" : "30px" }}>
                Blogs
              </h1>
              {/* <img
                src={require("../assets/images/Shipping-containers.png")}
                alt=""
              /> */}
            </div>
            <div class="content">
              {blogData.map((bl, index) => {
                return (
                  <div
                    class="cards"
                    key={bl.id}
                    style={{ flexWrap: "wrap", cursor: "pointer" }}
                    onClick={() => navigate(`/blog/${bl.slug}`)}
                  >
                    {index % 2 === 0 ? (
                      <>
                        <div class="card">
                          <img src={bl.image} alt="" />
                          <h3>{bl.title}</h3>
                          <p>{moment(bl.updatedAt).format("MMM DD, YYYY")}</p>
                        </div>
                        {blogData?.length > index + 1 && (
                          <div class="card">
                            <img src={bl.image} alt="" />
                            <h3>{blogData[index + 1]?.title}</h3>
                            <p>{moment(bl.updatedAt).format("MMM DD, YYYY")}</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Blogs;
