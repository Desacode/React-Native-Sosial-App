import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <View>
      <Text>Hallo World</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
