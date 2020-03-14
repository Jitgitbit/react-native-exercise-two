import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy coffee', key:'1'},
    {text:'pyramid exercise', key:'2'},
    {text:'breathing exercise', key:'3'},
  ])
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item}) => (
          <Text>{item.text}</Text>
          )}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
