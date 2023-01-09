import { H3, P } from 'components';
import { ColorSectionWrapper, ColorDescription, Palette } from './styles';
import { ColorSwatch } from './ColorSwatch';
import { Spacer } from 'xerum';

const ColorSection = props => {
  const { title, description, colors } = props;

  const buildSwatches = () => {
    const swatches = colors.map((color, index) => (
      <ColorSwatch key={index} color={color} {...props} />
    ));

    return swatches;
  };

  return (
    <ColorSectionWrapper>
      <ColorDescription>
        <H3>{title}</H3>
        <Spacer />
        <P>{description}</P>
      </ColorDescription>

      <Palette>
        {buildSwatches()}
      </Palette>
    </ColorSectionWrapper>
  );
};

export { ColorSection };