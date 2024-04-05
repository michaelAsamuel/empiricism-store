import sky from "../../../assets/sky.jpg";
import "./gallery-item.styles.scss";

const GalleryItem = ({ course }) => {
  return (
    <div
      className="gallery-item-container"
      style={{
        backgroundImage: `url(${sky})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="gallery-item-body">
        <span className="gallery-item-text">
          <h2>{course.name}</h2>
        </span>
        <span>{course.price}</span>
      </div>
    </div>
  );
};

export default GalleryItem;
