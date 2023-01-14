import { LayoutWrapper } from './styles';

const Layout = props => {
  const { inline, center, children } = props;

  return (
    <LayoutWrapper inline={inline} center={center}>
      {children}
    </LayoutWrapper>
  );
};

export { Layout };