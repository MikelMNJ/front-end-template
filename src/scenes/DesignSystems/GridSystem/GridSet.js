import { Spacer } from 'xerum';
import { GridWrapper, GridUnit } from './styles';

const GridSet = props => {
  return (
    <GridWrapper {...props}>
      <GridUnit size={64} {...props} />
      <Spacer across={true} />

      <GridUnit size={48} {...props} />
      <Spacer across={true} />

      <GridUnit size={40} {...props} />
      <Spacer across={true} />

      <GridUnit size={32} {...props} />
      <Spacer across={true} />

      <GridUnit size={24} {...props} />
      <Spacer across={true} />

      <GridUnit size={16} {...props} />
      <Spacer across={true} />

      <GridUnit size={12} {...props} />
      <Spacer across={true} />

      <GridUnit size={8} {...props} />
      <Spacer across={true} />

      <GridUnit size={4} {...props} />
      <Spacer across={true} />
    </GridWrapper>
  );
};

export { GridSet };