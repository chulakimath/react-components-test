import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import userData from './userContact';
import ContactItem from '../../components/ContactItem';

const ContactList = () => {
    const renderer = ({ item }: any): JSX.Element => <ContactItem name={item.name} email={item.email} />
    return (
        <>

            <FlatList
                data={userData}
                renderItem={renderer}
                keyExtractor={(item): any => item.id}
                contentContainerStyle={[{  backgroundColor: 'white' }]}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(<View style={[{ backgroundColor: 'lightgreen', width: '100%',paddingVertical:10,marginTop:-5}]}>
                    <Text style={[{ fontSize: 30, padding: 10, color: 'black' }]}>
                        Contacts
                    </Text>
                </View>)}
            />
        </>
    )
}

export default ContactList

const styles = StyleSheet.create({})