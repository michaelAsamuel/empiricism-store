import "./gallery.styles.scss";
import Courses from "../../temp-seed/shop-data.json";
import GalleryItem from "./gallery-item/gallery-item.component";

const Gallery = () => {
  return (
    <div>
      <div>
        <h1> Courses</h1>
      </div>
      <div className="galleries-container">
        {Courses &&
          Courses.map((course) => {
            //console.log(course.id);
            return <GalleryItem galleryItem={course} key={course.id} />;
          })}
      </div>
    </div>
  );
};

export default Gallery;
