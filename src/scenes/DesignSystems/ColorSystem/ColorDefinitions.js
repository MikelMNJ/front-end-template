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
          description='Used for borders, dropshadows, placeholders,
          disabled states or anywhere a neutral color is needed.'
          colors={Object.values(colors.neutral).map(color => color)}
          names={Object.keys(colors.neutral).map(key => key)}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Accent'
          description='Used for buttons, links, hover and form element focus
          states, or anything that requires user attention or interaction.'
          colors={Object.values(colors.accent).map(color => color)}
          names={Object.keys(colors.accent).map(key => key)}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Success'
          description='Used for icons, text or anywhere that
          should give the user positive interaction or
          feedback.'
          colors={Object.values(colors.success).map(color => color)}
          names={Object.keys(colors.success).map(key => key)}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Warning'
          description='Used for icons, text or anywhere that
          should give the user apprehensive interaction or
          feedback.'
          colors={Object.values(colors.warning).map(color => color)}
          names={Object.keys(colors.warning).map(key => key)}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Error'
          description='Used for icons, text or anywhere that
          should give the user negative feedback, a sense
          of urgency, or attention.'
          colors={Object.values(colors.error).map(color => color)}
          names={Object.keys(colors.error).map(key => key)}
          {...props}
        />
      </Layout>

      <Spacer size={3} />

      <Layout>
        <ColorSection
          title='Shades'
          description='Used for text, possibly backgrounds, or
          elements that require high contrast.'
          colors={Object.values(colors.shades).map(color => color)}
          names={Object.keys(colors.shades).map(key => key)}
          {...props}
        />
      </Layout>

      <Spacer size={3} />
    </div>
  );
};

export { ColorDefinitions };