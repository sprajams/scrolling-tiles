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
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef(null);
  const listRef = useRef(null);

  const [listWidth, setListWidth] = useState(0);

  // keep track of if mouse is in row of pets or not
  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  //setXVal will only change if listWidth or baseSpeed is changed
  const animate = useCallback(() => {
    // when user hovers onto the rows, set multilier to slow down speed
    const slowMultiplier = isHovered ? 0.25 : 1;
    // adjust xVal every animation frame, % listWidth helps reset xVal back to 0
    setXVal((curr) =>
      listWidth > 0 ? (curr + 1 * baseSpeed * slowMultiplier) % listWidth : 0
    );
    requestRef.current = requestAnimationFrame(animate);
  }, [listWidth, baseSpeed, isHovered]);

  useEffect(() => {
    // get width of 1 list of animals
    const width = listRef.current ? listRef.current.offsetWidth : 0;
    setListWidth(width);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate]);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.animalWrap}>
        <ul
          className={styles.animalList}
          ref={listRef}
          style={{
            transform: `translate(${-xVal}px)`,
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
