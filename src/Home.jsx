import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';
import {

  Heading,

  View,

} from '@aws-amplify/ui-react';

function Home() {
  return (
    <View>
      <header className="hero">
        <div className="body-content">
          <h1 className="hero-head">We design, build and scale digital products and companies.</h1>
          <h3>A longer subtitle but still important</h3>
          <button type="button" className="button">Some Action Here</button>
        </div>
      </header>
      <div className="body-content">

        <Heading level={1}>My Notes App</Heading>
        <strong>TESTING HOME PAGE</strong>
      </div>
    </View>
  );
}

export default Home;
