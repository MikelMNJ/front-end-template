import { Title } from '../Title';
import { ContentArea } from '../styles';
import { ColorDefinitions } from './ColorDefinitions';
import { Font } from 'components';

const ColorSystem = props => {
  return (
    <div>
      <Title
        text='Color'
        subText='Definitions and usage' {...props}
        rightContent={(
          <>
            Customize in&nbsp;<Font weight='semiBold'>theme/theme.js</Font>
          </>
        )}
      />

      <ContentArea>
        <ColorDefinitions {...props} />
      </ContentArea>
    </div>
  );
};

export { ColorSystem };