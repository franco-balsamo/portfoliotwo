import React, { useContext } from 'react';
import { ThemeContext } from "../../context";

const Social = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="home__social">
      
      
      <a
        href="https://github.com/franco-balsamo"
        className="home__social-icon"
        target="_blank" 
        rel="noreferrer"
      >
        <i style={{color: darkMode && "#fff"}} class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/francobalsamo--developer-backend/"
        className="home__social-icon"
        target="_blank" 
        rel="noreferrer"
      >
        <i style={{color: darkMode && "#fff"}} class="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;
