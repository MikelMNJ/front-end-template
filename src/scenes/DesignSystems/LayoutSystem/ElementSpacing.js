import { H3, P, Layout } from 'components';
import { Spacer } from 'xerum';
import { LayoutSet } from './LayoutSet';

const ElementSpacing = props => {
  return (
    <Layout inline={true}>
      <div>
        <H3>Element Spacing</H3>
        <Spacer />
      </div>

      <div>
        <P>
          Consider using the defined sizes between your elements for coherent
          element grouping and heirarchy:
        </P>

        <Spacer size={3} />

        <LayoutSet {...props} />
      </div>
    </Layout>
  );
};

export { ElementSpacing };