import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoItem({item, pressHandler}) {    //item passed as props, fn pressHandler as well !
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333'/>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item:{
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    borderStyle:'dashed',
    borderRadius:10,
    backgroundColor:'lightcyan',
    flexDirection:'row',
  },
  itemText:{
    marginLeft:20,
  }
})