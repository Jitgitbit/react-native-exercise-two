import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height:110,
    paddingTop:58,
    backgroundColor:'darkblue'
  },
  title:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  }
})