import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

const UserCard = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.username}> {props.username} </Text>
        <View style={styles.innerContainer}>
        <Text> {props.name} </Text>
        <Text style={styles.email}> {props.email} </Text>
        </View>
    </SafeAreaView>
  )
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eceff1',
        marginVertical:5,
        padding:10,
    },
    email:{
        fontSize:12,
        fontStyle:'italic',
        color:'gray',
        marginLeft:5,
    },
    username:{
        fontWeight:'bold',
        fontSize:18,
    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default UserCard