import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Heading, View } from '@aws-amplify/ui-react';
import logo from './images/mb7-just-black.svg';
import logoWhite from './images/white2.svg';
import Footer from './footer';
import Grid from './grid';
import Nav from './nav';

import 'animate.css';

import './App.css';
// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';

function Home() {
  return (
    <View>
      <header className="hero">
        <div className="logo-wrapper">
          <section>
            <img className="bottom" width="200" height="200" alt="dsd" src={logo} />
            <img className="top" width="200" alt="ds" height="200" src={logoWhite} />
          </section>
        </div>
        <Nav />

      </header>
      <div className="body-content">
        <h1 className="animate__animated animate__backInRight hero-head">We design, build and scale digital products and companies.</h1>
        <h3>A longer subtitle but still important</h3>
        <button type="button" className="button">Some Action Here</button>

        <Grid />
        <Heading level={1}>My Notes App</Heading>
        <strong>TESTING HOME PAGE</strong>
      </div>

      <Footer />
    </View>
  );
}

export default Home;
