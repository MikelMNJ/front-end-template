# About

**View app**: https://starterapp.netlify.app

This project is created with create-react-app and heavily modified with
features that enable you to quickly get up and running with a highly scalable, production-ready, web app.
It is also made specifically for MongoDB and Netlify, with Netlify lambda functions and built on Node 16.x

The app contains the following features to get you started:

**Front-end**:<br />
* Routing.
* Global state management (equal to Redux).
* Account creation, authentication and password reset flows with manual/auto log out.
* Feature flags.
* Front-end middleware/afterware support for global state updates.
* Notification system &mdash; dispatch from front-end to send UI feedback or send from back-end to convey server feedback (see the **Back-end** section for details).
* Style-sheet variable compatibility in JavaScript files.

Feel free to clone, modify and start your own projects with this template.



# Getting up and running

> **NPM users**: You will need to remove *yarn.lock* and *.yarnrc.yml* and change the deploy script in *package.json* from:<br />
> `"deploy": "yarn build && yarn build:server && netlify deploy --prod",`<br />
> to:<br />
> `"deploy": "npm run build && npm run build:server && netlify deploy --prod",`


1. Clone the repo.
2. Add *.env* to the project root with the following variables:
    ```
    REACT_APP_NAME=""
    REACT_APP_BASE_URL=""
    REACT_APP_API_V1="/.netlify/functions/server/v1/"
    REACT_APP_MONGO_URI=""
    REACT_APP_JWT_SECRET=""
    REACT_APP_SENTRY_DSN=""
    REACT_APP_EMAIL_API_KEY=""
    REACT_APP_VERIFIED_SENDER_EMAIL=""
    ```

    **Important**: Make sure you have the slash included at the end of the path in *REACT_APP_API_V1*!

3. In terminal, run `cd /path/to/project` then `yarn set version berry` (if not on a modern version of yarn already), followed by `yarn`.
For NPM users, run `npm i` in the project directory.
4. Finally, run `yarn start` and `yarn start:server` or `npm run start` and `npm run start:server`.

> You will need a valid SendGrid API Key and your SendGrid sender address must be verified with them.

See deployment section for additional steps to take before deployment to Netlify.


**Note about deployment services**: This has not been tested with other deployment services, like Heroku etc.  Any changes are likely to be in the
use of a *[service].toml* file, modification of the *start:server*, *build:server* and *deploy* scripts in *package.json*. `REACT_APP_API_V1="/.netlify/functions/server/v1/"`
will need to be updated in *.env*.  Finally, you will likely need to make modifications to how the *functions*
folder is handled by your service.



# Organization

The structure of this template is as follows:
* **components**: Reusable components.
* **controllers**: Front-end controllers, i.e. front-end routing.
* **errors**: Errors and debugging.
* **helpers**: Utility related functions.
* **modules**: Anything state related.
* **scenes**: Main route components.
* **theme**: Anything theme related.
* **wares**: Front-end middleware/afterware.
* **static**: Custom SVG, fonts or image files.

**Note**: Absolute pathing for JavaScript module imports has been added in *jsconfig.json*.



# Testing

Tests were set up as part of *create-react-app*.  The script command for testing, and others, can be found
in *package.json*.  It uses *Jest* and only requires the name *[componentName].test.js* &mdash; see *scenes/DeleteMe/DeleteMe.test.js*.



# Routing

Routing is handled with *react-router-dom*.  The *App* is wrapped in `<BrowserRouter />` tags in *index.js* and
*App.js* makes use of the `<Routes />` tag to receive all rendered route components from the `makeRoutes()` function in the routes controller.


### Adding or editing a route
*controllers/routesController.js* defines all routes to be rendered along with
the appropriate component, and whether that route requires authentication.

Routes are public by default.  If a route requires authentication for access, add **authenticate** to the route object:
```jsx
// controllers/routesController.js
const routes = [
  {
    // Private route example
    path: "/authenticated-route",
    element: <p>Authenticated Content</p>,
    authenticate: true,
  },
];
```

When you pass **authenticate**, the `makeRoutes()` function will require the JSON Web Token as the first argument or access to the route will be denied.
In the event that denial &mdash; due to a missing authToken, or invalid authToken &mdash; occurs, the user will be redirect to "/login" by default.  If your authentication page is not "/login" a second path string can be passed to override the default redirect path: `makeRoutes(authToken, "/your-login-route")`.

See the the full route controller and build function in *controllers/routesController.js*.

> *public/_redirects* forces the server to always return 200, OK so that *react-router-dom* can handle catching any 404 routes.

The relevant routing code has been included in this example and full implementation can be found in *scenes/App/App.js*:
```jsx
// scenes/App/App.js
import makeRoutes from 'controllers/routesController';

const App = props => {
  const renderApp = () => {
    const authToken = null; // Your JWT from state...

    return (
      <Routes>
        {makeRoutes(authToken)}
      </Routes>
    );
  };

  return (
    <div id="app">
      {renderApp()}
    </div>
  );
};
```



# Feature Flags
A basic feature flag object has been added in *featureFlags.js*.  You can expand this object or integrate it into your build pipeline,
however you see fit, to control features for different environments or deployments.

The following can be found in *flags.js*:
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
import React from 'react';
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



# Monitoring

Monitoring is handled with *Sentry* and is set up in *index.js*.  You will need your DSN, provided by Sentry.
Your DSN should be stored as REACT_APP_SENTRY_DSN in *.env*

If you do not wish to use *Sentry*, remove the package along with the import and environment conditional in *index.js*.



# Heartbeat

Should the internet connection fail while the user is using your app, the application will alert the user that the internet connection has failed.
Once the connection is restored, the app will continue rendering normally.  This is handled with a custom `<Heartbeat />` component that wraps the main
app in *index.js*.  It is disabled in development and also takes a `time={}` prop (in seconds) to control the interval it checks the connection in production.



# About Font Awesome
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
4. Change the import in *index.js* to `import '@fortawesome/fontawesome-pro/css/all.css';`

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



# Default theme

Default styles for common elements, such as forms, links, headers etc. can be found in *theme/common.scss* and *theme/forms.scss*.
*theme/common.scss* also contains class names for quick styling, such as *center*, *inline*, or common colors used in feedback and notifications, like *red*, *green*,
*yellow* or *blue*. Additional colors can be added and exported in *theme/colors.scss*.

## Accessing SASS variables in .js files
This is acheived with `yarn install sass` in *package.json* and **sass-loader: 7.2.0** or higher in *yarn.lock* (*package-lock.json* for npm).
From there, *.scss* files can be used freely throughout the project.  With that set, please take a look at *theme/colors.scss*.
A set of sass variables are defined in this style-sheet and exported using `:export {}`.  *colors.scss* is then called in *index.scss*
using `@use 'theme/colors' as *`, making the scss variables available in *index.scss*.  More importantly, *theme/colors.scss* can now be
imported in any JavaScript file with: `import colors from "theme/colors.scss"`, making color variables accessible with `colors.yourColor`.

In this example, colors are being used, but any style-sheet with any sass variable can be used in this way.



# State Management

State is handled with React's `useContext()` and `useReducer()` hooks.  A custom `useStore()` hook is used to read from *Context* as well.
This has been set up in an similar way to *Redux*.

## About the Reducer
The Reducer takes an initial state object and action.  You can find the `actionCreator()` function, along with
other state helpers and custom hooks (like `useDispatch()` or `useSelector()`) in *helpers/stateHelpers.js*.
The action creator passes an object with `{ type, payload }` to the reducer, where the reducer's *switch* statement
reads the `action.type` and updates state accordingly.

### About State Management
I have made an npm package that handles state updates in an immutable manner, see [state-wrangler](https://github.com/MikelMNJ/state-wrangler) for
details on how to use this. If you would rather use a library such as *immutableJS* you can swap `state-wrangler` out for that.


The following can be found in *modules/appReducer.js*:
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
Don't forget to add any new reducers in *store.js* &mdash; they should be added to `const reducers = {}`.



## About Actions and Selectors
Actions and Selectors are defined in objects for their specific module &mdash; the following can be found in *modules/appConstants.js*, *modules/appActions.js* and *modules/appSelectors.js*:
```jsx
// appConstants.js
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
// appActions.js
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
// appSelectors.js
const appSelectors = {
  // state.app with "app" being the reducer's imported name in store.js
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
A more complete example can be found in *scenes/DeleteMe/CheckState.js*:
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
A more complete example of this can be found in *scenes/DeleteMe/CheckAPI.js*:
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

The difference between a simple action call is that there is an additional *modules/app/appApi.js* file, imported as *api* in *modules/app/appActions.js*,
that describes everything the middleware needs to make the call.  Anything you would normally write to make an API call is valid in this object: `headers: {}`,
`body: JSON.stringify(payload)` etc.

There are extra keys the middleware will use that you should be aware of:
  * **type**, this is the `action.type` dispatch will need.
  * **onSuccess**, executes your callback only after 200 response.
  * **onFail**, executes your callback for anything >= 400 response.
  * **onComplete**, executes your callback after call is complete, regardless of response code.
  * **meta**, passes additional data for use in the reducer &mdash; accessible in the reducer with `action.meta`.

```jsx
// modules/app/appApi.js
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
Middleware and afterware can be added to the arrays of the same name in *store.js*, example: `const middlewares = [ apiMiddleware ];`

An example of middleware that this app uses can be found when any API action is called. Please see *wares/apiMiddleware.js* for the full example, including the `apiRelay()` function:
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

A modified version of `useReducer()` is being used to handle the injection of these wares and can be found in *helpers/stateHelpers.js*:
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

Please see the **About store.js** section to see this implemented.


## About store.js
Now that the reducer has been explored with constants/actions/selectors defined and used in components, let's take a look at the heart of it all &mdash; the store.

In a nutshell:
* Create state by creating *Context* for our app.
* Set up the ability to use that context with a *useStore* variable.
* Create `useSelector()` and `useDispatch()` hooks found in *helpers/stateHelpers.js* with *useStore*.
* Import all reducers from the *modules* folder and store in the `reducers = {}` object &mdash; think of this as an object containing all our modules.
* Loop through all reducers asking for their initial state object.
* Loop through all reducers and combine them, as functions, letting each manage their own "module" of state.
* Add any middleware/afterware to appropriate arrays.
* Call modified `useReducerWithWares()` to get the complete state object, execute wares as well as get the dispatch function.
* Memoize the array to prevent every subscribed component from updating if it's "module" hasn't been updated.
* Pass the final `{ state, dispatch }` object to the `<AppContext.Provider />`.
* Wrap `<App />` in *index.js* with `<AppProvider />`

And that completes the Redux-like global state management flow!

The following can be found in *store.js*:
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

// How to use: wrap <App /> in index.js with <AppProvider />
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

A banner alert system is included by default in *scenes/App.js*.  There is nothing you need to do in this file, but here is the relevant setup, for reference:

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
* REACT_APP_NAME
* REACT_APP_API_V1
* REACT_APP_SENTRY_DSN
