import React from 'react';
import App from './App';
import LaunchesPage from './pages/LaunchesPage';
export default [
  {
    ...App,
    routes: [
      {
        ...LaunchesPage,
        path: '/',
        exact: true
      }
    ]
  }
];
