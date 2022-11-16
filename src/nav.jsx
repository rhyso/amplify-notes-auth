import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { View } from '@aws-amplify/ui-react';
import './nav.css';
import 'animate.css';

function Nav() {
  return (
    <View>
      <nav className="navigation-strip with speed_up" role="navigation">
        <ul id="menu-main" className="navigation-strip__list">
          <li id="menu-item-4311" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4311"><a href="https://www.gloriouscreative.co.uk/work/">Work</a></li>
          <li id="menu-item-52" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"><a href="https://www.gloriouscreative.co.uk/about/">About</a></li>
          <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"><a href="https://www.gloriouscreative.co.uk/blog/">Blog</a></li>
          <li id="menu-item-50" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50"><a href="https://www.gloriouscreative.co.uk/contact/">Contact</a></li>
        </ul>
      </nav>
    </View>
  );
}

export default Nav;
