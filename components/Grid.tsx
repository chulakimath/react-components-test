import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
    { id: 1, title: "item1" },
    { id: 2, title: "item2" },
    { id: 3, title: "item3" },
    { id: 4, title: "item4" },
    { id: 5, title: "item5" },
    { id: 6, title: "item6" },
    { id: 7, title: "item7" },
    { id: 8, title: "item8" },
    { id: 9, title: "item9" },
    { id: 10, title: "item10" },
];
const Grid = () => {
    return (
        <SafeAreaView style={[styles.maiContainer]}>
            <View><Text style={[styles.textColor,styles.heading]}>Grid</Text></View>
            <ScrollView contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false} >
            {
                data.map(({id,title},ind)=>(
                <View style={[styles.gridItem]} key={id}>
                    <Text style={[styles.textColor,{fontSize:25}]}>{title}</Text>
                </View>))
            }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Grid

const styles = StyleSheet.create({
    maiContainer:{
        flex:1,
        backgroundColor:'#f8f9fa',
    },
    textColor:{
        color:'black'
    },
    heading:{
        padding:10,
        fontSize:30
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
    },
    gridItem:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        width:'45%',
        height:200,
        backgroundColor:"rgba(0,125,255,0.8)",
        marginVertical:10,
        borderRadius:10,
    }
})