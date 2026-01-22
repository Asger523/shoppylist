import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StoresScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stores</Text>
      <Text style={styles.subtitle}>Your favorite stores</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
  },
});

export default StoresScreen;
