import { Outlet } from "react-router-dom";
import Gallery from "../component/gallery/gallery.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Outlet />
      <Gallery />
    </div>
  );
};
export default Home;
