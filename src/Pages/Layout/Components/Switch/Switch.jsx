import { useContext } from "react";
import { ThemeContext } from "../../Layout";

import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

import './Switch.css';

const Switch = ({ switchMode, themeMode }) => {
    const themeColors = useContext(ThemeContext);
    return (
    <div className={"switch " + themeColors.colorSecondary} onClick={() => {
        switchMode();
    }}
    >
    {console.log(themeMode)}

    {themeMode === false ? (
        <HiSun size={50} color="#fdd40a" />
    ) : (
        <HiMoon size={40} color="darkslateblue" />
    )}
    </div>
);
};

export default Switch;
