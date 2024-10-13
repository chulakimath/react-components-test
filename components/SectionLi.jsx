import { StyleSheet, Text, View, SectionList } from 'react-native'
import React from 'react'

const SectionLi = () => {
    //the name of array should be data othrwise it wont work
    const items = [
        {
            title: "Fruits",
            data: [{ id: 1, name: 'apple' }, { id: 2, name: 'mango' }, { id: 3, name: 'orange' }]
        },
        {
            title: "vegitables",
            data: [{ id: 4, name: 'tomato' }, { id: 5, name: 'carrot' }, { id: 6, name: 'potato' }]
        },
    ];

    const renderer = ({ item }) => (<><Text>{item.name}</Text></>)
    const renderHead = ({ obj }) => (<><Text>{obj.title}</Text></>);

    return (
        <View>
            <SectionList
                sections={items}
                renderItem={renderer}
                renderSectionHeader={renderHead}
                keyExtractor={item => item.id}

            />
        </View>
    )
}

export default SectionLi

const styles = StyleSheet.create({})