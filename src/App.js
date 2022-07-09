import { useState } from "react";
import ScrollingTiles from "./components/ScrollingTiles";
import "./App.css";

const PUPPIES = [
  "https://frontendeval.com/images/puppy-1.jpeg",
  "https://frontendeval.com/images/puppy-2.jpeg",
  "https://frontendeval.com/images/puppy-3.jpeg",
  "https://frontendeval.com/images/puppy-4.jpeg",
  "https://frontendeval.com/images/puppy-5.jpeg",
  "https://frontendeval.com/images/puppy-6.jpeg",
  "https://frontendeval.com/images/puppy-7.jpeg",
  "https://frontendeval.com/images/puppy-8.jpeg",
  "https://frontendeval.com/images/puppy-9.jpeg",
  "https://frontendeval.com/images/puppy-10.jpeg",
  "https://frontendeval.com/images/puppy-11.jpeg",
  "https://frontendeval.com/images/puppy-12.jpeg",
];

const KITTENS = [
  "https://frontendeval.com/images/kitten-1.jpeg",
  "https://frontendeval.com/images/kitten-2.jpeg",
  "https://frontendeval.com/images/kitten-3.jpeg",
  "https://frontendeval.com/images/kitten-4.jpeg",
  "https://frontendeval.com/images/kitten-5.jpeg",
  "https://frontendeval.com/images/kitten-6.jpeg",
  "https://frontendeval.com/images/kitten-7.jpeg",
  "https://frontendeval.com/images/kitten-8.jpeg",
  "https://frontendeval.com/images/kitten-9.jpeg",
  "https://frontendeval.com/images/kitten-10.jpeg",
  "https://frontendeval.com/images/kitten-11.jpeg",
  "https://frontendeval.com/images/kitten-12.jpeg",
];

function App() {
  const [imgSrc, setImgSrc] = useState("");
  const [baseSpeed, setBaseSpeed] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const onClick = () => {
    setIsPaused(!isPaused);
  };
  return (
    <div className="outer">
      <div>
        <button onClick={onClick} className="btn">
          {isPaused ? `play` : `paws`}
        </button>
        <ScrollingTiles
          setImgSrc={setImgSrc}
          petImgArr={PUPPIES}
          baseSpeed={isPaused ? 0 : baseSpeed}
        />
        <ScrollingTiles
          setImgSrc={setImgSrc}
          petImgArr={KITTENS}
          baseSpeed={isPaused ? 0 : baseSpeed + 1}
        />
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
