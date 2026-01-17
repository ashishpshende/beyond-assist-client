import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { RootNavigator } from './src/navigation/RootNavigator';
import { StatusBar } from 'expo-status-bar';
import './src/i18n/i18n'; // Initialize i18n

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
      <StatusBar style="light" />
    </Provider>
  );
}
