import React from 'react';
import './ThemeList.css';
import PropTypes from 'prop-types';

const ThemeList = ({ onChangeTheme, activeTheme }) => {
  const colorThemes = ['#2c3e50', '#e67e22', '#9b59b6','#37af65', '#c0392b', '#3498db'];
  return (
    <ul className="theme-list">
      {colorThemes.map((color, i) => (
        <li
          key={color}
          className={`theme-item theme-item-${i + 1} ${
            activeTheme === color ? 'active-theme' : ''
          }`}
          onClick={() => onChangeTheme(color)}
        />
      ))}
    </ul>
  );
};

ThemeList.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
  activeTheme: PropTypes.string.isRequired
};

export default ThemeList;
