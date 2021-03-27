import React from "react";
import "./Games.css";
import Footer from "../../UI/Footer/Footer";
import SectionText from "../../UI/Games/SectionText/SectionText";
import SectionImage from "../../UI/Games/SectionImage/SectionImage";
import Nav from "../../UI/Nav/Nav";
import takyan from "../../../Machine Test/takyan.jpg";
import hungryValley from "../../../Machine Test/HungryValley.png";
import RectangleOne from "../../../Machine Test/Rectangle-49.png";
import RectangleTwo from "../../../Machine Test/Rectangle-53.png";
import RectangleThree from "../../../Machine Test/Rectangle-54.png";
import RectangleFour from "../../../Machine Test/Rectangle-56.png";
import Ellipse from "../../../Machine Test/Ellipse.png";
import overlayBannerOne from "../../../Machine Test/Rectangle-50.png";
import overlayBannerTwo from "../../../Machine Test/Rectangle-51.png";

const Games = () => {
  return (
    <div className="Games">
      <Nav className="GamesNav" />
      <div className="nav-rectangle"></div>
      <div className="games-section-text-images">
        <SectionText
          className="SectionTextOne"
          title1ClassName="title-1-green"
          title1="Games"
          title2="Inside Subzi Labs"
          paragraph1="Ornare sit leo tempus magna dis ut phasellus pellentesque. Gravida elementum,
                vel sed in ut. Imperdiet amet varius integer pretium vitae, vivamus in scelerisque. 
                Eu egestas enim velit viverra ultrices volutpat aenean dolor."
          paragraph2="Semper libero tincidunt magna ullamcorper luctus. In egestas cras sed vitae, 
                dictum proin rhoncus ac. Et sagittis, ornare suscipit vestibulum aenean penatibus dictumst
                magna. Ridiculus neque orci adipiscing eget ornare elit ullamcorper. 
                Bibendum at sed ac convallis egestas. Turpis eget risus lorem erat a quisque commodo."
        />
        <div className="section-images">
          <img
            className="rectangle-4"
            src={RectangleFour}
            alt="RectangleImages"
          ></img>
          <img
            className="rectangle-1"
            src={RectangleOne}
            alt="RectangleImages"
          ></img>
          <img
            className="rectangle-2"
            src={RectangleTwo}
            alt="RectangleImages"
          ></img>
          <img
            className="rectangle-3"
            src={RectangleThree}
            alt="RectangleImages"
          ></img>
          <img className="ellipse" src={Ellipse} alt="RectangleImages"></img>
        </div>
      </div>
      <h3 className='section-image-1-title'>Our Games</h3>
      <SectionImage className="SectionImageOne" imgUrl={takyan} />
      <SectionImage
        className="overlay-banner1"
        width={480}
        height={550}
        imgUrl={overlayBannerTwo}
        alt="overlayBanner1"
      />

      <div className="games-section-text-images">
        <SectionText
          className="SectionTextTwo"
          title1="Arcade"
          title2="Takyan"
          paragraph1="Morbi massa diam suscipit tincidunt morbi blandit vulputate tincidunt cras. 
            Tempor, amet magna blandit hac."
          paragraph2="Suspendisse est et tortor varius vitae. Et, diam nunc iaculis non enim varius
             etiam praesent pharetra. Ac, duis at lorem rutrum eget imperdiet cras integer. 
             Odio commodo, etiam tincidunt diam aliquam neque. Nunc, mauris urna, dictumst proin mauris 
             gravida. Habitant cursus netus ultrices at et rutrum est."
        />
        <div className="section-images"></div>
      </div>

      <SectionImage className="SectionImageTwo" imgUrl={hungryValley} />
      <SectionImage
        className="overlay-banner2"
        width={480}
        height={550}
        imgUrl={overlayBannerOne}
        alt="overlayBanner2"
      />

      <div className="games-section-text-images">
        <div className="section-images"></div>
        <SectionText
          className="SectionTextThree"
          title1="Arcade"
          title2="Hunger Valley"
          paragraph1="Volutpat diam at cras consequat eu. Ac ultricies felis tristique suspendisse
             tortor, id tortor lobortis."
          paragraph2="Arcu mauris viverra aenean ac. Vivamus pretium sed sapien, consectetur 
             cras gravida ornare. Pellentesque leo quis amet consectetur et viverra non nisl 
             consectetur. Ut iaculis quis dignissim aliquam duis. In semper imperdiet quis etiam sit
              sapien accumsan, dictumst est."
        />
      </div>
      <Footer className="GamesFooter" />
    </div>
  );
};

export default Games;
