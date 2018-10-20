import React from 'react';
import Loadable from 'react-loadable';

const loading = () => (
  <div className="loading-placeholder">
    <div className="center-content">
      <div className="loader" />
    </div>
  </div>
);

export default {
  AboutPage: Loadable({ loader: () => import('../pages/AboutPage'), loading }),
  EventsPage: Loadable({ loader: () => import('../pages/events'), loading }),
  ContactPage: Loadable({
    loader: () => import('../pages/ContactPage'),
    loading
  }),
  SponsorsPage: Loadable({
    loader: () => import('../pages/SponsorsPage'),
    loading
  }),
  LandingPage: Loadable({
    loader: () => import('../pages/LandingPage'),
    loading
  })
};
