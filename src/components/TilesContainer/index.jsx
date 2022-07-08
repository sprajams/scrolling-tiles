import { useState, useRef, useEffect } from "react";
import Tile from "../Tile";
import styles from "./styles.module.scss";
const Puppies = [
  "https://frontendeval.com/images/puppy-1.jpeg",
  "https://frontendeval.com/images/puppy-2.jpeg",
  "https://frontendeval.com/images/puppy-3.jpeg",
  "https://frontendeval.com/images/puppy-4.jpeg",
  "https://frontendeval.com/images/puppy-5.jpeg",
  // "https://frontendeval.com/images/puppy-6.jpeg",
  // "https://frontendeval.com/images/puppy-7.jpeg",
  // "https://frontendeval.com/images/puppy-8.jpeg",
  // "https://frontendeval.com/images/puppy-9.jpeg",
  // "https://frontendeval.com/images/puppy-10.jpeg",
  // "https://frontendeval.com/images/puppy-11.jpeg",
  // "https://frontendeval.com/images/puppy-12.jpeg",
];

const Kittens = [
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

function TilesContainer({ setImgSrc }) {
  //  clicking on an image tile will store the src and display it in App.js
  const onClick = (e) => {
    setImgSrc(e.target.src);
  };

  const [xVal, setXVal] = useState(0);
  const requestRef = useRef(null);
  const widthRef = useRef(null);

  const SPEED = 5;
  const [listWidth, setListWidth] = useState(0);
  useEffect(() => {
    setListWidth(widthRef.current ? widthRef.current.offsetWidth : 0);
  }, []);

  // const WIDTH = console.log(WIDTH);
  const animate = () => {
    // setXVal((curr) => (listWidth > 0 ? (curr + 1 * SPEED) % listWidth : 0));
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
    <div>
      <div className={styles.animalWrap}>
        <ul
          className={styles.animalList}
          ref={widthRef}
          style={{ transform: `translate(${-xVal}px)` }}
        >
          {Puppies.map((x, i) => {
            return (
              <li key={"dog-" + i} onClick={onClick}>
                <Tile src={x} />
              </li>
            );
          })}
        </ul>
        <ul
          className={styles.animalList}
          style={{
            transform: `translate(${-xVal + listWidth}px)`,
          }}
        >
          {Puppies.map((x, i) => {
            return (
              <li key={"dog-" + i} onClick={onClick}>
                <Tile src={x} />
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div>
        <ul className={styles.animalList}>
          {Kittens.map((x, i) => {
            return (
              <li key={`kitten-` + i} onClick={onClick}>
                <Tile src={x} />
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
}
export default TilesContainer;
