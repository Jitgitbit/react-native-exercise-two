import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy coffee', key:'1'},
    {text:'pyramid exercise', key:'2'},
    {text:'breathing exercise', key:'3'},
  ])
  const pressHandler = (key) => {
    console.log(`item key:`,key)
    setTodos((prevTodos) => {
      return prevTodos.filter( todo => todo.key !== key)
    })
  }
  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          // ...prevTodos,
          {text: text, key: Math.random().toString()},   // because the app is so small, it is acceptable for now !
          ...prevTodos,                                     // now the new todos go to the top of the list !!!!!
        ]
      })
    }else{
      Alert.alert('OOPS', 'Todos must be over three chars long', [
        {text: 'Understood', onPress: console.log('alert closed')}
      ])
    }
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item}) => (
          <TodoItem item={item} pressHandler={pressHandler}/>          //item passed as props, and the fn pressHandler as well !
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
