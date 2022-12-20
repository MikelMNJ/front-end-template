import { StyledFooter } from './styles';
import { Font } from 'components';

const Footer = props => {
  const { theme, selectedTheme } = props;

  return (
    <StyledFooter theme={theme} selectedTheme={selectedTheme}>
      <Font size={0.9}>
        <p>©2021, Company Name &mdash; Made with love</p>
      </Font>
    </StyledFooter>
  );
};

export { Footer };