import { LayoutWrapper } from './styles';

const Layout = props => {
  const { inline, children } = props;

  return (
    <LayoutWrapper inline={inline}>
      {children}
    </LayoutWrapper>
  );
};

export { Layout };