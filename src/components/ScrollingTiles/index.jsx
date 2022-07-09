import { useCallback } from "react";
import { useState, useRef, useEffect } from "react";
import Tile from "../Tile";
import styles from "./styles.module.scss";

function ScrollingTiles({ setImgSrc, petImgArr, baseSpeed }) {
  //  clicking on an image tile will store the src and display it in App.js
  const onClick = (e) => {
    setImgSrc(e.target.src);
  };

  const [xVal, setXVal] = useState(0);
  const requestRef = useRef(null);
  const widthRef = useRef(null);

  const [listWidth, setListWidth] = useState(0);

  //setXVal will only change if listWidth or baseSpeed is changed
  const animate = useCallback(() => {
    // adjust xVal every animation frame, % listWidth helps reset xVal back to 0
    setXVal((curr) => (listWidth > 0 ? (curr + 1 * baseSpeed) % listWidth : 0));
    requestRef.current = requestAnimationFrame(animate);
  }, [listWidth, baseSpeed]);

  useEffect(() => {
    // get width of 1 list of animals
    const width = widthRef.current ? widthRef.current.offsetWidth : 0;
    setListWidth(width);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate]);

  return (
    <div>
      <div className={styles.animalWrap}>
        <ul
          className={styles.animalList}
          ref={widthRef}
          style={{
            transform: `translate(${-xVal}px)`,
          }}
        >
          {petImgArr.map((x, i) => {
            return (
              <li
                key={"dog-" + i}
                onClick={onClick}
                className={styles.animalListItem}
              >
                <Tile src={x} />
              </li>
            );
          })}
        </ul>
        <ul
          className={styles.animalList}
          // +100% adds on the width of its parent, this keeps the 2nd ul right behind 1st ul
          style={{
            transform: `translate(calc(${-xVal}px + 100% + 10px))`,
          }}
        >
          {petImgArr.map((x, i) => {
            return (
              <li key={"dog-" + i} onClick={onClick}>
                <Tile src={x} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default ScrollingTiles;
