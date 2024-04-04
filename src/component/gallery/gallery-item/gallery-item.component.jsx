import sky from "../../../assets/sky.jpeg";
import "./gallery-item.styles.scss";

const GalleryItem = (galleryItem) => {
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
          <h2>{galleryItem.galleryItem.name}</h2>
        </span>
        <span>{galleryItem.galleryItem.price}</span>
      </div>
    </div>
  );
};

export default GalleryItem;
