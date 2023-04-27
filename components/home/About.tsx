import Text from "../text/Text";
import Title from "../text/Title";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <Title variant="primary" myClassNames={classes.title}>
        What is Meal-khuj
      </Title>
      <Text myClassNames="">
        Est nam alias quo repellendus voluptas. Doloremque eveniet in
        perferendis quia natus. Maiores enim impedit aspernatur sit at labore
        odio. Hic et sit sunt ut nobis et cumque autem. Autem blanditiis et in
        dolorem. Recusandae et debitis molestias.
        <br />
        <br />
        Est nam alias quo repellendus voluptas. Doloremque eveniet in
        perferendis quia natus. Maiores enim impedit aspernatur sit at labore
        odio. Hic et sit sunt ut nobis et cumque autem. Autem blanditiis et in
        dolorem. Recusandae et debitis molestias.…
      </Text>
    </div>
  );
};

export default About;
