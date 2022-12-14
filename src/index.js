import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  defaultDarkModeOverride,
  ThemeProvider,
} from '@aws-amplify/ui-react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import config from './aws-exports';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<App />} />
    </Route>,
  ),
);

const theme = {
  name: 'my-theme',
  overrides: [defaultDarkModeOverride],
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} colorMode="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
