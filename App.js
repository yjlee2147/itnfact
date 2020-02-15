import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import CardFlip from 'react-native-card-flip';

// You can import from local files
import AssetExample from './components/AssetExample';
import Navigator from './routes/StackNav';



export default function App() {
  return (
    <Navigator/>
  );

}
