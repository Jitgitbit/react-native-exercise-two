import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function TodoItem({item, pressHandler}) {    //item passed as props, fn pressHandler as well !
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemText:{
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    borderStyle:'dashed',
    borderRadius:10,
    backgroundColor:'lightcyan',
  }
})