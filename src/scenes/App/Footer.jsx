import { StyledFooter } from './styles';
import { Font, Layout } from 'components';
import { Copyright } from 'xerum';
import PackageJSON from '../../../package.json';

const { version } = PackageJSON;

const Footer = props => {
  const { theme, selectedTheme } = props;

  return (
    <StyledFooter theme={theme} selectedTheme={selectedTheme}>
      <Layout inline={true} center={true}>
        <Font size={0.9}>
          <Copyright
            rights={true}
            name='[Company]'
            message='made for you.'
          />
        </Font>

        <Font weight='light' size={0.9}>
          v{version}
        </Font>
      </Layout>
    </StyledFooter>
  );
};

export { Footer };