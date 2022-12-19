import styled, { withTheme } from 'styled-components';

const getFontFamily = props => {
  const { weight } = props;
  const fallback = props.theme?.fonts?.primary?.regular?.family;

  switch (weight?.toLowerCase()) {
    case 'thin':
      return props.theme?.fonts?.primary?.thin?.family;
    case 'extralight':
      return props.theme?.fonts?.primary?.extraLight?.family;
    case 'light':
      return props.theme?.fonts?.primary?.light?.family;
    case 'bold':
      return props.theme?.fonts?.primary?.bold?.family;
    case 'extrabold':
      return props.theme?.fonts?.primary?.extraBold?.family;
    case 'black':
      return props.theme?.fonts?.primary?.black?.family;

    default:
      return fallback;
  }
};

const StyledFont = styled('div')`
  font-family: ${props => getFontFamily(props)}, sans-serif;
  font-size: ${props => props.size || 1.125}rem;
`;

const Font = withTheme(props => {
  const { theme, weight, size, children } = props;

  return (
    <StyledFont theme={theme} weight={weight} size={size}>
      {children}
    </StyledFont>
  );
});

export { Font };