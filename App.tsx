import {useState} from 'react';
import {View, ScrollView, StyleSheet, Text, RefreshControl} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {
      key: 1,
      item: 'Item1',
    },
    {
      key: 2,
      item: 'Item2',
    },
    {
      key: 3,
      item: 'Item3',
    },
    {
      key: 4,
      item: 'Item4',
    },
    {
      key: 5,
      item: 'Item5',
    },
    {
      key: 6,
      item: 'Item6',
    },
    {
      key: 7,
      item: 'Item7',
    },
    {
      key: 8,
      item: 'Item8',
    },
    {
      key: 9,
      item: 'Item9',
    },
    {
      key: 10,
      item: 'Item10',
    },
    {
      key: 11,
      item: 'Item11',
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(items => [
        {key: new Date().getTime(), item: 'New Item '},
        ...items,
      ]);
      setRefreshing(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {items.map(item => (
          <View key={item?.key} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item?.item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    height: 100,
    marginTop: 10,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 40,
    color: 'white',
  },
});
