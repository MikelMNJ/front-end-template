import { Link } from 'react-router-dom';
import { P, Layout } from 'components';
import { Libraries } from 'scenes';
import { Title } from 'scenes/DesignSystems/Title';
import { StyledMain, ContentArea } from './styles';

const Main = props => {
  const additionalText = () => (
    <P>
      Your app comes with design systems to help keep things tidy, as well as libraries
      to help manage state, build components, produce iconography and more.
    </P>
  );

  return (
    <StyledMain>
      <Title
        text='Next step...'
        subText={
          <>
            Get acquainted with the&nbsp;
            <Link to='//github.com/MikelMNJ/front-end-template' target='_blank'>
              documentation
            </Link>
           &nbsp;and tools.
          </>
        }
        rightContent={additionalText()}
        {...props}
      />

      <ContentArea>
        <Layout center={true}>
          <Libraries />
        </Layout>
      </ContentArea>
    </StyledMain>
  );
};

export { Main };