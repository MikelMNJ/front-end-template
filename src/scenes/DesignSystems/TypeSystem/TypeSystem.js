import { FontSet } from './FontSet';
import { Title } from '../Title';
import { TypeSample } from './TypeSample';
import { ContentArea } from '../styles';
import { SampleWrapper } from './styles';

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
        <SampleWrapper>
          <TypeSample type='D1' {...props} />
          <TypeSample type='D2' {...props} />
          <TypeSample type='H1' {...props} />
          <TypeSample type='H2' {...props} />
          <TypeSample type='H3' {...props} />
          <TypeSample type='H4' {...props} />
          <TypeSample type='H5' {...props} />
          <TypeSample type='H6' {...props} />
          <TypeSample type='P' {...props} />
        </SampleWrapper>
      </ContentArea>
    </div>
  );
};

export { TypeSystem };