import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar'

function App() {

    return (
      <View style={styles.container}>
        <SearchBar />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;