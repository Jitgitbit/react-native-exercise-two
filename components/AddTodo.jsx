import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

export default function AddTodo() { 
  const [text, setText] = useState('');
  const changeHandler = () => {} 
  return (
    <View>
      <TextInput
      style={styles.input}
      placeholder='new todo...'
      onChangeText={changeHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    paddingHorizontal:8,
    paddingVertical:6,
    marginBottom:10,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
  }
})