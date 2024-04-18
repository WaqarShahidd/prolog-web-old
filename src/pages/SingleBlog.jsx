import { Drawer } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { BASE_URL } from "../constants/config";
import Menu from "./Menu";

const SingleBlog = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [news, setNews] = useState([]);
  const GetSingleNews = () => {
    console.log(id);
    axios
      .get(`${BASE_URL}/api/newsandpress/get_one_news_press?id=${id}`)
      .then((res) => setNews(res.data.resData))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetSingleNews();
  }, []);

  const [openMenu, setopenMenu] = useState(false);

  function ensureHttps(link) {
    // Check if the link starts with "http://" or "https://"
    if (link.startsWith("http://") || link.startsWith("https://")) {
      // Link already has "http://" or "https://", do nothing
      return link;
    } else {
      // Link doesn't have "http://" or "https://", add "https://"
      return "https://" + link;
    }
  }

  return (
    <section>
      <CSSLink />
      <div class="page-7">
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
            <div class="home">
              <span class="material-icons">house</span>
              <p>Press News</p>
              <p>Prolog at Antwerp XL</p>
            </div>

            <div class="content">
              <div class="img-txt">
                <img src={news?.image} alt="" />
                <div class="txt">
                  <h1>{news?.title}</h1>
                  <h5>{news?.description}</h5>
                </div>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {news?.fb_Link && (
                  <img
                    src={require("../assets/images/facebook.png")}
                    style={{
                      marginRight: "7.5px",
                      height: "25px",
                      width: "25px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(ensureHttps(news?.fb_Link), "_blank")
                    }
                  />
                )}
                {news?.insta_Link && (
                  <img
                    src={require("../assets/images/instagram.png")}
                    style={{
                      marginRight: "7.5px",
                      height: "25px",
                      width: "25px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(ensureHttps(news?.insta_Link), "_blank")
                    }
                  />
                )}
                {news?.linkedin_Link && (
                  <img
                    src={require("../assets/images/linkedin.png")}
                    style={{
                      marginRight: "7.5px",
                      height: "25px",
                      width: "25px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(ensureHttps(news?.linkedin_Link), "_blank")
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SingleBlog;
