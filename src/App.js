import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import TilesContainer from "./components/TilesContainer";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = useState("");
  const [xVal, setXVal] = useState(0);

  const requestRef = useRef();

  const animate = (time) => {
    setXVal((prev) => prev + 1);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xVal]);

  return (
    <div className="outer">
      <div style={{ transform: `translateX(-${xVal}px)` }}>
        <TilesContainer setImgSrc={setImgSrc} />
      </div>
      {imgSrc.length > 0 ? (
        <div className="imgWrap--large">
          <img className="img--large" src={imgSrc} alt="cute animal" />
        </div>
      ) : null}
    </div>
  );
}

export default App;
