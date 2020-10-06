import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';

const Width = Dimensions.get('window').width;

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://newsapi.org/v2/top-headlines?country=id&apiKey=bd53b9de417b41dbbe9eedb128524d88',
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kasus Corona Indonesi</Text>
      <View style={styles.content}>
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {flexDirection: 'row'},
  kotak: {
    margin: 5,
    width: Width / 3 - 10,
    height: 60,
    backgroundColor: 'red',
  },
  title: {textAlign: 'center', fontSize: 20, fontWeight: '500', padding: 20},
});
