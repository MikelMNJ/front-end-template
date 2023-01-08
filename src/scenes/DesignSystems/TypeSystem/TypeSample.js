import { D1, D2, H1, H2, H3, H4, H5, H6, P, Layout } from 'components';
import { Spacer } from 'xerum';
import { TypeSampleWrapper, SampleTitle } from './styles';

const TypeSample = props => {
  const { type } = props;

  const buildSample = () => {
    switch(type) {
      case 'D1':
        return (
          <>
            <D1 weight='regular'>
              Display 01
              <P>Regular</P>
            </D1>

            <D1 weight='semiBold'>
              Display 01
              <P>Semi-Bold</P>
            </D1>

            <D1>
              Display 01
              <P>Bold</P>
            </D1>
          </>
        );

      case 'D2':
        return (
          <>
            <D2 weight='regular'>
              Display 02
              <P>Regular</P>
            </D2>

            <D2 weight='semiBold'>
              Display 02
              <P>Semi-Bold</P>
            </D2>

            <D2>
              Display 02
              <P>Bold</P>
            </D2>
          </>
        );

      case 'H1':
        return (
          <>
            <H1 weight='regular'>
              Heading 01
              <P>Regular</P>
            </H1>

            <H1 weight='semiBold'>
              Heading 01
              <P>Semi-Bold</P>
            </H1>

            <H1>
              Heading 01
              <P>Bold</P>
            </H1>
          </>
        );

      case 'H2':
        return (
          <>
            <H2 weight='regular'>
              Heading 02
              <P>Regular</P>
            </H2>

            <H2 weight='semiBold'>
              Heading 02
              <P>Semi-Bold</P>
            </H2>

            <H2>
              Heading 02
              <P>Bold</P>
            </H2>

            <Spacer size={3} />
          </>
        );

      case 'H3':
        return (
          <>
            <H3 weight='regular'>
              Heading 03
              <P>Regular</P>
            </H3>

            <H3 weight='semiBold'>
              Heading 03
              <P>Semi-Bold</P>
            </H3>

            <H3>
              Heading 03
              <P>Bold</P>
            </H3>
          </>
        );

      case 'H4':
        return (
          <>
            <H4 weight='regular'>
              Heading 04
              <P>Regular</P>
            </H4>

            <H4 weight='semiBold'>
              Heading 04
              <P>Semi-Bold</P>
            </H4>

            <H4>
              Heading 04
              <P>Bold</P>
            </H4>
          </>
        );

      case 'H5':
        return (
          <>
            <H5 weight='regular'>
              Heading 05
              <P>Regular</P>
            </H5>

            <H5 weight='semiBold'>
              Heading 05
              <P>Semi-Bold</P>
            </H5>

            <H5>
              Heading 05
              <P>Bold</P>
            </H5>
          </>
        );

      case 'H6':
        return (
          <>
            <H6 weight='regular'>
              Heading 06
              <P>Regular</P>
            </H6>

            <H6 weight='semiBold'>
              Heading 06
              <P>Semi-Bold</P>
            </H6>

            <H6>
              Heading 06
              <P>Bold</P>
            </H6>
          </>
        );

      default:
        return <P>Paragraph</P>;
    }
  };

  return (
    <Layout>
      <div>
        <SampleTitle {...props}>
          &lt;{type} {type !== 'P' && 'weight={weight}'} /&gt;
          <Spacer size={0.5} />
        </SampleTitle>

        <Spacer size={1.5} />

        <TypeSampleWrapper>
          {buildSample()}
          <Spacer />
        </TypeSampleWrapper>

        <Spacer size={3} />
      </div>
    </Layout>
  );
};

export { TypeSample };