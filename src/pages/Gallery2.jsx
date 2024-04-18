import { Backdrop, Checkbox, Drawer, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { BASE_URL } from "../constants/config";
import Menu from "./Menu";
import Viewer from "react-viewer";
import DownloadIcon from "@mui/icons-material/Download";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Gallery2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [gallery, setGallery] = useState([]);
  const GalleryImages = () => {
    axios
      .get(`${BASE_URL}/api/gallery/get_all_gallery`)
      .then((res) => setGallery(res.data.albums))
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   GalleryImages();
  // }, []);

  const secret = "6f6ebbcf5833eef9";
  const apiKey = "63efaf4cec8ea9df12d896f45de7e5fd";
  const userId = "198996610@N05";
  const albumId = parseInt(id);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${id}&user_id=${userId}&format=json&nojsoncallback=1`;
    setloading(true);
    axios
      .get(flickrUrl)
      .then((response) => {
        const data = response.data;

        const photosData = data.photoset.photo.map((photo) => ({
          id: photo.id,
          title: photo.title,
          imageUrl: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`,
        }));

        setPhotos(photosData);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching Flickr data:", error);
        setloading(false);
      });
  }, []);

  const [openMenu, setopenMenu] = useState(false);

  const largeDisplay = useMediaQuery("(min-width:1000px)");

  const headingResponsive = useMediaQuery("(min-width:480px)");

  const [visible, setVisible] = React.useState(false);
  const [index, setIndex] = useState(-1);

  const [images, setImages] = useState([]);

  const imagesPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last image on the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  // Get the images for the current page
  const currentImages = gallery
    ?.filter((item) => item.id === parseInt(id))
    ?.map((item) => item.pictures)
    .flat()
    .slice(indexOfFirstImage, indexOfLastImage);

  const allImages = gallery
    .map((item) => item.id === parseInt(id) && item.pictures)
    .flat();

  useEffect(() => {
    let images = [];
    images = gallery
      ?.filter((item) => item.id === parseInt(id))
      .map((item) => {
        return {
          src: item.pictures.map((picture) => ({
            src: picture,
          })),
        };
      });

    setImages(images);
  }, [gallery]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [imageSelection, setImageSelection] = useState(false);

  const [loading, setloading] = useState(false);

  const handleImageToggle = (imageUrl) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter((url) => url !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  const forceDownload = (blob, filename) => {
    var a = document.createElement("a");
    a.download = filename;
    a.href = blob;

    document.body.appendChild(a);
    a.click();
    a.remove();
    setloading(false);
  };

  const downloadResource = (url, filename) => {
    if (!filename) filename = url.split("\\").pop().split("/").pop();
    const httpUrl = url.replace(/^https:/, "http:");
    setloading(true);
    fetch(httpUrl, {
      headers: new Headers({
        Origin: window.location.origin,
      }),
      mode: "cors",
    })
      .then((response) => response.blob())
      .then((blob) => {
        let blobUrl = window.URL.createObjectURL(blob);

        forceDownload(blobUrl, filename);
      })
      .catch((e) => {
        console.error(e);
        setloading(false);
      });
  };

  const handleDownloadSelectedImages = () => {
    selectedImages.forEach((imageUrl) => {
      const filename = imageUrl.split("/").pop(); // Extract filename from URL
      downloadResource(imageUrl, filename);
    });
  };

  // const handleDownload = async (imageUrl) => {
  //   var element = document.createElement("a");
  //   var file = new Blob([imageUrl], { type: "image/*" });
  //   element.href = URL.createObjectURL(file);
  //   element.download = `${imageUrl}`;
  //   element.click();
  // };

  return (
    <section>
      <CSSLink />
      <div class="page-12">
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
              <p onClick={() => navigate("/")}>Gallery</p>
            </div>
            {/* <div class="heading">
              {gallery.map((item, ind) => {
                return (
                  item.id === parseInt(id) && (
                    <h1
                      key={ind}
                      style={{
                        fontSize: largeDisplay ? "40px" : "30px",
                        maxWidth: headingResponsive ? "40%" : "",
                        textAlign: headingResponsive ? "initial" : "center",
                      }}
                    >
                      {item?.name}
                    </h1>
                  )
                );
              })}
            </div>
            <div class="content" style={{ flexDirection: "column" }}>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "100px",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    marginRight: "30px",
                    height: "50px",
                    width: "100px",
                    backgroundImage:
                      "radial-gradient( at right, #182977 1%, #182977 15%, #0f1637 90% )",
                    boxShadow: "0px 3px 25px 1px #0b2474",
                    borderRadius: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setImageSelection(!imageSelection);
                    setSelectedImages([]);
                  }}
                >
                  <p style={{ color: "white", marginRight: "10px" }}>Select</p>
                  <CheckBoxIcon style={{ color: "white" }} />
                </div>
                <div
                  style={{
                    marginRight: "30px",
                    height: "50px",
                    width: "50px",
                    backgroundImage:
                      "radial-gradient( at right, #182977 1%, #182977 15%, #0f1637 90% )",
                    boxShadow: "0px 3px 25px 1px #0b2474",
                    borderRadius: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor:
                      selectedImages.length === 0 ? "not-allowed" : "pointer",
                  }}
                  onClick={() =>
                    selectedImages.length !== 0 &&
                    handleDownloadSelectedImages()
                  }
                >
                  <DownloadIcon style={{ color: "white" }} />
                </div>
              </div>
              {gallery.map((pic, index) => {
                return (
                  pic.id === parseInt(id) && (
                    <div
                      key={index}
                      class="row-1"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                      }}
                    >
                      {currentImages.map((m, ind) => {
                        return (
                          m !== false && (
                            <div
                              class="card"
                              key={ind}
                              style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                onClick={() => {
                                  if (!imageSelection) {
                                    setIndex(ind);
                                    setVisible(true);
                                  } else {
                                    handleImageToggle(m);
                                  }
                                }}
                                src={m}
                                alt=""
                                style={{
                                  borderRadius: "32px",
                                  objectFit: "contain",
                                  width: "80%",
                                }}
                              />
                              {imageSelection && (
                                <Checkbox
                                  checked={selectedImages.includes(m)}
                                  onChange={() => handleImageToggle(m)}
                                  sx={{
                                    "& .MuiSvgIcon-root": { fontSize: 28 },
                                  }}
                                  style={{
                                    position: "absolute",
                                    top: "10%",
                                    left: "20%",
                                    transform: "translate(-50%, -50%)", // Center the checkbox
                                    zIndex: 99,
                                    width: "20px",
                                    height: "20px",
                                  }}
                                />
                              )}
                              {!imageSelection && (
                                <FileDownloadIcon
                                  onClick={() => downloadResource(m, m)}
                                  style={{
                                    position: "absolute",
                                    top: "10%",
                                    right: "15%",
                                    transform: "translate(-50%, -50%)", // Center the checkbox
                                    zIndex: 99,
                                    width: "25px",
                                    height: "25px",
                                    borderRadius: "25%",
                                    color: "white",
                                    backgroundColor: "#6a6b8d",
                                    cursor: "pointer",
                                  }}
                                />
                              )}
                            </div>
                          )
                        );
                      })}
                    </div>
                  )
                );
              })}
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "75px",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  style={{
                    height: "40px",
                    width: "50px",
                    borderRadius: "10px",
                    backgroundColor: "#182977",
                    color: "white",
                  }}
                >
                  Prev
                </button>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                >
                  {currentPage}
                </p>
                <button
                  disabled={indexOfLastImage >= allImages.length}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  style={{
                    height: "40px",
                    width: "50px",
                    borderRadius: "10px",
                    backgroundColor: "#182977",
                    color: "white",
                  }}
                >
                  Next
                </button>
              </div>
              <Viewer
                activeIndex={index}
                visible={visible}
                onClose={() => {
                  setVisible(false);
                }}
                images={images[0]?.src}
                drag={false}
              />
            </div> */}
            {/* <a
              data-flickr-embed="true"
              href="https://www.flickr.com/photos/198996610@N05/53146596219/in/album-72177720310780652/"
              title="Prague_Prolog__VOT9008"
            >
              <img
                src="https://live.staticflickr.com/65535/53146596219_01701fac35_z.jpg"
                width="640"
                height="427"
                alt="Prague_Prolog__VOT9008"
              />
            </a> */}

            <div class="content" style={{ flexDirection: "column" }}>
              <div
                class="row-1"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px", // Add some gap between images
                }}
              >
                {photos.map((photo, ind) => (
                  <div
                    class="card"
                    key={ind}
                    style={{
                      height: "270px",
                      width: "250px",
                    }}
                  >
                    <img
                      key={photo.id}
                      src={photo.imageUrl}
                      alt={photo.title}
                      style={{
                        width: "100%", // Set the width to 100% to make all images the same size
                        height: "100%", // Set the height to 100% to maintain aspect ratio
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        window.open(
                          `https://www.flickr.com/photos/198996610@N05/${photo.id}/in/album-72177720310780652/`,
                          "_blank"
                        );
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Gallery2;
