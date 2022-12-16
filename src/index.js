import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserTracing } from '@sentry/tracing';
import { App } from 'scenes/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { store } from 'store';
import * as Sentry from '@sentry/react';
import ReactDOM from 'react-dom/client';
import RouteChangeTracker from './RouteChangeTracker';
import ReactGA from 'react-ga';
import PackageJSON from '../package.json';
import _ from 'lodash';

const {
  NODE_ENV,
  REACT_APP_SENTRY_DSN: sentryDSN,
  REACT_APP_ANALYTICS_ID: analyticsID,
} = process.env;

const { name, version } = PackageJSON;
const inProduction = NODE_ENV === 'production';

const useAnalytics = () => {
  if (!_.isEmpty(analyticsID) && inProduction) {
    ReactGA.initialize(analyticsID);
    return <RouteChangeTracker />;
  }
};

if (inProduction && !_.isEmpty(sentryDSN)) {
  Sentry.init({
    dsn: sentryDSN,
    release: `${name}@${version}`,
    integrations: [ new BrowserTracing() ],
    tracesSampleRate: 1.0,
  });
};

const MyApp = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>

        {useAnalytics()}
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

const target = document.querySelector('#root');
const root = ReactDOM.createRoot(target);

root.render(MyApp);