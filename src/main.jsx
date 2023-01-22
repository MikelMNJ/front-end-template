import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserTracing } from '@sentry/tracing';
import { ThemeProvider } from 'styled-components';
import { Heartbeat } from 'xerum';
import { RouteChangeTracker } from 'components';
import { store } from 'store';
import { theme } from 'theme';
import { AppWrapper } from 'scenes';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/react';
import _ from 'lodash';

import '@fortawesome/fontawesome-free/css/all.css';
import './fontFaces.css';

const {
  NODE_ENV,
  VITE_SENTRY_DSN: sentryDSN,
  VITE_ANALYTICS_ID: analyticsID,
} = process.env;

const inProduction = NODE_ENV === 'production';

const startApp = async () => {
  if (!inProduction) {
    await import ('./utility/mirage');
  }

  const startAnalytics = () => {
    if (!_.isEmpty(analyticsID) && inProduction) {
      ReactGA.initialize(analyticsID);
      return <RouteChangeTracker />;
    }
  };

  const startErrorMonitoring = () => {
    if (inProduction && !_.isEmpty(sentryDSN)) {
      Sentry.init({
        dsn: sentryDSN,
        integrations: [ new BrowserTracing() ],
        tracesSampleRate: 1.0,
      });
    }
  };

  startAnalytics();
  startErrorMonitoring();

  const MyApp = (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Heartbeat disabled={!inProduction}>
              <AppWrapper />
            </Heartbeat>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );

  const target = document.querySelector('#root');
  const root = ReactDOM.createRoot(target);

  root.render(MyApp);
};

startApp();