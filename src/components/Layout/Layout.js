import { LayoutWrapper } from './styles';

const Layout = props => {
  const { columns, children } = props;

  return (
    <LayoutWrapper columns={columns}>
      {children}
    </LayoutWrapper>
  );
};

export { Layout };