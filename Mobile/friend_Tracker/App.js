import React from 'react';
import { StatusBar, View } from 'react-native'

import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='#7d40e7' />
    </>
  );
}