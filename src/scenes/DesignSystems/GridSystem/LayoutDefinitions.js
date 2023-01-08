import { H3, P, Font, UL, Layout } from 'components';
import { Spacer } from 'xerum';

const LayoutDefinitions = () => {
  return (
    <Layout columns={2}>
      <div>
        <H3>Layout</H3>
        <Spacer />
      </div>

      <div>
        <P>
          The <Font weight='semiBold'>
            &lt;Layout columns=&#123;columns&#125; /&gt;
          </Font> component can be used to quickly add content that is automatically
          divided up along a grid &mdash; just pass the columns you need, and
          make sure each child element is wrapped in a div for separation.
        </P>

        <Spacer />

        <P>
          Columns are 64px (4rem) with 32px (2rem) spacing between each column.
          Elements are sized according to how many columns and spaces they, collectively,
          occupy:
        </P>

        <Spacer />

        <UL>
          <li>
            <Font weight='semiBold'>Full width (12 columns)</Font>:
            1120px (70rem)
          </li>

          <li>
            <Font weight='semiBold'>Half width (6 columns)</Font>:
            544px (34rem)
          </li>

          <li>
            <Font weight='semiBold'>Third width (4 columns)</Font>:
            352px (22rem)
          </li>

          <li>
            <Font weight='semiBold'>Quarter width (3 columns)</Font>:
            256px (16rem)
          </li>

          <li>
            <Font weight='semiBold'>Sixth width (2 columns)</Font>:
            160px (10rem)
          </li>

          <li>
            <Font weight='semiBold'>Single width (1 columns)</Font>:
            64px (4rem)
          </li>
        </UL>

        <Spacer />

        <P>
          <Font weight='semiBold'>Note</Font>: Paragraph, Display and Header tags
          all have a max width to assist with blocks of text that may
          run over the recommended maximum text width of 6 columns.
        </P>
      </div>
    </Layout>
  );
};

export { LayoutDefinitions };