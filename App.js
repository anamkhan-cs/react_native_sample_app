import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cam from './cam';

export default function App() {
  return (
    <View style={styles.container}>
      <Cam />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});