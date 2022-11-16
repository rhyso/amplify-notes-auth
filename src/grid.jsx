import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { View } from '@aws-amplify/ui-react';
import './grid.css';
import 'animate.css';

const grid = () => (
  <View>
    <section>
      <div className="Grid">
        <div className="animate__animated animate__zoomIn Grid-item" />
        <div className="animate__animated animate__zoomIn Grid-item" />
        <div className="animate__animated animate__zoomIn Grid-item" />
        <div className="animate__animated animate__zoomIn Grid-item" />
      </div>
    </section>
  </View>
);

export default grid;
