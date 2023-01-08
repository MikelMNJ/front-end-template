import { Font } from 'components';
import { Spacer } from 'xerum';
import { Title } from '../Title';
import { ElementSpacing } from './ElementSpacing';
import { LayoutDefinitions } from './LayoutDefinitions';
import { ContentArea } from '../styles';

const GridSystem = props => {
  return (
    <div>
      <Title
        text='Grid'
        subText='Spacing and layout'
        rightContent={(
          <>
            Import &#123; Layout &#125; from &apos;<Font weight='semiBold'>components</Font>&apos;;
          </>
        )}
        {...props}
      />

      <ContentArea>
        <ElementSpacing {...props} />
        <Spacer size={3} />
        <LayoutDefinitions />
      </ContentArea>
    </div>
  );
};

export { GridSystem };