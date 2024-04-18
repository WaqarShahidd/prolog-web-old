import React from "react";
import { conference } from "../assets/data";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import { Drawer, useMediaQuery } from "@mui/material";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import CollectionsIcon from "@mui/icons-material/Collections";

const Gal = () => {
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);

  const [openMenu, setopenMenu] = useState(false);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const largeDisplay = useMediaQuery("(min-width:1000px)");

  return (
    <section>
      <div class="page-11">
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
            <div class="heading">
              <h1 style={{ fontSize: largeDisplay ? "40px" : "32px" }}>
                Gallery
              </h1>
              {/* <img src={require("../assets/images/image-stack.png")} alt="" /> */}
            </div>
            <div class="content">
              <div
                class="row-1"
                style={{
                  display: "grid",
                  gridTemplateColumns: isNonMobile ? "repeat(3, 1fr)" : "1fr",
                }}
              >
                {conference?.map((gal, index) => {
                  return (
                    <div
                      class="folder"
                      key={gal.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/conference-gallery/${gal?.id}`)}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* <img src={require("../assets/images/file.png")} sty /> */}
                        <CollectionsIcon
                          style={{ fontSize: "35px", color: "white" }}
                        />
                        <p>
                          <a
                            style={{
                              color: "white",
                              textAlign: "center",
                              textDecorationLine: "underline",
                            }}
                          >
                            {gal?.title}
                          </a>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Gal;
