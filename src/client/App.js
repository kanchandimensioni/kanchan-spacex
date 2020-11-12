import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

const App = ({ route }) => {
  return (
      <section className="spacex-launch-wrapper">
      < Header />
      <div className="spacex-launch-wrapper__main-container">
        <SideBar />
        {renderRoutes(route.routes)}
      </div>
      < Footer />
      </section>
  );
};

export default {
  component: App
};
