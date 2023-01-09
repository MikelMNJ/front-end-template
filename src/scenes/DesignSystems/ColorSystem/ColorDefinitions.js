import { Layout } from 'components';
import { Spacer } from 'xerum';
import { ColorSection } from './ColorSection';
import { theme } from 'theme';

const colors = theme.colors;

const ColorDefinitions = props => {
  return (
    <div>
      <Layout>
        <ColorSection
          title='Neutral'
          description='Generally used for borders, dropshadows, placeholders,
          disabled states or anywhere a neutral color is needed.'
          colors={[ colors.darkGrey, colors.grey, colors.lightGrey ]}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Accent'
          description='Generally used for buttons, links, and anything that
          requires user attention or interaction.'
          colors={[ colors.brightNavyBlue, colors.carolinaBlue ]}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Success'
          description='Generally used for icons, text or anywhere that
          should give the user positive interaction or
          feedback.'
          colors={[ colors.success ]}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Warning'
          description='Generally used for icons, text or anywhere that
          should give the user apprehensive interaction or
          feedback.'
          colors={[ colors.warning ]}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Error'
          description='Generally used for icons, text or anywhere that
          should give the user negative feedback, a sense
          of urgency, or attention.'
          colors={[ colors.error, colors.congoPink ]}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Shades'
          description='Generally used for text, possibly backgrounds, or
          elements that require high contrast.'
          colors={[ colors.black, colors.white ]}
          {...props}
        />
      </Layout>

      <Spacer size={3} />
    </div>
  );
};

export { ColorDefinitions };