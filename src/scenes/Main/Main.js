import { H1, H2, H3, H4, H5, H6, P, Font } from 'components';
import { StyledMain } from './styles';
import { Spacer } from 'xerum';

const Main = () => {

  return (
    <StyledMain>
      <div>
        <Font weight='light'>
          <H2>Section Title</H2>
          <Spacer />

          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </P>
        </Font>
      </div>

      <div>
        <H1>Heading Test</H1>
        <Spacer />
        <H2>Heading Test</H2>
        <Spacer />
        <H3>Heading Test</H3>
        <Spacer />
        <H4>Heading Test</H4>
        <Spacer />
        <H5>Heading Test</H5>
        <Spacer />
        <H6>Heading Test</H6>
      </div>
    </StyledMain>
  );
};

export { Main };