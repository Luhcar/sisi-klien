// useContext

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemedComponent() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
          <p>Current Theme: {theme}</p>
          <button onClick={toggleTheme}>Toogle Theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemedComponent;
