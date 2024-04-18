import React, { useEffect, useRef } from "react";

const GoogleTranslate = () => {
  const translateElementRef = useRef(null); // Reference to the TranslateElement

  const googleTranslateElementInit = () => {
    if (translateElementRef.current === null) {
      // Create a new TranslateElement only if it doesn't exist
      translateElementRef.current =
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
    }
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ flexWrap: "wrap", display: "flex", justifyContent: "flex-end" }}
    >
      {/* This is where the Google Translate button will be rendered */}
    </div>
  );
};

export default GoogleTranslate;
