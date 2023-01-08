import { Link } from 'react-router-dom';
import { P, Font } from 'components';
import { StyledMain } from './styles';
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

      <Link to='/grid'>
        <Font weight='semiBold'>
          grid
        </Font>
      </Link> systems.
    </P>
  );

  return (
    <StyledMain>
      <Title
        text='Next steps...'
        subText='Color, Typography and Grid systems'
        rightContent={additionalText()}
        {...props}
      />
    </StyledMain>
  );
};

export { Main };