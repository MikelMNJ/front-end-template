import { H3, Font, Layout } from 'components';
import { Spacer } from 'xerum';
import { TypeCards, TypeCard, FontDisplay, FontSample } from './styles';

const TypeSet = props => {
  return (
    <Layout inline={true}>
      <H3>Font Faces</H3>

      <TypeCards>
        <TypeCard {...props}>
          <FontDisplay {...props}>
            <Font size={3}>Aa</Font>
          </FontDisplay>

          <FontSample>
            <Font size={1.5}>Inter</Font>
            <Font weight='regular'>Regular</Font>
          </FontSample>
        </TypeCard>

        <Spacer across={true} />

        <TypeCard {...props}>
          <FontDisplay {...props}>
            <Font size={3} weight='semiBold'>Aa</Font>
          </FontDisplay>

          <FontSample>
            <Font weight='semiBold' size={1.5}>Inter</Font>
            <Font weight='semiBold'>Semi-Bold</Font>
          </FontSample>
        </TypeCard>

        <Spacer across={true} />

        <TypeCard {...props}>
          <FontDisplay {...props}>
            <Font size={3} weight='bold'>Aa</Font>
          </FontDisplay>

          <FontSample>
            <Font weight='bold' size={1.5}>Inter</Font>
            <Font weight='bold'>Bold</Font>
          </FontSample>
        </TypeCard>
      </TypeCards>
    </Layout>
  );
};

export { TypeSet };