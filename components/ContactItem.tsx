import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactItem = ({ name, email }: any) => {
    return (
        <View style={[{ padding: 10 }]}>
            <View style={[{ backgroundColor: 'rgba(154,255,245,0.5)',padding:8,borderRadius:10 }]}>
                <Text style={[{ fontSize: 25,color:"black" }]}>{name}</Text>
                <Text style={[{ fontSize: 18,color:"black" }]}>{email}</Text>
            </View>
        </View>
    )
}

export default ContactItem

const styles = StyleSheet.create({})