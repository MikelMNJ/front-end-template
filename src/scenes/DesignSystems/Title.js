import { H2, P, Font } from 'components';
import { Spacer } from 'xerum';
import { TitleArea, RightContent } from './styles';

const Title = props => {
  const { theme, selectedTheme, text, subText, rightContent } = props;
  const grey = theme.modes[selectedTheme].grey;

  return (
    <TitleArea {...props}>
      <div>
        {text && <H2>{text}</H2>}

        {subText && (
          <>
            <Spacer size={0.25} />

            <P>
              <Font color={grey}>
                {subText}
              </Font>
            </P>
          </>
        )}
      </div>

      {rightContent && (
        <RightContent>
          <Font color={grey}>
            {rightContent}
          </Font>
        </RightContent>
      )}
    </TitleArea>
  );
};

export { Title };