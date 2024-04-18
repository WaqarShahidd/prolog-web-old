import { Backdrop, Drawer, useMediaQuery } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { BASE_URL } from "../constants/config";
import Menu from "./Menu";

const News = () => {
  const navigate = useNavigate();
  const [newsAndPress, setNewsAndPress] = useState([]);
  const [loading, setloading] = useState(false);
  const getAllNews = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/newsandpress/get_all_news_press`)
      .then((res) => {
        setNewsAndPress(res.data.news_press);
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const [openMenu, setopenMenu] = useState(false);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <section>
      <CSSLink />
      <div class="page-6">
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
            <div class="home">
              <span class="material-icons">house</span>
              <p>Press News</p>
            </div>
            <div class="heading">
              <h1>News & Press</h1>
            </div>
            <div
              class="content"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                class=""
                style={{
                  display: "grid",
                  gridTemplateColumns: isNonMobile ? "repeat(2, 1fr)" : "1fr",
                  gap: "20px",
                }}
              >
                {newsAndPress.map((news, index) => {
                  return (
                    index % 2 === 0 && (
                      <>
                        <div
                          class=""
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "20px",
                          }}
                          onClick={() => {
                            navigate(`/news/${news.id}`);
                          }}
                        >
                          <h3
                            style={{
                              color: "white",
                              maxWidth: "60%",
                              textAlign: "center",
                              fontSize: "22px",
                            }}
                          >
                            {news.title}
                          </h3>
                          <img
                            src={news.image}
                            alt=""
                            height={"60%"}
                            width={"60%"}
                            style={{
                              // objectFit: "contain",
                              marginTop: "10%",
                              borderRadius: "20px",
                              boxShadow: "0px 0px 30px 4px #00267e",
                            }}
                          />
                        </div>
                        {newsAndPress?.length > index + 1 && (
                          <div
                            class=""
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: "20px",
                            }}
                            onClick={() =>
                              navigate(`/news/${newsAndPress[index + 1].id}`)
                            }
                          >
                            <h3
                              style={{
                                color: "white",
                                maxWidth: "60%",
                                textAlign: "center",
                                fontSize: "22px",
                              }}
                            >
                              {newsAndPress[index + 1]?.title}
                            </h3>
                            <img
                              src={newsAndPress[index + 1]?.image}
                              alt=""
                              height={"60%"}
                              width={"60%"}
                              style={{
                                // objectFit: "contain",
                                marginTop: "10%",
                                borderRadius: "20px",
                                boxShadow: "0px 0px 30px 4px #00267e",
                              }}
                            />
                          </div>
                        )}
                      </>
                    )
                  );
                })}
              </div>
              {/* <div class="rows">
                <div class="txt-img">
                  <h3>Prolog at Antwerp XL</h3>
                  <img src={require("../assets/images/antwerp.png")} alt="" />
                </div>
                <div class="txt-img">
                  <h3>Prolog at Antwerp XL</h3>
                  <img src={require("../assets/images/antwerp.png")} alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default News;
