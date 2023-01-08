import { Font } from 'components';
import { ColorSampleWrapper, ColorSample } from './styles';
import { Spacer } from 'xerum';

const ColorSwatch = props => {
  const { color } = props;

  return (
    <ColorSampleWrapper>
      <ColorSample color={color} {...props} />
      <Spacer size={0.5} />
      <Font size={0.875} weight='semiBold'>
        {color.toUpperCase()}
        <Spacer size={0.5} across={true} />
      </Font>
    </ColorSampleWrapper>
  );
};

export { ColorSwatch };