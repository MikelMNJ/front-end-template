import { H3, P, Layout } from 'components';
import { Spacer } from 'xerum';
import { GridSet } from './GridSet';

const ElementSpacing = props => {
  return (
    <Layout columns={2}>
      <div>
        <H3>Element Spacing</H3>
        <Spacer />
      </div>

      <div>
        <P>
          Element spacing should have a buffer gap of one of the sizes displayed.
          These gaps use the most common sizes for spacing and will result in proper
          heirarchy based on core design principles.
        </P>

        <Spacer size={3} />

        <GridSet {...props} />
      </div>
    </Layout>
  );
};

export { ElementSpacing };