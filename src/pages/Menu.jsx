import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "@mui/material";
import { prod, redirect, staging } from "../constants/config";

const Menu = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <section>
      <CSSLink />
      <div class="menu">
        <Header open={open} setOpen={setOpen} main={false} />
        <main>
          <div class="content">
            <div class="heading">
              <h1>Menu</h1>
            </div>
            <div
              class="row"
              style={{
                display: "grid",
                gridTemplateColumns: isNonMobile ? "repeat(2, 1fr)" : "1fr",
                gap: "20px",
                margin: "50px",
              }}
            >
              <a
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Home
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/about");
                  setOpen(false);
                }}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                About Us
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => window.open(redirect)}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Member Area
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/pro-advantage");
                  setOpen(false);
                }}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Pro-Advantages
              </a>
              <HashLink
                style={{ cursor: "pointer" }}
                smooth
                to={"/#partner"}
                onClick={() => setOpen(false)}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Our Partners
              </HashLink>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/news");
                  setOpen(false);
                }}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Member And Press News
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/gallery");
                  setOpen(false);
                }}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Gallery
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/testimonial");
                  setOpen(false);
                }}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Testimonials
              </a>
            </div>
            <div class="blog">
              <a
                href=""
                onClick={() => {
                  navigate("/blogs");
                  setOpen(false);
                }}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Blogs
              </a>
              <a
                href=""
                onClick={() => {
                  navigate("/contact-us");
                  setOpen(false);
                }}
              >
                <img src={require("../assets/images/pyramid.png")} alt="" />
                Contact Us
              </a>
            </div>
            <button id="back" onClick={() => setOpen(false)}>
              Back
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Menu;
