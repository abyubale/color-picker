import styles from "./ColorPalette.module.css";
// eslint-disable-next-line react/prop-types
const ColorPalette = ({ colors, onClickToGetColor }) => {
  // eslint-disable-next-line react/prop-types

  // eslint-disable-next-line react/prop-types
  const palette = colors.map((color, index) => (
    <button
      key={index}
      className={styles.addedColorHolder}
      style={{ backgroundColor: `${color}` }}
      onClick={(e) => {
        const bgColor = e.target.style.backgroundColor;
        onClickToGetColor(bgColor);
      }}
    ></button>
  ));

  return <div className={styles.paletteColor}>{palette}</div>;
};

export default ColorPalette;
