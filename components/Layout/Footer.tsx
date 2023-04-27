import classes from "./Footer.module.css";
import Logo from "../../images/meal_khuj_logo_primary.png";
import Image from "next/image";
import Text from "../text/Text";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Image src={Logo} alt="Logo" priority className={classes.image} />
      <Text myClassNames="">Find the perfect meal recipe for you</Text>
      <Text myClassNames={classes.copyright}>
        © “My-Meals” 2022 All right reserved.
      </Text>
    </footer>
  );
};

export default Footer;
