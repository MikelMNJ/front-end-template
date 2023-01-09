import { H3, P, Font, Layout } from 'components';
import { Spacer } from 'xerum';

const LayoutDefinitions = () => {
  return (
    <Layout inline={true}>
      <div>
        <H3>Layout</H3>
        <Spacer />
      </div>

      <div>
        <P>
          The <Font weight='semiBold'>&lt;Layout /&gt;</Font> component limits child content
          to a max width defined as <Font weight='semiBold'>layoutWidth</Font> in&nbsp;
          <Font weight='semiBold'>modules/app/appConstants.js</Font>.
        </P>

        <Spacer />

        <P>
          It can also use <Font weight='semiBold'>Flexbox</Font> to display it&apos;s children as
          inline elements, with even spacing between each child element with&nbsp;
          <Font weight='semiBold'>&lt;Layout inline=&#123;true&#125; /&gt;</Font>.
        </P>

        <Spacer />

        <P>
          You can use&nbsp;
          <Font weight='semiBold'>&lt;Layout center=&#123;true&#125; /&gt;</Font> if you need
          the layout element center justified in its parent.
        </P>

        <Spacer />

        <P>
          This approach is the default alternative to a Grid system.
          If you need a grid system, you can import solutions, such as TailWind CSS or Bootstrap.
        </P>

        <Spacer />

        <P>
          <Font weight='semiBold'>Note</Font>: The custom&nbsp;
          <Font weight='semiBold'>&lt;P /&gt;</Font> tag
          has a max width built in to assist with blocks of text that may exceed the best
          practice of 9-12 words per line.
        </P>
      </div>
    </Layout>
  );
};

export { LayoutDefinitions };