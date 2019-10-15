import React from 'react';
import { Button, TextInput, View } from 'react-native';

class SearchBar extends React.Component {

  state = {
    term: '',
    location: '',
    apiKey: 'i9ILNojyV0rEfrbzBuuPZxi6GnlLd-Cf4x7et90cMeTO5WpkO6cyJLpW1TcXnDwUBCgnnjR6yiyNxGwyxHvNoOH3C7QdjlXNi5QD8h6sxUIHJ3n5r3RHvVlAjiGlXXYx'
  }

  handleChange = (event) => {
    console.log(event.target)
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <View>
        <Button title='Search' onPress={this.handleSubmit}/>
        <TextInput name='term' onChangeText={this.handleChange} placeholder='term' value={this.state.term}/>
        <TextInput name='location' onChangeText={this.handleChange} placeholder='location' value={this.state.location}/>
      </View>
    );
  };
};
export default SearchBar;