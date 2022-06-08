import { Slider, OurTeam } from "../../components";
import classes from "./style/landingStyles.module.css";

export const Landing = () => {
  return (
    <div className={`${classes.landing}`}>
      <Slider />
      <OurTeam />
    </div>
  );
};
