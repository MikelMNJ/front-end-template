import { P, Font, Layout } from 'components';
import { Title } from '../Title';
import { ContentArea } from '../styles';
import { ColorDefinitions } from './ColorDefinitions';

const ColorSystem = props => {
  return (
    <div>
      <Title
        text='Color'
        subText='Definitions and usage' {...props}
        rightContent={(
          <>
            <P>
              Customize in&nbsp;<Font weight='semiBold'>theme/theme.jsx</Font>
            </P>

            <P>
              Pass <Font weight='semiBold'>theme</Font> and&nbsp;
              <Font weight='semiBold'>selectedTheme</Font> props to&nbsp;
              <Font weight='semiBold'>styled components</Font>
            </P>
          </>
        )}
      />

      <ContentArea>
        <Layout center={true}>
          <ColorDefinitions {...props} />
        </Layout>
      </ContentArea>
    </div>
  );
};

export { ColorSystem };