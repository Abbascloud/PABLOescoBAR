import classes from "./styles/sliderStyles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Slider = () => {
  return (
    <div className={`${classes.carusel}`}>
      <Carousel
        showThumbs="false"
        showIndicators="false"
        showStatus="false"
        infiniteLoop="true"
        autoPlay="true"
        showArrows="false"
      >
        <div className={`${classes.carusel__imgWrapper}`}>
          <img
            className={`${classes.carusel__img}`}
            src="https://picsum.photos/1240/400"
            alt="img"
          />
        </div>
        <div>
          <img
            className={`${classes.carusel__img}`}
            src="https://picsum.photos/1240/401"
            alt="img"
          />
        </div>
        <div>
          <img
            className={`${classes.carusel__img}`}
            src="https://picsum.photos/1240/402"
            alt="img"
          />
        </div>
      </Carousel>
    </div>
  );
};
