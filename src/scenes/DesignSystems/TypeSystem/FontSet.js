import { Font } from 'components';
import { Spacer } from 'xerum';
import { TypeWrapper, TypeCard, FontDisplay, FontSample } from './styles';

const FontSet = props => {
  return (
    <TypeWrapper>
      <TypeCard {...props}>
        <FontDisplay {...props}>
          <Font size={4}>Aa</Font>
        </FontDisplay>

        <FontSample>
          <Font size={1.5}>Inter</Font>
          <Font weight='regular'>Regular</Font>
        </FontSample>
      </TypeCard>

      <Spacer across={true} />

      <TypeCard {...props}>
        <FontDisplay {...props}>
          <Font size={4} weight='semiBold'>Aa</Font>
        </FontDisplay>

        <FontSample>
          <Font size={1.5} weight='semiBold'>Inter</Font>
          <Font weight='semiBold'>Semi-Bold</Font>
        </FontSample>
      </TypeCard>

      <Spacer across={true} />

      <TypeCard {...props}>
        <FontDisplay {...props}>
          <Font size={4} weight='bold'>Aa</Font>
        </FontDisplay>

        <FontSample>
          <Font size={1.5} weight='bold'>Inter</Font>
          <Font weight='bold'>Bold</Font>
        </FontSample>
      </TypeCard>
    </TypeWrapper>
  );
};

export { FontSet };