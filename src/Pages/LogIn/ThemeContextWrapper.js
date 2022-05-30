// import { useState, useEffect } from "react";
// import { ThemeContext, themes } from "./ThemeContext";

// const ThemeContextWrapper = (props) => {
//   const [theme, setTheme] = useState("dark");

//   const changeThemeHandler = (theme) => {
//     setTheme(theme);
//   };
//   console.log(theme);

//   useEffect(() => {
//     console.log("apply the theme");
//   }, [theme]);

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         changeThemeHandler,
//       }}
//     >
//       {props.children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContextWrapper;
