import { Link } from 'react-router-dom';
import { P, Font, Layout } from 'components';
import { StyledMain, ContentArea } from './styles';
import { Title } from 'scenes/DesignSystems/Title';

const Main = props => {
  const additionalText = () => (
    <P>
      Your app comes with design systems to help
      make keep things tidy.  Check out the&nbsp;

      <Link to='/color'>
        <Font weight='semiBold'>
          color
        </Font>
      </Link>,&nbsp;

      <Link to='/typography'>
        <Font weight='semiBold'>
          typography
        </Font>
      </Link> and&nbsp;

      <Link to='/layout'>
        <Font weight='semiBold'>
          layout
        </Font>
      </Link> systems.
    </P>
  );

  return (
    <StyledMain>
      <Title
        text='Next steps...'
        subText='Color, Typography and Layout systems'
        rightContent={additionalText()}
        {...props}
      />

      <ContentArea>
        <Layout center={true}>

        </Layout>
      </ContentArea>
    </StyledMain>
  );
};

export { Main };