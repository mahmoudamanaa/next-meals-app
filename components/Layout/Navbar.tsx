import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";
import Logo from "../../images/meal_khuj_logo.png";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link href="/">
        <span className={classes.logo}>
          <Image src={Logo} alt="Logo" priority />
        </span>
      </Link>
      <ul className={classes.navLinks}>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/savedmeals">Saved Meals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
