import React from 'react';
import Judul from './Components/Judul';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Judul/>
        <Text style={warna.warnafont}>Nama  : Muhammad Rizky Ramadhan</Text>
        <Text style={warna.warnafont}>Kelas : XI RPL 4</Text>
        <Text style={warna.warnafont}>Absen : 24</Text>
        <Image 
        style={{height:256, width:192}}
        source={require('./1.jpg')}/>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const warna = StyleSheet.create({
  warnafont: {
    color: '#fff',
  },
});