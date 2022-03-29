import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container ">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
