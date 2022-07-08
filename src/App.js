import { useState, useRef, useEffect } from "react";
import TilesContainer from "./components/TilesContainer";
import Clone from "./components/Clone";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = useState("");

  // const HEIGHT = 100;
  // const WIDTH = 100;
  // const SPEED = 0.8;

  // const [xVal, setXVal] = useState(0);

  // const requestRef = useRef();

  // const animate = () => {
  //   setXVal((curr) => (curr + 1 * SPEED) % WIDTH);
  //   requestRef.current = requestAnimationFrame(animate);
  // };

  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animate);
  //   return () => {
  //     cancelAnimationFrame(requestRef.current);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [xVal]);

  return (
    <div className="outer">
      {/* <div style={{ transform: `translateX(-${xVal}px)` }}> */}
      <TilesContainer setImgSrc={setImgSrc} />
      {/* </div> */}
      {imgSrc.length > 0 ? (
        <div className="imgWrap--large">
          <img className="img--large" src={imgSrc} alt="cute animal" />
        </div>
      ) : null}
      {/* <div>
        <Clone />
      </div> */}
    </div>
  );
}

export default App;
