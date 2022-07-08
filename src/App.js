import { useState } from "react";
import TilesContainer from "./components/TilesContainer";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = useState("");

  return (
    <div className="outer">
      <TilesContainer setImgSrc={setImgSrc} />
      {imgSrc.length > 0 ? (
        <div className="imgWrap--large">
          <img className="img--large" src={imgSrc} alt="cute animal" />
        </div>
      ) : null}
    </div>
  );
}

export default App;
