import { Backdrop, Drawer, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { BASE_URL } from "../constants/config";
import Menu from "./Menu";
import { secondConference } from "../assets/data";

const Gallery = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [gallery, setGallery] = useState([]);
  const [loading, setloading] = useState(false);

  const GalleryImages = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/gallery/get_all_gallery`)
      .then((res) => {
        setGallery(res.data.albums);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  };

  useEffect(() => {
    GalleryImages();
  }, []);

  const [albums, setAlbums] = useState([]);
  const apiKey = "63efaf4cec8ea9df12d896f45de7e5fd";
  const userId = "198996610@N05";

  useEffect(() => {
    const albumUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`;

    axios
      .get(albumUrl)
      .then((response) => {
        const data = response.data;
        const albumsData = data.photosets.photoset;
        setAlbums(albumsData);
        console.log(albumsData);
      })
      .catch((error) => {
        console.error("Error fetching Flickr album data:", error);
      });
  }, []);

  const [openMenu, setopenMenu] = useState(false);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const largeDisplay = useMediaQuery("(min-width:1000px)");

  return (
    <section>
      <CSSLink />
      <div class="page-11">
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
                {parseInt(id) === 1 ? (
                  <>
                    {gallery?.map((gal, index) => {
                      return (
                        index <= 4 && (
                          <div
                            class="card"
                            key={gal.id}
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => navigate(`/all-gallery/${gal?.id}`)}
                          >
                            <h1>{gal?.name}</h1>
                            <img
                              src={gal?.pictures && gal?.pictures[0]}
                              alt=""
                              height={"375"}
                              width={"445"}
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                        )
                      );
                    })}
                  </>
                ) : (
                  <>
                    {albums?.map((album, index) => {
                      return (
                        <div
                          class="card"
                          key={album.id}
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            navigate(`/all-gallery/${album?.id}`);
                            console.log(album?.id);
                          }}
                        >
                          <h1>{album.title._content}</h1>
                          <img
                            src={`https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}_q.jpg`}
                            alt={album.title._content}
                            height={"250"}
                            width={"300"}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
              {/* <div class="row-2">
                <div class="card">
                  <h1>1st Pro Networking Conference / Welcome Cocktail</h1>
                  <img src={require("../assets/images/stack-4.png")} alt="" />
                </div>
                <div class="card">
                  <h1>1st Pro Networking Conference / Gala Dinner</h1>
                  <img src={require("../assets/images/stack-5.png")} alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Gallery;
