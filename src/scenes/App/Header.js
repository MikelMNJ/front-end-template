import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appConstants } from 'modules';
import { Font } from 'components';
import { StyledHeader, AppLogo } from './styles';
import { Button, Banner, Spacer } from 'xerum';
import { iconValid } from 'helpers';

const { light, dark } = appConstants.themes;

const Header = props => {
  const {
    theme,
    selectedTheme,
    setTheme,
    bannerContent,
  } = props;

  const [ showBanner, setShowBanner ] = useState(true);
  const navigate = useNavigate();

  const handleThemeChange = () => {
    setTheme(selectedTheme === light ? dark : light);
  };

  return (
    <header>
      <StyledHeader theme={theme} selectedTheme={selectedTheme}>
        <Font weight='bold' size={1.75}>
          <AppLogo onClick={() => navigate('/')}>
            <i className={iconValid('fa-brands fa-react')} />
            <Spacer across={true} />

            [App name]
          </AppLogo>
        </Font>

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
        <Font weight='bold'>
          <Banner
            theme={theme}
            selectedTheme={selectedTheme}
            center={true}
            sharp={true}
            callback={() => setShowBanner(false)}
          >
            <i className={iconValid('fa-solid fa-bell')} />
            <Spacer size={1} across={true} />

            {bannerContent}
          </Banner>
        </Font>
      )}
    </header>
  );
};

export { Header };