import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log('Press function');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        213 {'\n'}423
      </Text>
      <Button title="Button" onPress={handlePress} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
  },
});
