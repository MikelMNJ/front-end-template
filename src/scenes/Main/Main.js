import { H1, H2, H3, H4, H5, H6, Font } from 'components';

const Main = () => {
  return (
    <div>
      <H1>Heading Test</H1>
      <H2>Heading Test</H2>
      <H3>Heading Test</H3>
      <H4>Heading Test</H4>
      <H5>Heading Test</H5>
      <H6>Heading Test</H6>

      <Font weight='light'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Font>
    </div>
  );
};

export { Main };