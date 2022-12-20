import { useState } from 'react';
import { appConstants } from 'modules';
import { H2 } from 'components';
import { StyledHeader } from './styles';
import { Button, Banner } from 'xerum';

const { light, dark } = appConstants.themes;

const Header = props => {
  const {
    theme,
    selectedTheme,
    setTheme,
    bannerContent,
  } = props;

  const [ showBanner, setShowBanner ] = useState(true);

  const handleThemeChange = () => {
    setTheme(selectedTheme === light ? dark : light);
  };

  return (
    <header>
      <StyledHeader theme={theme} selectedTheme={selectedTheme}>
        <H2>Front-end Template</H2>

        <Button
          theme={theme}
          selectedTheme={selectedTheme}
          text={selectedTheme}
          btnType='solid'
          icon={selectedTheme === light ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
          disabled={false}
          callback={handleThemeChange}
        />
      </StyledHeader>

      {bannerContent && showBanner && (
        <Banner
          theme={theme}
          selectedTheme={selectedTheme}
          center={true}
          sharp={true}
          text={bannerContent}
          callback={() => setShowBanner(false)}
        />
      )}
    </header>
  );
};

export { Header };