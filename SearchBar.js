import React from 'react';
import { Button, TextInput, View } from 'react-native';

function SearchBar(props) {
  return (
    <View>
      <Button title='Search' onPress={props.searchSubmit}/>
      <TextInput onChangeText={props.handleSearch} placeholder='...' value={props.searchState}/>
    </View>
  )
}
export default SearchBar;