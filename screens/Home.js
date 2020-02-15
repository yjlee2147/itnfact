import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Alert } from 'react-native';
import Constants from 'expo-constants';


export default function Home({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={{
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  }}>
          쓸모없지만 재미있는 사실을 영어로 배우자!
        
        </Text>

        <View style={{width: 395, height: 40}}>
          <Button title = "시작" color = "steelblue" onPress={() => navigation.navigate('Play')}/>
        </View>

        
        
      </View>
      
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});