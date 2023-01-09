import { H3, Layout } from 'components';
import { Spacer } from 'xerum';
import { FontSet } from './FontSet';
import { Title } from '../Title';
import { TypeSample } from './TypeSample';
import { TypeSet } from './TypeSet';
import { ContentArea } from '../styles';

const TypeSystem = props => {
  return (
    <div>
      <Title
        text='Typography'
        subText='Font faces, type sets and weights'
        rightContent={<FontSet {...props} />}
        {...props}
      />

      <ContentArea>
        <TypeSet {...props} />

        <Spacer size={3} />

        <Layout>
          <H3>Type Sets and Weights</H3>

          <Spacer size={1.5} />

          <TypeSample type='D1' {...props} />
          <TypeSample type='D2' {...props} />
          <TypeSample type='H1' {...props} />
          <TypeSample type='H2' {...props} />
          <TypeSample type='H3' {...props} />
          <TypeSample type='H4' {...props} />
          <TypeSample type='H5' {...props} />
          <TypeSample type='H6' {...props} />
          <TypeSample type='P' {...props} />
        </Layout>
      </ContentArea>
    </div>
  );
};

export { TypeSystem };