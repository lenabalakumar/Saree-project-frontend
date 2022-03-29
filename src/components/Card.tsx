import "./Card.css";
import CardBottom from "./CardBottom";
import CardHeader from "./CardHeader";
import CardMiddle from "./CardMiddle";

const Card = () => {
  return (
    <div className="Card-container">
      <CardHeader />
      <CardMiddle />
      <CardBottom />
    </div>
  );
};

export default Card;
