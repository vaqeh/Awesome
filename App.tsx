import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
    source={require('./image/medsos.jpg')}
    style={styles.image}
  />
      <Text style={styles.textHeading}>Halo, DUNIA TIPU TIPU!</Text>
      <Text style={styles.text}>Ini adalah aplikasi React Native FAQIH</Text>
      <Text style={styles.text}>PENUH DENGAN BUG </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
  },
  
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  
  textHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});