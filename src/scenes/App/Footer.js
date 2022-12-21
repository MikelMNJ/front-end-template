import { StyledFooter } from './styles';
import { Font } from 'components';
import { Copyright } from 'xerum';
import * as PackageJSON from '../../../package.json';

const { version } = PackageJSON;

const Footer = props => {
  const { theme, selectedTheme } = props;

  return (
    <StyledFooter theme={theme} selectedTheme={selectedTheme}>
      <Font size={0.9}>
        <Copyright
          trade={true}
          rights={true}
          name='[Company]'
          message='made for you.'
        />
      </Font>

      <Font weight='light' size={0.9}>
        v{version}
      </Font>
    </StyledFooter>
  );
};

export { Footer };