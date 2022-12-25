import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appConstants } from 'modules';
import { Font } from 'components';
import { StyledHeader, AppLogo } from './styles';
import { Button, Banner, Spacer } from 'xerum';
import { iconValid } from 'helpers';

const { light, dark } = appConstants.themes;

const Header = props => {
  const {theme, selectedTheme, setTheme, bannerContent, token, logout } = props;

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

        <div>
          <Button
            theme={theme}
            selectedTheme={selectedTheme}
            noText={true}
            btnType='transparent'
            icon={selectedTheme === light ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
            color={theme.colors.lightGrey}
            hoverColor={theme.colors.white}
            textColor={theme.colors.lightGrey}
            disabled={false}
            callback={handleThemeChange}
          />

          {token && (
            <Button
              theme={theme}
              selectedTheme={selectedTheme}
              noText={true}
              btnType='transparent'
              icon='fa-solid fa-right-from-bracket'
              color={theme.colors.lightGrey}
              hoverColor={theme.colors.white}
              textColor={theme.colors.lightGrey}
              callback={logout}
            />
          )}
        </div>
      </StyledHeader>

      {bannerContent && showBanner && (
        <Banner
            theme={theme}
            selectedTheme={selectedTheme}
            center={true}
            sharp={true}
            textColor={theme.colors.white}
            callback={() => setShowBanner(false)}
          >
            <i className={iconValid('fa-solid fa-face-grin-stars')} />
            <Spacer size={1} across={true} />

            <Font weight='bold'>
              {bannerContent}
            </Font>
          </Banner>
      )}
    </header>
  );
};

export { Header };