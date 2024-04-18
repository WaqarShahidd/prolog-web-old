import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useNavigate } from "react-router-dom";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Header from "../components/Header";
import { Drawer } from "@mui/material";
import Menu from "./Menu";

const Test = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const navigate = useNavigate();
  const [openMenu, setopenMenu] = useState(false);
  return <div className="slide-container"></div>;
};

export default Test;
