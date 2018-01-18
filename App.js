'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import Profile from './Profile';

const App = StackNavigator({
    Home: { screen: SearchPage },
    Results: { screen: SearchResults },
    Profile: { screen: Profile },
});
export default App;

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
