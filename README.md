# About

**View app**: https://front-end-template.netlify.app

This project is created with Vite and bolstered with
features that enable you to quickly get up and running with a highly scalable, production-ready, web app.

The app contains the following features to get you started:

**Front-end**:<br />
* Routing.
* Global state management (Redux).
* `mirage` for mocking back-end responses in development while the production endpoint is being developed.
* Account creation, authentication and password reset routes, and forms, with manual/auto log out.
* Feature flags.
* Front-end middleware support for global state updates.
* Notification system &mdash; dispatch from front-end to send UI feedback or send from your back-end to convey server feedback.
* `styled-components` for clean, conflict-free, and dynamic component styling.
* Preset ES Lint rules to keep the code-base standardized and free of tech debt.
* `testing-library` with `jest` for unit testing.
* Design systems and components for themes, typography and layout.

Feel free to clone, modify and start your own projects with this template.



# Getting up and running

> **NPM users**: You will need to remove *yarn.lock* and *.yarnrc.yml* and change the deploy script in *package.json* from:<br />
> `"deploy": "yarn build && netlify deploy --prod",`<br />
> to:<br />
> `"deploy": "npm run build && netlify deploy --prod",`


1. Clone the repo.
2. Add *.env* to the project root with the following variables:
    ```
    VITE_NAME=''
    VITE_SENTRY_DSN=''
    VITE_ANALYTICS_ID=''
    VITE_API_URL='/[your server path]/api/v1'
    ```

3. In terminal, run `cd /path/to/project` then `yarn set version berry` (if not on a modern version of yarn already), followed by `yarn`.
For NPM users, run `npm i` in the project directory.
4. Finally, run `yarn start` or `npm run start`.



# Organization

The structure of this template is as follows:
* **components**: Reusable components.
* **controllers**: Front-end controllers, i.e. front-end routing.
* **helpers**: Utility related functions.
* **middleware**: Front-end middleware.
* **modules**: Anything Redux related.
* **scenes**: Main route components.
* **static**: Custom SVG, fonts or image files.
* **theme**: Theme related configuration files.
* **utility**: Library functions to assist with app development (`mirage`, `featureFlags`, etc.)

**Note**: Absolute pathing for JavaScript module imports has been added with *jsconfig.json* and
`plugins: [ ...plugins, jsconfigPaths() ]` in `vite.config.js`.



# Testing

`npm run test` can be used to run all compatible test files.  *React Testing Library* and *Jest*
are used, and only require the name *[componentName].test.jsx*.



# Routing

Routing is handled with *react-router-dom*.  The *App* is wrapped in `<BrowserRouter />` tags in *main.jsx* and
*App.jsx* makes use of the `<Routes />` tag to receive all rendered route components from the `makeRoutes()` function in the routes controller.


### Adding or editing a route
*controllers/routesController.jsx* defines all routes to be rendered along with
the appropriate component, and whether that route requires authentication.

Routes are public by default.  If a route requires authentication for access, add **authenticate** to the route object:
```jsx
// controllers/routesController.jsx
const routes = [
  {
    // Private route example
    path: "/authenticated-route",
    element: <p>Authenticated Content</p>,
    authenticate: true,
  },
];
```

When you pass **authenticate**, the `makeRoutes()` function will require the JSON Web Token as the first argument, or access to the route will be denied.
In the event that denial &mdash; due to a missing authToken, or invalid authToken &mdash; occurs, the user will be redirect to "/login" by default.  If your authentication page is not "/login" a second path string can be passed to override the default redirect path: `makeRoutes(authToken, "/your-login-route")`.

See the the full route controller and build function in *controllers/routesController.jsx*.

> *[[redirects]]* in `netlify.toml` forces the server to always return 200, OK so that *react-router-dom* can handle catching any 404 routes.

The relevant routing code has been included in this example and full implementation can be found in *scenes/App/App.jsx*:
```jsx
// scenes/App/App.jsx
import { makeRoutes } from 'helpers';

const App = props => {
const renderApp = () => {
    return (
      <MainContent>
        <Routes>
          {makeRoutes(token)}
        </Routes>
      </MainContent>
    );
  };
};
```





# Utility and Integration

## Feature Flags
A basic feature flag object has been added in *featureFlags.jsx*.  You can expand this object or integrate it into your build pipeline,
however you see fit, to control features for different environments or deployments.

The following can be found in *flags.jsx*:
```jsx
const flags = {
  features: {
    maintenance: false,
  }
};

export { flags };
```

You can use the feature flags in the front-end by importing, declaring and conditionally rendering:
```jsx
import flags from 'featureFlags';

const Component = props => {
  const { features: { maintenance } } = flags;

  const buildContent = () => {
    if (maintenance) {
      return <p>Maintenance content</p>
    }

    return <p>Normal content</p>;
  };

  return (
    <div>
      {buildContent}
    </div>
  );
};

export default Component;
```



## Mirage

Mock back-end responses and data structure can be created with `mirage`.  This is set up for development environments only.

You can configure the `mirage` server with any mock endpoints, passthroughs or namespaces etc. in *utility/mirage.jsx*.
Please see [miragejs.com](https://miragejs.com) for more info.



## Analytics

Google Analytics is implemented and will automatically begin sending data to the Google Analytics service once a value has been provided for `VITE_ANALYTICS_ID=''`
in `.env`.  Please see [React Google Analytics](https://github.com/react-ga/react-ga) for more info.



## Monitoring

Monitoring is handled with *Sentry* and is set up in *main.jsx*.  You will need your DSN, provided by Sentry.
Your DSN should be stored as VITE_SENTRY_DSN in *.env*

If you do not wish to use *Sentry*, remove the package along with the import and environment conditional and `startErrorMonitoring()` function and initialization call in *main.jsx*.



## Heartbeat

Should the internet connection fail while the user is using your app, the application will alert the user that the internet connection has failed.
Once the connection is restored, the app will continue rendering normally.  This is handled with a custom `<Heartbeat />` component that wraps the main
app in *main.jsx*.  It is disabled in development and also takes a `time={}` prop (in seconds) to control the interval it checks the connection in production.

**Note**: This component comes from `xerum` and has additional props.  Pleae see the [Xerum: Heartbeat](https://xerum.netlify.app/#heartbeat) for full usage.


# Themes and Fonts
## Themes

This template was built with `styled-components`.  It maintains unique class names on all of your components for a conflict-free styling experience.
Furthermore, it works with React's `props` to generate dynamic styles or to inject CSS mixins.

Themes are defined, and can be configured, in *theme/theme.jsx*.  Here you will find an object of all colors used in the project, as well as configurations
for light and dark themes.  The `theme` object is passed to the `<ThemeProvider theme={theme} />` component from `styled-components`, which wraps the main
app in `main.jsx` &mdash; this makes the theme object available, via `props` to any component that is wrapped using `withTheme` from `styled-components`.



## Custom Fonts

By default, **Inter**, **Inter-SemiBold** and **Inter-Bold** are included in `static/fonts/primary` &mdash; and additional folder for *secondary* fonts is
provided if your project requires more than a primary font face.

If you are adding a secondary font, or replacing the default font files -- you will also need to define those new font faces in `fontFaces.css`.  Additionally,
you will need to add the font names, exactly, to `controllers/fontsController.jsx` -- now the `GlobalStyles` component in `scenes/App/styles.jsx` and all
typography components in `components/Typography` will automatically read the new primary font files.

If you need your headers, for example, to use the secondary font, open any `<H# />` component in `components/Typography` and change
`fonts?.primary?.bold` to be `fonts?.secondary?.bold` -- or whatever your desired weight is.  You may also need to expand the
`getFontFamily()` function in *fontHelpers.jsx* to account for secondary font cases.

**Note**: The `getFontFamily()` function is used to dynamically use the desired font-face in the `<Font />` and other Typography components.



## About Font Awesome
By default, **@fortawesome/fontawesome-free** is used. If this is all you need, then there is nothing further for you to do.

If you have a pro license, you'll need to do the following:
1. `yarn remove @fortawesome/fontawesome-free`.
2. Set a persistent system environment variable called *FONT_AWESOME_AUTH_TOKEN*. You can do this in Terminal by doing the folowing:

```
cd /etc/profile.d
sudo touch font_awesome_auth_token.sh
sudo gedit font_awesome_auth_token.sh

# Add the following in the editor:
# export FONT_AWESOME_AUTH_TOKEN=[Your-license-token]
# Save and exit the editor
# Restart
```

3. `yarn add @fortawesome/fontawesome-pro`
4. Change the import in *main.jsx* to `import '@fortawesome/fontawesome-pro/css/all.css';`

As a quick mention, the `.yarnrc.yml` file is already configured for pro licenses and responsible for pointing to the registry server so you don't get a package not found error:
```yml
nodeLinker: node-modules
npmScopes:
  fortawesome:
    npmRegistryServer: "https://npm.fontawesome.com/"
    npmAlwaysAuth: true
    npmAuthToken: ${FONT_AWESOME_AUTH_TOKEN}
```

> **NPM users**: Add `.npmrc` with the following:
> ```
> @fortawesome:registry=https://npm.fontawesome.com/
> //npm.fontawesome.com/:_authToken=[Your-license-token]
> ```



# State Management

State is handled with Redux.

## About the Reducer
The Reducer takes an initial state object and action.  You can find the `actionCreator()` function, along with
other state helpers and custom hooks (like `useDispatch()` or `useSelector()`) in *helpers/stateHelpers.jsx*.
The action creator passes an object with `{ type, payload }` to the reducer, where the reducer's *switch* statement
reads the `action.type` and updates state accordingly.

### About State Management
I have made an npm package that handles state updates in an immutable manner, see [state-wrangler](https://github.com/MikelMNJ/state-wrangler) for
details on how to use this. If you would rather use a library such as *immutableJS* you can swap `state-wrangler` out for that.


The following can be found in *modules/appReducer.jsx*:
```jsx
import StateManager from 'state-wrangler';
import constants from './appConstants';
import _ from 'lodash';

const initial = {
  [constants.STATE_KEY_NOTIFICATIONS]: [],
};

const reducer = (initialState = initial, action = {}) => {
  const { meta, payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case constants.SAMPLE_ACTION:
      return state.update(constants.STATE_KEY_SAMPLE_SELECTOR, payload);

    case constants.ADD_NOTIFICATION:
      const notifications =  state.get(constants.STATE_KEY_NOTIFICATIONS);
      const exists = notifications?.find(notification => _.isEqual(notification, payload));

      return !exists ? state.add(constants.STATE_KEY_NOTIFICATIONS, payload) : initialState;

    case constants.REMOVE_NOTIFICATION:
      const index = payload;
      return state.remove(constants.STATE_KEY_NOTIFICATIONS, index);

    case constants.SAMPLE_API_CALL:
      return state.update(constants.STATE_KEY_SAMPLE_API_RESPONSE, payload);

    case constants.SEND_EMAIL:
      return state.update(constants.STATE_KEY_EMAIL_RESPONSE, payload);

    case constants.SET_GLOBAL_BANNER_CONTENT:
      return state.add(constants.STATE_KEY_GLOBAL_BANNER_CONTENT, payload);

    default:
      return initialState;
  }
};

export default reducer;
```

**Note**: It's recommended to create a new folder in *modules* for each section or page of your app. These other reducers, actions, selectors etc. will keep things scalable and manageable.
Don't forget to add any new reducers in *store.jsx* &mdash; they should be added to `const reducers = {}`.



## About Actions and Selectors
Actions and Selectors are defined in objects for their specific module &mdash; the following can be found in *modules/appConstants.jsx*, *modules/appActions.jsx* and *modules/appSelectors.jsx*:
```jsx
// appConstants.jsx
const constants = {
  // Actions
  SAMPLE_ACTION: "modules/app/SAMPLE_ACTION",
  ADD_NOTIFICATION: "modules/app/ADD_NOTIFICATION",
  REMOVE_NOTIFICATION: "modules/app/REMOVE_NOTIFICATION",
  SET_GLOBAL_BANNER: "modules/app/SET_GLOBAL_BANNER",
  SEND_EMAIL: "modules/app/SEND_EMAIL",
  SAMPLE_API_CALL: "modules/app/SAMPLE_API_CALL",

  // Selectors
  STATE_KEY_SAMPLE_SELECTOR: "sampleSelector",
  STATE_KEY_NOTIFICATIONS: "notifications",
  STATE_KEY_GLOBAL_BANNER_CONTENT: "globalBannerContent",
  STATE_KEY_EMAIL_RESPONSE: "emailResponse",
  STATE_KEY_SAMPLE_API_RESPONSE: "sampleAPIResponse",
};
```

```jsx
// appActions.jsx
const appActions = {
  // Simple actions, directly updates the reducer.
  sampleAction: payload => actionCreator(constants.SAMPLE_ACTION, payload),
  addNotification: payload => actionCreator(constants.ADD_NOTIFICATION, payload),
  removeNotification: payload => actionCreator(constants.REMOVE_NOTIFICATION, payload),
  setGlobalBannerContent: payload => actionCreator(constants.SET_GLOBAL_BANNER_CONTENT, payload),

  // API actions go through middleware, then passes the server res.json() back to the reducer, as payload.
  sendEmail: (payload, callback) => {
    const args = { type: constants.SEND_EMAIL, payload,  callback };
    return api.sendEmail(args);
  },

  sampleAPICall: (payload, callback) => {
    const args = { type: constants.SAMPLE_API_CALL, payload,  callback };
    return api.sampleAPICall(args);
  },
};
```

```jsx
// appSelectors.jsx
const appSelectors = {
  // state.app with "app" being the reducer's imported name in store.jsx
  // This will need to be changed according to the reducer you are working with/targeting.
  sampleSelector: state => state.app[constants.STATE_KEY_SAMPLE_SELECTOR],
  notifications: state => state.app[constants.STATE_KEY_NOTIFICATIONS],
  emailResponse: state => state.app[constants.STATE_KEY_EMAIL_RESPONSE],
  sampleAPIResponse: state => state.app[constants.STATE_KEY_SAMPLE_API_RESPONSE],
  globalBannerContent: state => state.app[constants.STATE_KEY_GLOBAL_BANNER_CONTENT],
}
```

**Calling a simple action or reading a state selector from a component**<br />
The process of using an action/selector to update or read from a targeted reducer is identical to *Redux*.
A more complete example can be found in *scenes/DeleteMe/CheckState.jsx*:
```jsx
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'helpers/stateHelpers';
import appActions from 'modules/app/appActions';
import appSelectors from 'modules/app/appSelectors';

const YourComponent = props => {
  // Sample actions/selectors from global state...
  const dispatch = useDispatch();
  const sampleAction = useCallback(payload => dispatch(appActions?.sampleAction(payload)), [dispatch]);
  const sampleSelector = useSelector(state => appSelectors?.sampleSelector(state));

  useEffect(() => {
    if (!sampleSelector) {
      sampleAction("New value from global state!");
    }
  }, [sampleSelector, sampleAction]);

  return (
    <div>
      {sampleSelector || "No state key value."}
    </div>
  );
};

export default YourComponent;
```

**Calling an API action**
API actions are called in the same way as above, but can be passed a callback function as the second argument.  This callback function
will be executed after the server responds.

Below is an example of how an API action is called, note the use of the secondary *callback* argument.
A more complete example of this can be found in *scenes/DeleteMe/CheckAPI.jsx*:
```jsx
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'helpers/stateHelpers';
import appActions from 'modules/app/appActions';
import appSelectors from 'modules/app/appSelectors';

const YourComponent = props => {
  const dispatch = useDispatch();

  // Actions/Selectors
  const sampleAPIResponse = useSelector(state => appSelectors.sampleAPIResponse(state));
  const sampleAPICall = useCallback((payload, callback) => (
    dispatch(appActions.sampleAPICall(payload, callback))
  ), [dispatch]);

  useEffect(() => {
    if (!sampleAPIResponse) {
      const payload = { myKey: "I'm sending this to the server." };
      const callback = res => console.log("I'm running this on 200, OK!", res);

      sampleAPICall(payload, callback);
    }
  }, [sampleAPIResponse]);

  return null;
};

export default YourComponent;
```

The difference between a simple action call is that there is an additional *modules/app/appApi.jsx* file, imported as *api* in *modules/app/appActions.jsx*,
that describes everything the middleware needs to make the call.  Anything you would normally write to make an API call is valid in this object: `headers: {}`,
`body: JSON.stringify(payload)` etc.

There are extra keys the middleware will use that you should be aware of:
  * **type**, this is the `action.type` dispatch will need.
  * **onSuccess**, executes your callback only after 200 response.
  * **onFail**, executes your callback for anything >= 400 response.
  * **onComplete**, executes your callback after call is complete, regardless of response code.
  * **meta**, passes additional data for use in the reducer &mdash; accessible in the reducer with `action.meta`.

```jsx
// modules/app/appApi.jsx
export const sampleAPICall = args => {
  const { type, callback } = args;

 return {
    type,
    path: "/test",
    method: "GET",
    onSuccess: res => callback?.(res),
    onFail: res => callback?.(res),
    onComplete: () => console.log("Call complete."),
    meta: null,
  };
};
```



## About Middleware and Afterware
A middleware function is used to execute something prior to the reducer's state update.  Afterware is much the same, but runs after the state update has occured.
Middleware and afterware can be added to the arrays of the same name in *store.jsx*, example: `const middlewares = [ apiMiddleware ];`

An example of middleware that this app uses can be found when any API action is called. Please see *wares/apiMiddleware.jsx* for the full example, including the `apiRelay()` function:
```jsx
const apiMiddleware = (dispatch, action) => {
  if (action) {
    const isAPIRequest = action.path || action.method;

    if (isAPIRequest) {
      apiRelay({ ...action, dispatch });
      return;
    }

    dispatch(action);
  }
};
```

A modified version of `useReducer()` is being used to handle the injection of these wares and can be found in *helpers/stateHelpers.jsx*:
```jsx
export const useReducerWithWares = args => {
  const { rootReducer, initialState, middlewares, afterwares } = args;
  const [ state, dispatch ] = useReducer(rootReducer, initialState);
  const actionRef = useRef();

  const dispatchWithMiddleware = action => {
    middlewares?.forEach(middleware => middleware(dispatch, action, state));
    actionRef.current = action;
  };

  useEffect(() => {
    if (!actionRef.current) return;
    afterwares?.forEach(afterware => afterware(dispatch, actionRef.current, state));
    actionRef.current = null;
  }, [afterwares, state]);

  return [ state, dispatchWithMiddleware ];
};
```

Please see the **About store.jsx** section to see this implemented.


## About store.jsx
Now that the reducer has been explored with constants/actions/selectors defined and used in components, let's take a look at the heart of it all &mdash; the store.

In a nutshell:
* Create state by creating *Context* for our app.
* Set up the ability to use that context with a *useStore* variable.
* Create `useSelector()` and `useDispatch()` hooks found in *helpers/stateHelpers.jsx* with *useStore*.
* Import all reducers from the *modules* folder and store in the `reducers = {}` object &mdash; think of this as an object containing all our modules.
* Loop through all reducers asking for their initial state object.
* Loop through all reducers and combine them, as functions, letting each manage their own "module" of state.
* Add any middleware/afterware to appropriate arrays.
* Call modified `useReducerWithWares()` to get the complete state object, execute wares as well as get the dispatch function.
* Memoize the array to prevent every subscribed component from updating if it's "module" hasn't been updated.
* Pass the final `{ state, dispatch }` object to the `<AppContext.Provider />`.
* Wrap `<App />` in *main.jsx* with `<AppProvider />`

And that completes the Redux-like global state management flow!

The following can be found in *store.jsx*:
```jsx
import React, { createContext, useContext, useMemo } from 'react';
import { makeInitialState, combineReducers, useReducerWithWares } from 'helpers/stateHelpers';
import app from 'modules/app/appReducer';
import apiMiddleware from 'wares/apiMiddleware';

export const AppContext = createContext();
AppContext.displayName = "AppContext";

export const useStore = () => useContext(AppContext);

const reducers = {
  app,
};

const initialState = makeInitialState(reducers);
const rootReducer = combineReducers(reducers);
const middlewares = [ apiMiddleware ];
const afterwares = [];

// How to use: wrap <App /> in main.jsx with <AppProvider />
// See 'modules' for reducer and associated state actions/selectors.
// See 'helpers/stateHelpers' for custom hooks, action creator and StateManager methods.

export const AppProvider = ({ children }) => {
  const reducerArgs = { rootReducer, initialState, middlewares, afterwares };
  const [ state, dispatch ] = useReducerWithWares(reducerArgs);
  const memoized = useMemo(() => [ state, dispatch ], [state, dispatch]);
  const store = { state: memoized[0], dispatch: memoized[1] };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
};
```



# Adding a Site-Wide Banner Message

A banner alert system is included by default in *scenes/App.jsx*.  There is nothing you need to do in this file, but here is the relevant setup, for reference:

```jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'helpers/stateHelpers';
import appSelectors from 'modules/app/appSelectors';
import Banner from 'components/Banner/Banner';

const App = props => {
  const [ showBanner, setShowBanner ] = useState(true);
  const dispatch = useDispatch();

  // Actions and Selectors
  const globalBannerContent = useSelector(state => appSelectors.globalBannerContent(state));

  return (
    <div id="app">
      {globalBannerContent && showBanner && (
        <Banner center text={globalBannerContent} callback={() => setShowBanner(false)} />
      )}
    </div>
  );
};
```

To have the banner show, you will need to invoke the action from state in your component as follows:
```jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'helpers/stateHelpers';
import appActions from 'modules/app/appActions';
import appSelectors from 'modules/app/appSelectors';

const YourComponent = props => {
  const dispatch = useDispatch();

  // Actions/Selectors
  const globalBannerContent = useSelector(state => appSelectors.globalBannerContent(state));
  const setGlobalBannerContent = payload => dispatch(appActions.setGlobalBannerContent(payload));

  useEffect(() => {
    if (!globalBannerContent) {
      setGlobalBannerContent("New site-wide banner alert message!");
    }
  }, [globalBannerContent]);

  return (
    <div>
      Other component content...
    </div>
  );
};
```



# Deployment

> **NPM users**: Make sure you've updated your *package.json* scripts to use `npm run ...` instead of `yarn ...`.  Also
> update the *netlify.toml* build command from `command = "yarn build"` to `command = "npm run build"`.

Continuous Integration/Deployment is handled with Netlify.  The script for this can be found in *package.json*
and the command is `yarn deploy`.  You will need to have *netlify-cli* installed:
`yarn add global netlify-cli` or `npm install netlify-cli -g`

Once installed, make sure you are logged in with `netlify login` and perform a link to the netlify site with `netlify link`.
Follow the instructions to link to your site ID.  You can set up web-hooks on Netlify/GitHub for auto deployment
if changes to main have been pushed etc.

**Reminder**: Don't forget to change the publish directory in Netlify's deployment settings to match the *netlify.toml* file ("build").
Also, add your environment variables in Netlify's *Site settings > Build  and deploy > Environment* section:
* VITE_NAME
* VITE_API_V1
* VITE_SENTRY_DSN
