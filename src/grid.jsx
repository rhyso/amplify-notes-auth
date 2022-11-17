import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { View } from '@aws-amplify/ui-react';
import './grid.css';
import 'animate.css';

const grid = () => (
  <View>
    <section>
      <div className="Grid">
        <div className="animate__animated animate__zoomIn Grid-item grid-item1">
          <div className="overlayBlock">
            <h4 className="tag">UX Design</h4>
            <h4 className="tag">Web Application</h4>
          </div>
        </div>
        <div className="animate__animated animate__zoomIn Grid-item grid-item2">
          <div className="overlayBlock">
            <h4 className="tag">Consulting</h4>
          </div>
        </div>
        <div className="animate__animated animate__zoomIn Grid-item grid-item3" />
        <div className="animate__animated animate__zoomIn Grid-item grid-item4" />
      </div>
    </section>
  </View>
);

export default grid;
