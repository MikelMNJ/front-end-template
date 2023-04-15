import { Link } from 'react-router-dom';
import { H3, Font, Layout } from 'components';
import { Spacer } from 'xerum';

const Libraries = () => {
  return (
    <>
      <Layout inline={true}>
        <Link to='/color'>
          <Font weight='semiBold'>Color</Font>
        </Link>

        <Link to='/typography'>
          <Font weight='semiBold'>Typography</Font>
        </Link>

        <Link to='/layout'>
          <Font weight='semiBold'>Layout</Font>
        </Link>
      </Layout>

      <Spacer size={3.5} />

      <div>
        <H3>Routing</H3>
        <Spacer />
        <Link to='//www.npmjs.com/package/react-router-dom' target='_blank'>
          <Font weight='semiBold'>React Router DOM</Font>
        </Link> &nbsp;
      </div>

      <Spacer size={3.5} />

      <div>
        <H3>State Management</H3>
        <Spacer />
        <Link to='//react-redux.js.org' target='_blank'>
          <Font weight='semiBold'>React Redux</Font>
        </Link> &nbsp;

        <Link to='//redux-toolkit.js.org' target='_blank'>
          <Font weight='semiBold'>Redux Toolkit</Font>
        </Link> &nbsp;

        <Link to='//github.com/MikelMNJ/state-wrangler' target='_blank'>
          <Font weight='semiBold'>State Wrangler</Font>
        </Link> &nbsp;
      </div>

      <Spacer size={3.5} />

      <div>
        <H3>User Interface</H3>
        <Spacer />
        <Link to='//xerum.netlify.app' target='_blank'>
          <Font weight='semiBold'>Xerum</Font>
        </Link> &nbsp;

        <Link to='//styled-components.com' target='_blank'>
          <Font weight='semiBold'>Styled Components</Font>
        </Link> &nbsp;

        <Link to='//fontawesome.com' target='_blank'>
          <Font weight='semiBold'>Font Awesome</Font>
        </Link> &nbsp;

        <Link to='//formik.org' target='_blank'>
          <Font weight='semiBold'>Formik</Font>
        </Link> &nbsp;
      </div>

      <Spacer size={3.5} />

      <div>
        <H3>Utility</H3>
        <Spacer />
        <Link to='//lodash.com/' target='_blank'>
          <Font weight='semiBold'>Lodash</Font>
        </Link> &nbsp;

        <Link to='//momentjs.com' target='_blank'>
          <Font weight='semiBold'>Moment</Font>
        </Link> &nbsp;

        <Link to='//github.com/jquense/yup' target='_blank'>
          <Font weight='semiBold'>Yup</Font>
        </Link> &nbsp;

        <Link to='//miragejs.com' target='_blank'>
          <Font weight='semiBold'>Mirage</Font>
        </Link> &nbsp;

        <Link to='//vitest.dev' target='_blank'>
          <Font weight='semiBold'>Vitest</Font>
        </Link> &nbsp;

        <Link to='//eslint.org' target='_blank'>
          <Font weight='semiBold'>ESLint</Font>
        </Link> &nbsp;
      </div>

      <Spacer size={3.5} />

      <div>
        <H3>Integrations</H3>
        <Spacer />
        <Link to='//sentry.io' target='_blank'>
          <Font weight='semiBold'>Sentry</Font>
        </Link> &nbsp;

        <Link to='//github.com/react-ga/react-ga' target='_blank'>
          <Font weight='semiBold'>React Google Analytics</Font>
        </Link> &nbsp;
      </div>
    </>
  );
};

export { Libraries };