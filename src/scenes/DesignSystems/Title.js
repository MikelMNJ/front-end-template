import { H2, P, Font, Layout } from 'components';
import { Spacer } from 'xerum';
import { TitleArea, TitleWrapper, RightContent } from './styles';

const Title = props => {
  const { theme, selectedTheme, text, subText, rightContent } = props;
  const grey = theme.modes[selectedTheme].grey;

  return (
    <TitleArea {...props}>
      <Layout inline={true} center={true}>
        <TitleWrapper>
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
        </TitleWrapper>

        {rightContent && (
          <RightContent>
            <Font color={grey}>
              {rightContent}
            </Font>
          </RightContent>
        )}
      </Layout>
    </TitleArea>
  );
};

export { Title };