import { Font, Layout } from 'components';
import { Spacer } from 'xerum';
import { Title } from '../Title';
import { ElementSpacing } from './ElementSpacing';
import { LayoutDefinitions } from './LayoutDefinitions';
import { ContentArea } from '../styles';

const LayoutSystem = props => {
  return (
    <div>
      <Title
        text='Layout'
        subText='Spacing and layout'
        rightContent={(
          <>
            Import &#123; Layout &#125; from &apos;<Font weight='semiBold'>components</Font>&apos;;
          </>
        )}
        {...props}
      />

      <ContentArea>
        <Layout center={true}>
          <ElementSpacing {...props} />
          <Spacer size={3} />
          <LayoutDefinitions />
        </Layout>
      </ContentArea>
    </div>
  );
};

export { LayoutSystem };