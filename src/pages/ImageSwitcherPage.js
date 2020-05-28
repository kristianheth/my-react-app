import React from "react";
import ImageSwitcher from "../components/Content/ImageSwitcher/ImageSwitcher";

const imageArray = [
  {
    imgSrc: "./img/120_HP5_90mm_Medienhafen.jpg",
    altText: "Duesseldorf Medienhafen",
  },
  {
    imgSrc: "./img/120_HP5_90mm_Balkon.jpg",
    altText: "Decayed balcony",
  },
  {
    imgSrc: "./img/120_HP5_90mm_Citroen.jpg",
    altText: "Vintage Citroen",
  },
  {
    imgSrc: "./img/120_HP5_90mm_HyattShooting.jpg",
    altText: "Modelshooting outside of Hyatt hotel in Duesseldorf",
  },
  {
    imgSrc: "./img/120_HP5_90mm_Schwebebahn.jpg",
    altText: "Wuppertal Schwebebahn in black and white",
  },
  {
    imgSrc: "./img/120_Portra400_90mm_Blumen.jpg",
    altText: "Colourful wild flowers",
  },
  {
    imgSrc: "./img/120_Portra400_90mm_GartenTor.jpg",
    altText: "Garden gate with plants",
  },
  {
    imgSrc: "./img/120_Portra400_90mm_Schwebebahn.jpg",
    altText: "Wuppertal Schwebebahn in colour",
  },
  {
    imgSrc: "./img/120_Portra400_90mm_Spielplatz.jpg",
    altText: "Empty playground",
  },
];

const ImageSwitcherPage = () => (
  <div className="main-section__content main-section__content__imageswitcher">
    <ImageSwitcher>
      {imageArray.map(({ imgSrc, altText }, index) => {
        return <img src={imgSrc} alt={altText} key={index} />;
      })}
    </ImageSwitcher>
  </div>
);

export default ImageSwitcherPage;
