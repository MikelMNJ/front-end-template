# About

**View app**: https://front-end-template.netlify.app

This project is created with Vite and bolstered with
features that enable you to quickly get up and running with a highly scalable, production-ready, web app.

The app contains the following features to get you started:

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
    VITE_APP_NAME=''
    VITE_SENTRY_DSN=''
    VITE_SENTRY_ORG=''
    VITE_SENTRY_PROJECT=''
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

Routing is handled with *react-router-dom*.  The *App* is wrapped in `<BrowserRouter />` in *main.jsx* and
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

### Feature Flags
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

### Mirage

Mock back-end responses and data structure can be created with `mirage`.  This is set up for development environments only.

You can configure the `mirage` server with any mock endpoints, passthroughs or namespaces etc. in *utility/mirage.jsx*.
Please see [miragejs.com](https://miragejs.com) for more info.



### Analytics

Google Analytics is implemented and will automatically begin sending data to the Google Analytics service once a value has been provided for `VITE_ANALYTICS_ID=''`
in *.env* &mdash; please see [React Google Analytics](https://github.com/react-ga/react-ga) for more info.



### Monitoring

Monitoring is handled with [Sentry](https://sentry.io) and is set up in *main.jsx*.  It is disabled for development, but will automatically begin monitoring for errors when a value is provided for `VITE_SENTRY_DSN=''` in *.env*

If you don't want to use *Sentry*, remove the package along with the import and environment conditional and `startErrorMonitoring()` function + initialization call in *main.jsx*.



### Heartbeat

If the internet connection fails while a user is using your app, the application will alert the user that the internet connection has failed.
Once the connection is restored, the app will continue rendering normally.  This is handled with a custom `<Heartbeat />` component that wraps the main
app in *main.jsx*.  It is disabled in development and also takes a `time={}` prop (in seconds) to control the interval it checks the connection in production.

**Note**: This component comes from `xerum` and has additional props.  Pleae see the [Xerum](https://xerum.netlify.app) for full usage.


# Themes, Fonts and Layout
### Themes

This template was built with `styled-components`.  It maintains unique class names on all of your components for a conflict-free styling experience.
Furthermore, it works with React's `props` to generate dynamic styles or to inject CSS mixins.

Themes are defined, and can be configured, in *theme/theme.jsx*.  Here you will find an object of all colors used in the project, as well as configurations
for light and dark themes.  The `theme` object is passed to the `<ThemeProvider theme={theme} />` component from `styled-components`, which wraps the main
app in *main.jsx* &mdash; this makes the theme object available, via `props` to any component that is wrapped using `withTheme` from `styled-components`.

Please see [Styled Components](https://styled-components.com/) for more info.



### Custom Fonts

By default, **Inter**, **Inter-SemiBold** and **Inter-Bold** are included in `static/fonts/primary` &mdash; there is also an additional folder for *secondary* fonts
if your project requires more than a primary font face.

If you are adding a secondary font, or replacing the default font files &mdash; you will also need to define those new font faces in `fontFaces.css`.  Additionally,
you will need to add the font names, exactly, to `controllers/fontsController.jsx` &mdash; now the `GlobalStyles` component in `scenes/App/styles.jsx` and all
typography components in `components/Typography` will automatically read the new primary font files.

If you need your headers, for example, to use the secondary font, open any `<H# />` component in `components/Typography` and change
`fonts?.primary?.bold` to be `fonts?.secondary?.bold` &mdash; or whatever your desired weight is.  You may also need to expand the
`getFontFamily()` function in *fontHelpers.jsx* to account for secondary font cases.

**Note**: The `getFontFamily()` function is used to dynamically use the desired font-face in the `<Font />` and other Typography components.



### Layout

The `<Layout />` component (`import { Layout } from 'components';`), limits child content to a max width defined as layoutWidth in *modules/app/appConstants.jsx*.

It can also use *Flexbox* to display it's children as inline elements, with even spacing between each child element using `<Layout inline={true} />`.

You can use `<Layout center={true} />` if you need the layout element center justified in its parent. This approach is the default alternative to a Grid system.

**Note**: The custom `<P />` tag (`import { P } from 'components';`), has a max width built in to assist with blocks of text that may exceed the best practice of 9-12 words per line.



### About Font Awesome
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



# Adding a Site-Wide Banner Message
A banner alert system is included by default in *scenes/App/Header.jsx*.  There is nothing you need to do in this file, but here is the relevant setup, for reference:

```jsx
import React, { useEffect } from 'react';
import { Banner } from 'xerum';

const YourComponent = props => {
  // These props should come from your HOC wrapper component.
  const { theme, selectedTheme, bannerContent } = props;
  const [ showBanner, setShowBanner ] = useState(true);

  return (
    <header>
      {bannerContent && showBanner && (
        <Banner
          theme={theme}
          selectedTheme={selectedTheme}
          center={true}
          sharp={true}
          textColor={theme.colors.shades.white}
          callback={() => setShowBanner(false)}
        >
          <Font weight='semibold'>
            {bannerContent}
          </Font>
        </Banner>
      )}
    </header>
  );
};
```

To have the banner show, you will need to invoke the action from state in your component as follows:

```jsx
import React, { useEffect } from 'react';

const YourComponent = props => {
  // These props should come from your HOC wrapper component.
  const { bannerContent, setBannerContent } = props;

  useEffect(() => {
    if (!globalBannerContent) {
      setBannerContent("New site-wide banner alert message!");
    }
  }, [ globalBannerContent ]);

  return (
    <div>
      Other component content...
    </div>
  );
};
```


# State Management with Redux

## About the Reducer
The Reducer takes an initial state object and action.  You can find the `actionCreator()` function, along with
other state helpers, in *helpers/stateHelpers.jsx*.
The action creator passes an object with `{ type, payload }` to the reducer, where the reducer's *switch* statement
reads the `action.type` and updates state accordingly.

### About State Management
I have made an npm package that handles state updates in an immutable manner, see [state-wrangler](https://github.com/MikelMNJ/state-wrangler) for
details on how to use this. If you would rather use a library such as *immutableJS* you can swap `state-wrangler` out for that.


The following can be found in *modules/appReducer.jsx*:
```jsx
import { appConstants } from 'modules';
import { updateLocalStorage, getLocalStorageSetting, notificationExists } from 'helpers/utilityHelpers';
import StateManager from 'state-wrangler';

const { actions, selectors, themes } = appConstants;
const savedTheme = getLocalStorageSetting(selectors.STATE_KEY_SELECTED_THEME);

const initial = {
  [selectors.STATE_KEY_SELECTED_THEME]: savedTheme || themes.light,
  [selectors.STATE_KEY_NOTIFICATIONS]: [],
  [selectors.STATE_KEY_BANNER_CONTENT]: null,
};

const appReducer = (initialState = initial, action = {}) => {
  const { payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case actions.SET_THEME:
      updateLocalStorage(selectors.STATE_KEY_SELECTED_THEME, payload);
      return state.update(selectors.STATE_KEY_SELECTED_THEME, payload);

    case actions.SET_BANNER_CONTENT:
      return state.add(selectors.STATE_KEY_BANNER_CONTENT, payload);

    case actions.ADD_NOTIFICATION:
      return !notificationExists(state, payload, selectors.STATE_KEY_NOTIFICATIONS)
        ? state.add(selectors.STATE_KEY_NOTIFICATIONS, payload)
        : initialState;

    case actions.REMOVE_NOTIFICATION:
      return state.remove(selectors.STATE_KEY_NOTIFICATIONS, payload);

    case actions.CLEAR_NOTIFICATIONS:
      return state.update(selectors.STATE_KEY_NOTIFICATIONS, []);

    case actions.SET_MODAL_VISIBLE:
      return state.update(selectors.STATE_KEY_MODAL_VISIBLE, payload);

    default:
      return initialState;
  }
};

export { appReducer };
```

The above reducer uses simple actions.  If you are making use of API calls, you must be explicit in updating store values at specific points in the API call.  Consider the following from
*modules/auth/authReducer.jsx*:

```jsx
import { appConstants } from 'modules/app/appConstants';
import { authConstants } from 'modules/auth/authConstants';
import { updateLocalStorage, request } from 'helpers';
import StateManager from 'state-wrangler';

const { actions, selectors } = authConstants;
const { tokenKeyName } = appConstants;

const initial = {};

const authReducer = (initialState = initial, action = {}) => {
  const { payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case request(actions.CHECK_TOKEN).start:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    case request(actions.CHECK_TOKEN).success:
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case request(actions.CHECK_TOKEN).complete:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    default:
      return initialState;
  }
};

export { authReducer };
```

You'll see the `requestHelper()` communicates with `apiMiddleware()` as each API call is made, and returns the status of the call along the way to the reducer.  This gives fine control
over when to update the store and with what values, i.e. loading resource states, as shown above.  You must use the `request()` helper for API actions &mdash; this is by design.  The
`apiMiddleware()` is looking for this to know how to direct it's response to the store &mdash; store actions that go through `apiMiddleware()` will fail if it is not passed through the
`request()` helper.  This is also a clear way to distinguish simple store actions from API calls when glancing at the code.

**Note**: It's recommended to create a new folder in *modules* for each section or page of your app. These other reducers, actions, selectors etc. will keep things scalable and manageable.
Don't forget to add any new reducers in *reducersController.jsx*`. **Do not add them in store.jsx**



### About Actions and Selectors
Actions and Selectors are defined in objects for their specific module &mdash; the following can be found in *modules/appConstants.jsx*, *modules/appActions.jsx* and *modules/appSelectors.jsx*:
```jsx
// appConstants.jsx
const constants = {
  actions: {
    SET_THEME: 'modules/app/SET_THEME',
    SET_BANNER_CONTENT: 'modules/app/SET_BANNER_CONTENT',
    ADD_NOTIFICATION: 'modules/app/ADD_NOTIFICATION',
    REMOVE_NOTIFICATION: 'modules/app/REMOVE_NOTIFICATION',
    CLEAR_NOTIFICATIONS: 'modules/app/CLEAR_NOTIFICATIONS',
    SET_MODAL_VISIBLE: 'modules/app/SET_MODAL_VISIBLE',
  },

  selectors: {
    STATE_KEY_SELECTED_THEME: 'selectedTheme',
    STATE_KEY_BANNER_CONTENT: 'bannerContent',
    STATE_KEY_NOTIFICATIONS: 'notifications',
    STATE_KEY_MODAL_VISIBLE: 'modalContent',
  },
};
```

```jsx
// appActions.jsx
import { actionCreator } from 'helpers';
import { appConstants } from 'modules';

const appActions = {
  setTheme: payload => actionCreator(appConstants.actions.SET_THEME, payload),
  setBannerContent: payload => actionCreator(appConstants.actions.SET_BANNER_CONTENT, payload),
  addNotification: payload => actionCreator(appConstants.actions.ADD_NOTIFICATION, payload),
  removeNotification: payload => actionCreator(appConstants.actions.REMOVE_NOTIFICATION, payload),
  clearNotifications: () => actionCreator(appConstants.actions.CLEAR_NOTIFICATIONS),
  setModalContent: payload => actionCreator(appConstants.actions.SET_MODAL_VISIBLE, payload),
};

export { appActions };
```

```jsx
// appSelectors.jsx
import { appConstants } from 'modules';

const { selectors } = appConstants;

const appSelectors = {
  selectedTheme: state => state.app[selectors.STATE_KEY_SELECTED_THEME],
  bannerContent: state => state.app[selectors.STATE_KEY_BANNER_CONTENT],
  notifications: state => state.app[selectors.STATE_KEY_NOTIFICATIONS],
  modalContent: state => state.app[selectors.STATE_KEY_MODAL_VISIBLE],
};

export { appSelectors };
```

### About Higher Order Component Wrappers
> It is strongly recommended to not deviate from this pattern!  You will need to create a Wrapper component for every main
> component that is returned from a route, or as needed.

Higher order components are used to house all logic related to declaring and using actions or selectors.  Additionally,
the wrapper component handles passing `theme`, via `withTheme` from `styled-components`.  The benefit of this workflow is
your component remains clean of all global state logic, and your state logic is now located in one central place for that component.

Redux's `connect()` method is responsible for combining all mapped actions, selectors and theme items and passing them along
to the specified component for use in `props`. Here is the main `AppWrapper.jsx` file found in `scenes/App`:

```jsx
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import { App } from 'scenes';
import {
  appSelectors,
  appActions,
  authSelectors,
  authActions,
  rootActions,
} from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
    bannerContent: appSelectors.bannerContent(state),
    notifications: appSelectors.notifications(state),
    userInfo: authSelectors.userInfo(state),
    userInfoLoading: authSelectors.userInfoLoading(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    setTheme: payload => dispatch(appActions.setTheme(payload)),
    addNotification: payload => dispatch(appActions.addNotification(payload)),
    removeNotification: payload => dispatch(appActions.removeNotification(payload)),
    checkToken: payload => dispatch(authActions.checkToken(payload)),
    logout: () => dispatch(rootActions.logout()),
  };
};

const Component = withTheme(App);
const AppWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { AppWrapper };
```



### Calling an API Action
API actions can be passed a `callbacks` function containing `onSuccess`, `onFail` and `onComplete` functions.
These callback functions will be executed as their names imply, by `middleware/apiMiddleware.jsx`.

```jsx
import React, { useEffect } from 'react';

const YourComponent = props => {
  // These props should come from your HOC wrapper component.
  const { sampleAPIResponse, sampleAPICall } = props;

  useEffect(() => {
    if (!sampleAPIResponse) {
      const payload = { myKey: "I'm sending this to the server." };
      const callbacks = {
        onSuccess: res => console.log("I'm running this on 200, OK!", res),
        onFail: res => console.log("Call has failed."),
        onComplete: res => console.log("Call is complete"),
      };

      sampleAPICall(payload, callbacks);
    }
  }, []);

  return null;
};

export { YourComponent };
```

The difference between a API actions and simple action calls to the store, is an additional API file (see *modules/auth/appApi.jsx*),
imported as *api* (see *modules/auth/authActions.jsx*), that describes everything the middleware needs to make the call.
Anything you would normally write to make an API call is valid in this object: `headers: {}`,
`body: JSON.stringify(payload)` etc.

There are extra keys the middleware will use that you should be aware of:
  * **type**, this is the `action.type` dispatch will need.
  * **callbacks**, this is the object containing your `onSuccess`, `onFail` and `onComplete` functions.
    * **onSuccess**, executes your callback only after 200 response.
    * **onFail**, executes your callback for anything >= 400 response.
    * **onComplete**, executes your callback after call is complete, regardless of response code.
  * **meta**, passes additional data for use in the reducer &mdash; accessible in the reducer with `action.meta`.

```jsx
// modules/auth/authApi.jsx
export const sampleAPICall = args => {
  const { type, payload, callbacks } = args;

 return {
    type,
    path: "/test",
    method: "GET",
    meta: null,
    ...callbacks,
  };
};
```

### About Middleware
A middleware function is used to execute something prior to the reducer's state update.
Middleware can be added to the arrays of the same name in *store.jsx*, example: `const middleware = [ apiMiddleware ];`

An example of middleware that this app uses can be found when any API action is called. Please see *middleware/apiMiddleware.jsx* for the full example, including the `apiRelay()` function:
```jsx
const apiMiddleware = ({ dispatch }) => next => async action => {
  const isAPIRequest = action?.path || action?.method;

  if (action.type) {
    if (isAPIRequest) {
      apiRelay({ ...action, dispatch, next });
      return;
    }

    next(action);
  }
};
```

### About `store.jsx`
The store is reponsible for combining all reducers, injecting any middleware and initializing Redux dev. tools. It passes a final state object
to the rest of the app by wrapping the app with `<Provider store={store} />` in **main.jsx**.

The following can be found in *store.jsx*:
```jsx
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducers } from 'controllers';
import { apiMiddleware } from 'middleware';
import { rootReducer } from 'modules';

// Do not add new module reducers to allReducers -- add them to controllers/reducersController.jsx
const allReducers = { ...reducers, root: rootReducer };
const mainReducer = combineReducers(allReducers);
const middleware = [ apiMiddleware ];

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const devTools = process.env.NODE_ENV !== 'production' && reduxDevTools;

const handleMiddleware = getDefaultMiddleWare => {
  const options = { serializableCheck: false };
  return getDefaultMiddleWare(options).concat(middleware);
};

const storeConfig = {
  reducer: mainReducer,
  devTools,
  middleware: handleMiddleware,
};

const store = configureStore(storeConfig);

export { store };
```