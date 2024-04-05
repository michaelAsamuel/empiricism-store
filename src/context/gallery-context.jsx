import { createContext, useState, useEffect } from "react";
import Courses from "../temp-seed/shop-data.json";

export const GalleryContext = createContext({
  courses: [],
});

export const GalleryProvider = ({ children }) => {
  const [courses, setCourses] = useState({});

  useEffect(() => {
    const getCourses = async () => {
      const courses = await Courses;
      setCourses(courses);
    };
    getCourses();
  });
  // end of useEffect

  const value = { courses };
  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};
