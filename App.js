import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nama  : Muhammad Rizky Ramadhan</Text>
        <Text>Kelas : XI RPL 4</Text>
        <Text>Absen : 24</Text>
        <Image 
        style={{height:512, width:384}}
        source={require('./1.jpg')}/>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
