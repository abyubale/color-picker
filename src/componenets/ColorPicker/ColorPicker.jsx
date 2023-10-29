import { useState } from "react";
import { ColorData } from "../../Utility/ColorData";
import Input from "../Input/Input";
import Btn from "../Btn/Btn";
import ColorDisplay from "../ColorDisplay/ColorDisplay";
import ColorPalette from "../ColorPalette/ColorPalette";
import styles from "./ColorPicker.module.css";

const ColorPicker = () => {
  const [colorName, setColorName] = useState("");

  const [colors, SetColors] = useState([
    "#008000",
    "#008080",
    "#9ACD32",
    "#FFA500",
  ]);

  const [displayColor, setDisplayColor] = useState("");

  const changeHandler = (data) => {
    setColorName(data);
  };

  const colorNameFinal = colorName.trim().toLowerCase();

  const isHex = (hexCode) => {
    const hexColorPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexColorPattern.test(hexCode);
  };
  const clickHandler = () => {
    const isHexColor = isHex(colorNameFinal);

    if (!isHexColor) {
      for (const color of ColorData) {
        if (colorNameFinal === color.toLowerCase()) {
          const updatedColorArr = [...colors];
          updatedColorArr.push(color);
          SetColors(updatedColorArr);
        }
      }
    } else if (isHexColor) {
      const updatedColorArr = [...colors];
      updatedColorArr.push(colorNameFinal);
      SetColors(updatedColorArr);
    }
    setColorName("");
    setDisplayColor("");
  };
  return (
    <>
      <div className={styles.inputBtn}>
        <Input
          changeHandler={changeHandler}
          value={colorName}
          enterPressedHandler={clickHandler}
        />
        <Btn clickHandler={clickHandler} />
      </div>
      <div className={styles.colorDisplay}>
        <ColorDisplay colors={colors} displayColor={displayColor} />
      </div>
      <div className={styles.colorDisplay}>
        <ColorPalette
          colors={colors}
          onClickToGetColor={(getBgColor) => {
            setDisplayColor(getBgColor);
          }}
        />
      </div>
    </>
  );
};
export default ColorPicker;
