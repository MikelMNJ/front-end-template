import styled, { withTheme } from 'styled-components';

const getFontFamily = props => {
  const { weight } = props;
  const fontWeight = weight?.toLowerCase();
  const fallback = props.theme?.fonts?.primary?.normal?.family;

  switch (fontWeight) {
    case 'thin':
      return props.theme?.fonts?.primary?.thin?.family || fallback;
    case 'extralight':
      return props.theme?.fonts?.primary?.extraLight?.family || fallback;
    case 'light':
      return props.theme?.fonts?.primary?.light?.family || fallback;
    case 'medium':
      return props.theme?.fonts?.primary?.medium?.family || fallback;
    case 'semibold':
      return props.theme?.fonts?.primary?.semiBold?.family || fallback;
    case 'bold':
      return props.theme?.fonts?.primary?.bold?.family || fallback;
    case 'extrabold':
      return props.theme?.fonts?.primary?.extraBold?.family || fallback;
    case 'black':
      return props.theme?.fonts?.primary?.black?.family || fallback;

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