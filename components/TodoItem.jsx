import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function TodoItem({item}) {
  return (
    <TouchableOpacity>
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
  }
})