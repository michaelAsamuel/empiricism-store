import { Routes, Route } from "react-router-dom";
import Gallery from "./component/gallery/gallery.component";
import Home from "./routes/Home.component.jsx";
import Navigation from "./routes/navigation.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="authen" element={<Gallery />} />
        <Route path="cart" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
