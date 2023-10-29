import styles from "./ColorDisplay.module.css";
// eslint-disable-next-line react/prop-types
const ColorDisplay = ({ colors, displayColor = "" }) => {
  const getLastColor = [...colors];

  return (
    <div
      className={styles.display}
      style={{
        backgroundColor: `${
          displayColor ? displayColor : getLastColor[getLastColor.length - 1]
        }`,
      }}
    ></div>
  );
};
export default ColorDisplay;
