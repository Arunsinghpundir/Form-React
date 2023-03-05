import "./Switch.css";
import { useTheme } from "./ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" style={{
        backgroundColor: theme === "light" ? "black" : "",
      }}/>
      <div className="switch-text" style={{
        color: theme !== "light" ? "black" : "white",
      }}>{theme !== "light" ?"Dark-Mode" :"Light-Mode"}</div>
      
    </label>
  );
};

export default Switch;