import { H3, P } from 'components';
import { ColorSectionWrapper, ColorDescription, Palette } from './styles';
import { ColorSwatch } from './ColorSwatch';
import { Spacer } from 'xerum';

const ColorSection = props => {
  const { title, description, colors, names } = props;

  const buildSwatches = () => {
    const swatches = colors.map((color, index) => {
      const name = names?.[index];
      return <ColorSwatch key={index} color={color} name={name} {...props} />;
    });

    return swatches;
  };

  return (
    <ColorSectionWrapper>
      <ColorDescription>
        <H3>{title}</H3>
        <Spacer size={0.5} />
        <P>{description}</P>
      </ColorDescription>

      <Palette>
        {buildSwatches()}
      </Palette>
    </ColorSectionWrapper>
  );
};

export { ColorSection };