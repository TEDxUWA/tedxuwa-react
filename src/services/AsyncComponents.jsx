import React from "react";
import Loadable from "react-loadable";

const loading = () => null;

export default {
  AboutPage: Loadable({ loader: () => import("../pages/AboutPage"), loading }),
  EventsPage: Loadable({ loader: () => import("../pages/events"), loading }),
  ContactPage: Loadable({
    loader: () => import("../pages/ContactPage"),
    loading
  }),
  SponsorsPage: Loadable({
    loader: () => import("../pages/SponsorsPage"),
    loading
  }),
  SpeakersPage: Loadable({
    loader: () => import("../pages/speakers"),
    loading
  }),
  LandingPage: Loadable({
    loader: () => import("../pages/LandingPage"),
    loading
  }),
  NotFound: Loadable({
    loader: () => import("../pages/NotFound"),
    loading
  })
};
