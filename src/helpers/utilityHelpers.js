import { css } from 'styled-components';
import { appConstants } from 'modules';

export const getColor = (props, key, fallback) => {
  const { theme, selectedTheme } = props;

  if (theme && selectedTheme) {
    const colors = theme.modes[selectedTheme];
    return colors[key];
  }

  return fallback;
};

export const importFonts = props => {
  if (props.theme) {
    const { fonts } = props.theme;
    const fontFaces = [];

    const allFontFaces = primaryOrSecondary => {
      return Object.values(primaryOrSecondary)?.forEach(value => {
        const { family, weight, style, format, src } = value;

        fontFaces.push(css`
          @font-face {
            font-family: ${family};
            src: url(${src}) ${format ? `format('${format}')` : ''};
            font-weight: ${weight};
            font-style: ${style};
          }
          `);
      });
    };

    Object.keys(fonts)?.map(key => allFontFaces(fonts[key]));
    return css`${fontFaces}`;
  }

  return css``;
};

export const updateLocalStorage = (key, value) => {
  if (key && value) {
    const appName = appConstants.appName;
    const existingSettings = JSON.parse(localStorage.getItem(appName));
    const newSettings = { ...existingSettings, [key]: value };

    localStorage.setItem(appName, JSON.stringify(newSettings));
  }
};

export const getLocalStorageSetting = key => {
  if (key) {
    const appName = appConstants.appName;
    const existingSettings = JSON.parse(localStorage.getItem(appName));

    return existingSettings?.[key];
  }
};