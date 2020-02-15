import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import Constants from 'expo-constants';
import CardFlip from 'react-native-card-flip';
import * as firebase from 'firebase';

const firebase_config = {
  apiKey: "AIzaSyC7J9HMiWn52MauPW3bpNhoQ0o7qyQ43nE",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://interesting-facts-b0ba0.firebaseio.com",
  projectId: "interesting-facts-b0ba0",
  storageBucket: "interesting-facts-b0ba0.appspot.com",
  messagingSenderId: "873056238962" 
  };   

if (!firebase.apps.length) {
  firebase.initializeApp(firebase_config);
}

export default class Play extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      cards: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    var array = [];
    var fireBaseResponse = firebase.database().ref();
    fireBaseResponse.once('value').then(snapshot => {
      snapshot.forEach(data => {
        var card = data.val();
        array.push(card);
      }); 
      this.setState({
        cards: snapshot.val()
      });
    });
  }


  render() {
    return (
      <View style={{flex:1}}>
          <View style={styles.container}>
      
              <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={[styles.card, styles.card1]}
                  onPress={() => this.card.flip()}>
                  <Text style={styles.label}>
                    {this.state.cards['kor']}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  style={[styles.card, styles.card2]}
                  onPress={() => this.card.flip()}>
                  <Text style={styles.label}>
                    {this.state.cards['eng']}
                  </Text>
                </TouchableOpacity>
              </CardFlip> 
          </View>

                    
          <View style={styles.button}>
            
            <TouchableOpacity
              style={styles.button} 
              onPress={() => this.props.navigation.navigate('Play')}>
              <Text>
                이전
              </Text>  
            </TouchableOpacity>
          

            <TouchableOpacity
              style={styles.button} 
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text>
                Home
              </Text>  
            </TouchableOpacity>
          
          
            <TouchableOpacity
              style={styles.button} 
              onPress={() => this.props.navigation.navigate('Play')}>
              <Text>
                다음
              </Text>  
            </TouchableOpacity>
          </View>

          


      </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    width: 320,
    height: 470,
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'steelblue',
  }

});