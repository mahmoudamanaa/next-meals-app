import classes from "./HeroSection.module.css";
import Text from "../text/Text";
import Image from "next/image";
import HeroImage from "../../images/hero_img.jpg";
import ButtonWithLink from "../button/Button";

const HeroSection = () => {
  return (
    <section className={classes["hero__section"]}>
      <div className={classes["hero__container"]}>
        <div className={classes["hero__info"]}>
          <h1 className={classes["hero__title"]}>
            Find the perfect <span>meal recipe</span> for you
          </h1>
          <Text myClassNames="">a listing website of meal recipe</Text>
          <div className={classes["hero__buttons"]}>
            <ButtonWithLink link="/meals" variant="primary">
              Explore Meals
            </ButtonWithLink>
            <ButtonWithLink link="/savedmeals" variant="secondary">
              Saved Meals
            </ButtonWithLink>
          </div>
        </div>
        <div className={classes["hero__img"]}>
          <Image src={HeroImage} alt="Hero" priority />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
