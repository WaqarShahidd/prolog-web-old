import { Backdrop, CircularProgress, Drawer, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import CSSLink from "../components/CSSLink";
import Header from "../components/Header";
import { BASE_URL } from "../constants/config";
import Menu from "./Menu";
import MuiAlert from "@mui/material/Alert";
import { useForm } from "react-hook-form";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);

  const clear = () => {
    setName("");
    setCompanyName("");
    setEmail("");
    setContactNumber("");
    setReason("");
    setMessage("");
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const OnSubmit = () => {
    setloading(true);
    axios
      .post(`${BASE_URL}/api/contactus/send_contactus`, {
        name: name,
        companyName: companyName,
        email: email,
        contactNumber: contactNumber,
        reason: reason,
        message: message,
      })
      .then((res) => {
        setloading(false);
        setOpen(true);
        clear();
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        setOpen(false);
      });
  };

  const [openMenu, setopenMenu] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <section>
      <CSSLink />
      <div class="page-13">
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

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Request sent!
          </Alert>
        </Snackbar>

        <main>
          <div class="contents">
            <h1>Contact Us</h1>
            <div class="text-input">
              <input
                type="text"
                placeholder="First Name"
                name="name"
                {...register("name", { required: true })}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="text-input">
              <input
                type="text"
                placeholder="Company"
                name="company"
                {...register("company", { required: true })}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div class="text-input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="text-input">
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                {...register("phone", { required: true })}
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div class="text-input">
              <input
                type="text"
                placeholder="Reason"
                name="reason"
                {...register("reason", { required: true })}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <div class="text-input">
              <input
                type="text"
                placeholder="Message"
                name="message"
                {...register("message", { required: true })}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {/* <div class="text-input" style={{ marginTop: "2rem" }}></div> */}
            <hr />
            <div class="privacy">
              <p style={{ textAlign: "center" }}>
                By clicking Submit, you acknowledge Prolognet Terms <br />
                of Service & Privacy Policy.
              </p>
            </div>

            <button
              style={{
                display: "inline-block",
                position: "relative",
                padding: "0",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={handleSubmit(OnSubmit)}
            >
              <img
                src={require("../assets/images/arrow-down.png")}
                style={{
                  display: "block",
                  width: "500px",
                  height: "150px",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "35%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Submit
              </span>
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
