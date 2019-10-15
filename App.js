import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar'

class App extends React.Component {

  state = {
    search: '',
    apiKey: 'i9ILNojyV0rEfrbzBuuPZxi6GnlLd-Cf4x7et90cMeTO5WpkO6cyJLpW1TcXnDwUBCgnnjR6yiyNxGwyxHvNoOH3C7QdjlXNi5QD8h6sxUIHJ3n5r3RHvVlAjiGlXXYx'
  };

  handleSearch = (event) => {
    this.setState({
      search: event
    })
  }

  handleSubmit = () => {
    console.log(this.state.apiKey)
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar searchSubmit={this.handleSubmit} searchState={this.state.search} handleSearch={this.handleSearch}/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;