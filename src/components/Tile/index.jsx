import styles from "./styles.module.scss";
function Tile({ src }) {
  return (
    <div className={styles.imageWrap}>
      <img src={src} alt="cute animal" className={styles.image} />
    </div>
  );
}

export default Tile;
