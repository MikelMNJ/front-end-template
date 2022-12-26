import styled, { withTheme } from 'styled-components';
import { fonts } from 'controllers';

const getFontFamily = props => {
  const { weight } = props;
  const fontWeight = weight?.toLowerCase();
  const normal = fonts?.primary?.normal;

  switch (fontWeight) {
    case 'thin':
      return fonts?.primary?.thin || normal;
    case 'extralight':
      return fonts?.primary?.extraLight || normal;
    case 'light':
      return fonts?.primary?.light || normal;
    case 'medium':
      return fonts?.primary?.medium || normal;
    case 'semibold':
      return fonts?.primary?.semiBold || normal;
    case 'bold':
      return fonts?.primary?.bold || normal;
    case 'extrabold':
      return fonts?.primary?.extraBold || normal;
    case 'black':
      return fonts?.primary?.black || normal;

    default:
      return normal;
  }
};

const StyledFont = styled('div')`
  display: inline-flex;
  font-family: ${props => getFontFamily(props)}, sans-serif;
  font-size: ${props => props.size || 1}rem;
`;

const Font = withTheme(props => {
  const { theme, weight, size, children, ...rest } = props;

  return (
    <StyledFont theme={theme} weight={weight} size={size} {...rest}>
      {children}
    </StyledFont>
  );
});

export { Font };