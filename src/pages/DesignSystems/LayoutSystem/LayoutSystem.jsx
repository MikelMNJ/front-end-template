import { Link } from 'react-router-dom';
import { P, Font, Layout } from 'components';
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
        subText={
          <div>
            <Font weight='bold'>
              Spacing and layout.
            </Font>

            <Spacer />

            <P>
              Also see:&nbsp;
              <Link to='/color'>Color</Link>&nbsp;and&nbsp;
              <Link to='/typography'>Typography</Link>
            </P>
          </div>
        }
        rightContent={(
          <div>
            Import &#123; Layout &#125; from &apos;<Font weight='semiBold'>components</Font>&apos;;
          </div>
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