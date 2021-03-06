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
        {/* 1st row of pets, pass in your image array srcs, and how fast you want it to scroll */}
        <ScrollingTiles
          setImgSrc={setImgSrc}
          petImgArr={PUPPIES}
          baseSpeed={isPaused ? 0 : 2.5}
        />
        {/* 2nd row of pets */}
        <ScrollingTiles
          setImgSrc={setImgSrc}
          petImgArr={KITTENS}
          baseSpeed={isPaused ? 0 : 3}
        />
      </div>

      {/* larger image displayed when user clicks a scrolling tile */}
      {imgSrc.length > 0 ? (
        <div className="imgWrap--large">
          <img className="img--large" src={imgSrc} alt="cute animal" />
        </div>
      ) : null}
    </div>
  );
}

export default App;
