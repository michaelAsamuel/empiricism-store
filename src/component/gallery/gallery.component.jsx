import "./gallery.styles.scss";
import { GalleryContext } from "../../context/gallery-context";
import GalleryItem from "./gallery-item/gallery-item.component";
import { useContext } from "react";

const Gallery = () => {
  const { courses } = useContext(GalleryContext);
  console.log(courses);
  return (
    <div className="galleries-title">
      <div className="galleries-title">
        <h2> Courses</h2>
      </div>
      <div className="galleries-container">
        {courses &&
          courses.map((course) => {
            return <GalleryItem course={course} key={course.id} />;
          })}
      </div>
    </div>
  );
};

export default Gallery;
