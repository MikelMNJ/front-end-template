import { P, Font } from 'components';
import { TypeWrapper } from './styles';

const FontSet = () => {
  return (
    <TypeWrapper>
      <P>
        Add fonts to <Font weight='semiBold'>static/fonts/primary or secondary</Font>
      </P>

      <P>
        Define font faces in <Font weight='semiBold'>fontFaces.css</Font>
      </P>

      <P>
        Add names to <Font weight='semiBold'>controllers/fontsController.js</Font>
      </P>
    </TypeWrapper>
  );
};

export { FontSet };