import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy coffee', key:'1'},
    {text:'pyramid exercise', key:'2'},
    {text:'breathing exercise', key:'3'},
  ])
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item}) => (
          <TodoItem item={item}/>
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
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
