import { Font } from 'components';
import { ColorSampleWrapper, ColorSample, ColorDetails } from './styles';
import { Spacer } from 'xerum';
import _ from 'lodash';

const ColorSwatch = props => {
  const { color, name } = props;

  return (
    <ColorSampleWrapper>
      <ColorSample color={color} {...props} />

      <Spacer size={0.25} />

      <ColorDetails>
        <Font size={0.875} weight='semiBold'>
          {_.startCase(name)}
        </Font>

        <Font size={0.875} weight='semiBold'>
          {color.toUpperCase()}
        </Font>
      </ColorDetails>
    </ColorSampleWrapper>
  );
};

export { ColorSwatch };