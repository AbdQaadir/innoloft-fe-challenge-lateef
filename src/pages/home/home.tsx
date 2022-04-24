import { Pane, Paragraph, Heading, majorScale } from "evergreen-ui";
import { NavLink } from "react-router-dom";
import Button from "../../components/button";

function Home() {
  return (
    <Pane
      height="100%"
      display="flex"
      justifyContent="center"
      marginY={majorScale(8)}
    >
      <Pane textAlign="center">
        <Heading fontSize="1.5em" fontWeight={500}>
          Innoloft Product homePage.
        </Heading>
        <Paragraph fontSize="1.2em" marginY={majorScale(2)}>
          <br /> You can search for a product using the product id.
        </Paragraph>
        <NavLink to="/product">
          <Button look="primary-filled">Search now.</Button>
        </NavLink>{" "}
      </Pane>
    </Pane>
  );
}

export default Home;
