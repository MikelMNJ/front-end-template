import { Spacer } from 'xerum';
import { LayoutWrapper, LayoutUnit } from './styles';

const LayoutSet = props => {
  return (
    <LayoutWrapper {...props}>
      <LayoutUnit size={64} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={48} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={40} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={32} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={24} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={16} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={12} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={8} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={4} {...props} />
      <Spacer across={true} />

      <LayoutUnit size={2} {...props} />
      <Spacer across={true} />
    </LayoutWrapper>
  );
};

export { LayoutSet };