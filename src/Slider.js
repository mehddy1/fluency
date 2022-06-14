import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.css";

const fadeImages = [
  "https://azuracom.com/uploads/news/creation-site-internet-paramoteur.jpeg",
  "https://images.ctfassets.net/ipg00484jdjj/6O0Jwu2gOog7CJjtDlICbF/f02d752e8cc73b038df49561b56b3a3a/V7_1920x1080__1_.png",
  "https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques/culture/renforcer-le-dynamisme-de-la-creation/2771879-1-fre-FR/renforcer-le-dynamisme-de-la-creation_i1920.jpg"
];

export default function Slider() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <p>Agence à Oran<br/>
          Nous aimons travailler avec les jeunes entreprises et les entrepreneurs<br/> pour les aider à créer une voix et une vision impressionnantes. <br/>Notre équipe compétente s'efforce de résoudre les grands problèmes complexes<br/> qui aident les marques établies à percer dans de nouveaux secteurs.</p>
          <img src={fadeImages[0]} />
          </div>
        <div className="each-fade">
          <p>Agence à Oran<br/>
          Nous aimons travailler avec les jeunes entreprises et les entrepreneurs<br/> pour les aider à créer une voix et une vision impressionnantes. <br/>Notre équipe compétente s'efforce de résoudre les grands problèmes complexes<br/> qui aident les marques établies à percer dans de nouveaux secteurs.</p>
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <p>Agence à Oran<br/>
          Nous aimons travailler avec les jeunes entreprises et les entrepreneurs<br/> pour les aider à créer une voix et une vision impressionnantes. <br/>Notre équipe compétente s'efforce de résoudre les grands problèmes complexes<br/> qui aident les marques établies à percer dans de nouveaux secteurs.</p>
          <img src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
  );
}
