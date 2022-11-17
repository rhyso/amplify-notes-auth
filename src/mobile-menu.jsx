/* eslint-disable no-alert */
import React from 'react';
import {
  Menu, MenuItem, View, Divider, ThemeProvider,
} from '@aws-amplify/ui-react';

function MobileMenu() {
  return (
    <View className="mobileMenu" width="4rem">
      <ThemeProvider colorMode="light">
        <Menu>
          <MenuItem onClick={() => alert('Download')}>Work</MenuItem>
          <MenuItem onClick={() => alert('Create a Copy')}>
            About
          </MenuItem>
          <MenuItem>
            Blog
          </MenuItem>
          <MenuItem>
            Contact
          </MenuItem>
          <Divider />
          <MenuItem isDisabled onClick={() => alert('Delete')}>
            Login
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </View>
  );
}

export default MobileMenu;
