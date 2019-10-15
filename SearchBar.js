import React from 'react';
import { Button, TextInput, View } from 'react-native';

function SearchBar(props) {
  return (
    <View>
      <Button title='Search' onPress={props.searchSubmit}/>
      <TextInput name='term' onChangeText={props.handleSearch} placeholder='Term' value={props.searchState}/>
    </View>
  )
}
export default SearchBar;