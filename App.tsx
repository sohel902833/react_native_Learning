import {NamedExoticComponent, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {
      item: 'Item1',
    },
    {
      item: 'Item2',
    },
    {
      item: 'Item3',
    },
    {
      item: 'Item4',
    },
    {
      item: 'Item5',
    },
    {
      item: 'Item6',
    },
    {
      item: 'Item7',
    },
    {
      item: 'Item8',
    },
    {
      item: 'Item9',
    },
    {
      item: 'Item10',
    },
    {
      item: 'Item11',
    },
  ]);
  const [nestedItems, setNestedItems] = useState([
    {
      item: 'Item1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      item: 'Item2',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      item: 'Item3',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      item: 'Item4',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      item: 'Item5',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      item: 'Item6',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
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
      <Text style={{fontSize: 30, color: 'black'}}>Section Lists</Text>
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={nestedItems}
        // horizontal={true}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{section?.item}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {/* <Text style={{fontSize: 30, color: 'black'}}>List By Scroll View</Text>
        <ScrollView
          style={{height: 400}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {items.map(item => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item?.item}</Text>
            </View>
          ))}
        </ScrollView> */}
      {/* <Text style={{fontSize: 30, color: 'black'}}>Flat Lists</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={items}
        // horizontal={true}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item?.item}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      /> */}
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
